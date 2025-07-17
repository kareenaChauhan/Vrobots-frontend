// hooks/useProductBySlug.ts
import { useQuery } from '@apollo/client';
import { GET_PRODUCT_BY_SLUG } from '../graphql/queries/products';
import { Product } from '../types/product';

export const useProductBySlug = (slug: any) => {
  const { data, loading, error } = useQuery(GET_PRODUCT_BY_SLUG, {
    variables: { slug },
    skip: !slug,
  });

  const normalizeProduct = (raw: any, index: number): any => ({
    id: raw.id,
    name: raw.name,
    image: raw.images,
    category: raw.category?.name || '',
    description: raw.description,
    price: raw.pricing?.priceRange?.start?.gross?.amount || 0,
    originalPrice: raw.pricing?.priceRange?.start?.gross?.amount || 0,
    rating: raw.rating ,
    reviews: raw.reviews ,
    variants: raw.variants,
    inStock: true,
    slug: raw.slug,
    attributes: raw.attributes,
    isLarge: false, // optional for detail view
    badges: ['New'], // optional default badge
  });

  const raw = data?.product;
  const product: Product | null = raw ? normalizeProduct(raw, 0) : null;

  return { product, loading, error };
};
