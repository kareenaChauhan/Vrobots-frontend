export interface Product {
    id: number;
    name: string;
    price: number;
    originalPrice?: string;
    rating: number;
    reviews: number;
    image: string;
    category: string;
    isOnSale?: boolean;
    isFeatured?: boolean;
    badges?: string[];
    discount?: string;
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
  
  export interface CategoryItem {
    id: string;
    name: string;
    image: string;
  }