// hooks/useProducts.ts
import { useQuery } from '@apollo/client';
import { GET_ALL_PRODUCTS } from '../graphql/queries/products';
import { Product } from '../types/product';

export const useProducts = () => {
  const { data, loading, error } = useQuery(GET_ALL_PRODUCTS);

  const normalizeProduct = (raw: any , index: number): Product => ({
    id: raw.id,
    name: raw.name,
    image: raw.images?.[0]?.url.replace("http://localhost:8000", "http://13.200.195.70:8000"),
    category: raw.category?.name || '',
    description: raw.description,
    price: raw.pricing?.priceRange?.start?.gross?.amount || 0,
    originalPrice: raw.pricing?.priceRange?.start?.gross?.amount || 0,
    rating: raw.rating , // Mocked rating (or use raw.rating if available)
    reviews: raw.reviews , // Mocked number of reviews
    variants: raw.variants,
    inStock: true, // Set based on availability if available
    slug: raw.slug,
    attributes: raw.attributes,
    // isLarge: (Math.floor(index / 5) % 2 === 0 && index % 5 === 0) || (Math.floor(index / 5) % 2 === 1 && index % 5 === 4)
    // badges: ['New'], 
  });

  const products: Product[] = data?.products?.edges?.map((edge: any , index: number) =>
    normalizeProduct(edge.node , index)
  ) || [];

  return { products, loading, error };
};


