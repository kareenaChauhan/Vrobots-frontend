import { useMemo } from 'react';
import { useShopActions } from './useShopActions';
import { useProducts } from './useProducts';
import { Product } from '../types/product';

export interface WishlistItemWithDetails {
  id: string;
  productId: number;
  name: string;
  price: number;
  image: string;
  slug: string;
  category: string;
}

export const useWishlistItems = () => {
  const { wishlist } = useShopActions();
  const { products, loading: productsLoading } = useProducts();

  const wishlistItems = useMemo(() => {
    if (!products || products.length === 0) return [];

    return wishlist
      .map((productId) => {
        const product = products.find((p: Product) => p.id === productId);
        if (!product) return null;

        const wishlistItem = {
          id: `${productId}`,
          productId: productId,
          name: product.name,
          price: product.price,
          image: product.image || '/images/img_rectangle_225.png', // Fallback image
          slug: product.slug,
          category: product.category,
        } as WishlistItemWithDetails;

        console.log(`💖 Wishlist item image for ${product.name}:`, wishlistItem.image);
        return wishlistItem;
      })
      .filter(Boolean) as WishlistItemWithDetails[];
  }, [wishlist, products]);

  return {
    wishlistItems,
    totalItems: wishlistItems.length,
    loading: productsLoading,
  };
}; 