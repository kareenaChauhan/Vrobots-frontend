import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TO_CART, ADD_TO_EXISTING_CART } from '../graphql/mutations/addToCart';

export interface CartItem {
  id: number | string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  [key: string]: any;
}

interface CartContextType {
  cart: CartItem[];
  cartItems: CartItem[];
  addToCart: (product: CartItem, quantity?: number) => void;
  removeFromCart: (productId: number | string) => void;
  clearCart: () => void;
  isInCart: (productId: number | string) => boolean;
  cartCount: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const [addToCartMutation] = useMutation(ADD_TO_CART);
  const [addToExistingCartMutation] = useMutation(ADD_TO_EXISTING_CART);

  const addToCart = async (product: CartItem, quantity: number = 1) => {
    // 1. Prepare variables for API
    const email = localStorage.getItem('userEmail') || 'guest@example.com';
    const channel = 'default-channel';
    const variantId = product.variants?.[0]?.id || product.variantId || product.id;
    const lines = [{ variantId, quantity }];
    const token = localStorage.getItem('checkoutToken');

    try {
      if (token) {
        // Add to existing cart
        await addToExistingCartMutation({
          variables: { token, lines },
        });
      } else {
        // Create new cart
        const { data } = await addToCartMutation({
          variables: { email, lines, channel },
        });
        const newToken = data?.checkoutCreate?.checkout?.token;
        if (newToken) localStorage.setItem('checkoutToken', newToken);
      }
    } catch (error) {
      console.error('Add to cart API error:', error);
    }

    // 2. Update local state as before
    setCart((prev: CartItem[]) => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId: number | string) => {
    setCart((prev: CartItem[]) => prev.filter(item => item.id !== productId));
  };

  const clearCart = () => setCart([]);

  const isInCart = (productId: number | string) => cart.some(item => item.id === productId);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cart,
      cartItems: cart,
      addToCart,
      removeFromCart,
      clearCart,
      isInCart,
      cartCount,
      subtotal,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
