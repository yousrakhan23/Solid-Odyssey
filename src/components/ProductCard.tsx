import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { Exo_2 } from "next/font/google";

const fontExo = Exo_2({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-exo",
  style: "normal",
  display: "swap",
});
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow ">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-64 w-full">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className={`${fontExo.className} p-6`}>
          <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
          <div className="flex items-center mb-2">
            {/* Rating stars */}
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-600/40' : 'text-gray-400'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-gray-400 text-sm ml-1">
              ({product.reviews})
            </span>
          </div>
          <p className="text-gray-300 text-lg font-medium">
            ${product.price.toLocaleString()}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;