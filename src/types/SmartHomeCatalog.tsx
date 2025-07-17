export interface Product {
    id: string;
    name: string;
    price: string;
    description: string;
    image: string;
    category: string;
    colors?: string[];
    inStock?: boolean;
  }
  
  export interface CategoryLink {
    name: string;
    href: string;
    active?: boolean;
  }
  
  export interface SliderItem {
    id: string;
    title: string;
    description: string;
    price: string;
    image: string;
    colors: string[];
    category: string;
  }
  
  export interface SliderGroup {
    id: string;
    title: string;
    items: SliderItem[];
  }