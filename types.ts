
export type Category = 'Men' | 'Women' | 'Luxe' | 'New In';
export type Page = 'Home' | 'Boutique';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  image: string;
  colors: string[];
  sizes: string[];
  isFeatured?: boolean;
}

export interface AppState {
  currentPage: Page;
  currentCategory: Category | 'All';
  selectedProduct: Product | null;
  isMenuOpen: boolean;
}
