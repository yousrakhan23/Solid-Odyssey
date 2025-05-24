export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  categories: string[];
  materials: string[];
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  rating: number;
  reviews: number;
}