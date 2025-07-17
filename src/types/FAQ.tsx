export interface FAQCategory {
  id: string;
  name: string;
  icon: any;
  isActive: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  isExpanded?: boolean;
}

export interface Feature {
  icon: any;
  title: string;
  description: string;
}