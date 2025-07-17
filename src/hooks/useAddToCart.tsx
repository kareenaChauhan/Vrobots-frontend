import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_TO_CART, ADD_TO_EXISTING_CART } from "../graphql/mutations/addToCart";

export const useAddToCart = () => {
  const [createCheckoutMutation] = useMutation(ADD_TO_CART);
  const [addToExistingCartMutation] = useMutation(ADD_TO_EXISTING_CART);

  // ✅ Local cart state to track added product IDs with persistence
  const [cart, setCart] = useState<any[]>(() => {
    // Try to load cart from localStorage on initialization
    const savedCart = localStorage.getItem('localCart');
    if (savedCart && savedCart !== 'null' && savedCart !== 'undefined') {
      try {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart)) {
          console.log('📦 Loaded cart from localStorage:', parsedCart);
          return parsedCart;
        } else {
          console.warn('❌ Invalid cart data in localStorage, clearing...');
          localStorage.removeItem('localCart');
          return [];
        }
      } catch (error) {
        console.warn('❌ Failed to parse saved cart from localStorage:', error);
        localStorage.removeItem('localCart');
        return [];
      }
    }
    console.log('🆕 No saved cart found, starting with empty cart');
    return [];
  });

  const addToCart = async ({
    email,
    variantId,
    quantity = 1,
    channel = "default-channel",
  }: {
    email: string;
    variantId: string;
    quantity?: number;
    channel?: string;
  }) => {
    const existingToken = localStorage.getItem("checkoutToken");
    
    let data;
    
    if (existingToken) {
      // ✅ Add to existing cart
      console.log("Adding to existing cart with token:", existingToken);
      data = await addToExistingCartMutation({
        variables: {
          token: existingToken,
          lines: [
            {
              variantId,
              quantity,
            },
          ],
        },
      });
    } else {
      // ✅ Create new cart
      console.log("Creating new cart");
      data = await createCheckoutMutation({
        variables: {
          email,
          channel,
          lines: [
            {
              variantId,
              quantity,
            },
          ],
        },
      });

      // ✅ Get the token from the response and store it
      const token = data?.data?.checkoutCreate?.checkout?.token;
      if (token) {
        localStorage.setItem("checkoutToken", token);
        console.log("checkoutToken stored in localStorage", token);
      }
    }

    return data;
  };

  // ✅ Function to update cart and persist to localStorage
  const updateCart = (newCart: any[] | ((prevCart: any[]) => any[])) => {
    setCart((prevCart) => {
      const updatedCart = typeof newCart === 'function' ? newCart(prevCart) : newCart;
      
      // ✅ Safety check: ensure updatedCart is valid before saving
      if (Array.isArray(updatedCart)) {
        localStorage.setItem('localCart', JSON.stringify(updatedCart));
        console.log('💾 Saved cart to localStorage:', updatedCart);
      } else {
        console.warn('❌ Invalid cart data, not saving to localStorage:', updatedCart);
      }
      
      return updatedCart;
    });
  };

  // ✅ Utility function to clear cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('localCart');
    console.log('🗑️ Cart cleared');
  };

  return {
    addToCart,
    cart,
    setCart: updateCart, // ✅ expose updateCart instead of setCart
    clearCart, // ✅ expose clearCart utility
  };
};
