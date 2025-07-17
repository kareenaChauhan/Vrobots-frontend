import { useMemo } from 'react';
import { useShopActions } from './useShopActions';
import { useProducts } from './useProducts';
import { Product } from '../types/product';

export interface CartItemWithDetails {
  id: string;
  productId: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  slug: string;
  category: string;
}

export const useCartItems = () => {
  const { cart } = useShopActions();
  const { products, loading: productsLoading } = useProducts();

  const cartItems = useMemo(() => {
    if (!products || products.length === 0) return [];

    return cart
      .map((productId) => {
        const product = products.find((p: Product) => p.id === productId);
        if (!product) return null;

        const cartItem = {
          id: `${productId}`,
          productId: productId,
          name: product.name,
          price: product.price,
          quantity: 1, // Default quantity, can be enhanced later
          image: product.image || '/images/img_rectangle_225.png', // Fallback image
          slug: product.slug,
          category: product.category,
        } as CartItemWithDetails;

        console.log(`🖼️ Cart item image for ${product.name}:`, cartItem.image);
        return cartItem;
      })
      .filter(Boolean) as CartItemWithDetails[];
  }, [cart, products]);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return {
    cartItems,
    totalItems,
    subtotal,
    loading: productsLoading,
  };
}; 