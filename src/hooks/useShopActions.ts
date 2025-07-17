import { useEffect } from "react";
import { useCallback, useState } from "react";
import { useAddToCart } from "./useAddToCart"; 
import { useCart } from "../hooks/useGetCart";

export const useShopActions = () => {
  const { addToCart, cart, setCart } = useAddToCart();
  const { cartData , loading, error } = useCart();
  const [wishlist, setWishlist] = useState<number[]>([]);


  useEffect(() => {
    console.log("🔄 Cart data changed:", cartData);
    if (cartData?.lines && Array.isArray(cartData.lines)) {
      const serverProductIds = cartData.lines
        .filter((line: any) => line?.variant?.product?.id) // ✅ Filter out invalid entries
        .map((line: any) => line.variant.product.id);
      
      console.log("📦 Server product IDs:", serverProductIds);
      
      if (serverProductIds.length > 0) {
        // ✅ Merge server cart with local cart to maintain state across refreshes
        setCart((prevCart) => {
          const mergedCart = [...new Set([...prevCart, ...serverProductIds])];
          console.log("✅ Merged cart - Local:", prevCart, "Server:", serverProductIds, "Merged:", mergedCart);
          return mergedCart;
        });
      } else {
        console.log("⚠️ No valid product IDs found in server cart");
      }
    } else {
      console.log("❌ No cart data or lines found");
    }
  }, [cartData]);

  console.log("cartDataddddddddddddddddddddddddddddddddddddddddddd from useShopActions",cartData)

  const handleAddToCart = useCallback(
    async (productId: any, email: string, variantId: string) => {
      if (!email || !variantId) {
        console.error("Missing email or variantId");
        return;
      }

      try {
        await addToCart({
          email,
          variantId,
          quantity: 1,
        });

        setCart((prevCart) => {
          const updatedCart = [...prevCart, productId];
          console.log("Updated cart:", updatedCart);
          return updatedCart;
        });

        alert(`Product ${productId} added to cart!`);
        console.log("carttttttttttttttttttttttttttttttt data fetched here dddf :",cart)
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    },
    [addToCart, setCart]
  );

  const handleToggleWishlist = useCallback(
    (productId: any) => {
      setWishlist((prevWishlist) => {
        const updatedWishlist = prevWishlist.includes(productId)
          ? prevWishlist.filter((id) => id !== productId)
          : [...prevWishlist, productId];

        console.log("Updated wishlist:", updatedWishlist);
        return updatedWishlist;
      });
      console.log("wishlist data fetched here dddf :",wishlist)
    },
    []
  );

  const handleRemoveFromCart = useCallback(
    (productId: any) => {
      setCart((prevCart) => {
        const updatedCart = prevCart.filter((id) => id !== productId);
        console.log("Removed from cart:", productId, "Updated cart:", updatedCart);
        return updatedCart;
      });
    },
    [setCart]
  );

  const isInCart = useCallback(
    (productId: any) => {
      const result = cart.includes(productId);
      console.log(`🔍 Checking if product ${productId} is in cart:`, result, "Current cart:", cart);
      return result;
    },
    [cart]
  );

  const isInWishlist = useCallback(
    (productId: any) => wishlist.includes(productId),
    [wishlist]
  );

  return {
    handleAddToCart,
    handleToggleWishlist,
    handleRemoveFromCart,
    isInCart,
    isInWishlist,
    cart,
    wishlist,
  };
};
