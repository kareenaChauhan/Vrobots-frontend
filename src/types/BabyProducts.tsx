export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
  inStock: boolean;
  rating?: number;
  reviews?: number;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  image: string;
  excerpt?: string;
}

export interface CompanyLogo {
  id: string;
  name: string;
  image: string;
}

export interface CountdownTimer {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface SafetyCertification {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProductSpecification {
  label: string;
  value: string;
}
