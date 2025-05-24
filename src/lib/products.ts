import { Product } from "@/types/product";

export const getProducts = async (): Promise<Product[]> => {
 
  return [
    {
      id: "1",
      name: "Heritage Oak Dining Table",
      price: 2499,
      description: "Solid oak table with traditional mortise-and-tenon joinery",
      images: ["/images/banner1.jpg", "/images/banner2.jpg", "/images/banner3.jpg", "/images/banner4.jpg"],
      categories: ["dining", "tables"],
      materials: ["oak", "linseed-oil"],
      dimensions: { width: 180, height: 75, depth: 90 },
      rating: 4.8,
      reviews: 24
    },
    {
      id: "2",
      name: "Heritage Oak Dining Table",
      price: 2499,
      description: "Solid oak table with traditional mortise-and-tenon joinery",
      images: ["/images/banner2.jpg", "/images/banner2.jpg", "/images/banner3.jpg", "/images/banner4.jpg"],
      categories: ["dining", "tables"],
      materials: ["oak", "linseed-oil"],
      dimensions: { width: 180, height: 75, depth: 90 },
      rating: 4.8,
      reviews: 24
    },
    {
      id: "3",
      name: "Heritage Oak Dining Table",
      price: 2499,
      description: "Solid oak table with traditional mortise-and-tenon joinery",
      images: ["/images/banner3.jpg", "/images/banner2.jpg", "/images/banner3.jpg", "/images/banner4.jpg"],
      categories: ["dining", "tables"],
      materials: ["oak", "linseed-oil"],
      dimensions: { width: 180, height: 75, depth: 90 },
      rating: 4.8,
      reviews: 24
    },
    {
      id: "4",
      name: "Heritage Oak Dining Table",
      price: 2499,
      description: "Solid oak table with traditional mortise-and-tenon joinery",
      images: ["/images/banner4.jpg", "/images/banner2.jpg", "/images/banner3.jpg", "/images/banner4.jpg"],
      categories: ["dining", "tables"],
      materials: ["oak", "linseed-oil"],
      dimensions: { width: 180, height: 75, depth: 90 },
      rating: 4.8,
      reviews: 24
    },
    {
      id: "5",
      name: "Heritage Oak Dining Table",
      price: 2499,
      description: "Solid oak table with traditional mortise-and-tenon joinery",
      images: ["/images/banner5.jpg", "/images/banner2.jpg", "/images/banner3.jpg", "/images/banner4.jpg"],
      categories: ["dining", "tables"],
      materials: ["oak", "linseed-oil"],
      dimensions: { width: 180, height: 75, depth: 90 },
      rating: 4.8,
      reviews: 24
    },
    {
      id: "6",
      name: "Heritage Oak Dining Table",
      price: 2499,
      description: "Solid oak table with traditional mortise-and-tenon joinery",
      images: ["/images/banner6.jpg", "/images/banner2.jpg", "/images/banner3.jpg", "/images/banner4.jpg"],
      categories: ["dining", "tables"],
      materials: ["oak", "linseed-oil"],
      dimensions: { width: 180, height: 75, depth: 90 },
      rating: 4.8,
      reviews: 24
    },
  ];
};

export const getProductById = async (id: string): Promise<Product | null> => {
  const products = await getProducts();
  return products.find(p => p.id === id) || null;
};