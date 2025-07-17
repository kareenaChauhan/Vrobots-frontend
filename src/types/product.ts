export interface Product {
  id: number;
  name: string;
  image: any;
  category: string;
  description: string;
  price: number;
  slug: string;
  variants: any;
  // url: string;
  originalPrice?: number;
  inStock: boolean;
  rating: number;
  attributes: any;
  reviews: any;
  badges?: string[];
  isLarge?: boolean;
}


export interface FilterState {
  searchTerm: string;
  minPrice: number;
  maxPrice: number;
  selectedColors: string[];
  selectedSizes: string[];
  selectedCategories: string[];
  selectedTags: string[];
}

export interface Color {
  color: string;
  name: string;
}

export interface Category {
  name: string;
  count: number;
}