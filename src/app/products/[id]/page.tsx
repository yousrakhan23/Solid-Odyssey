import React from "react";
import Header from "@/components/Header";
import { getProductById } from "@/lib/products";
import Image from "next/image";
import { Exo_2 } from "next/font/google";

const fontExo = Exo_2({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-exo",
  style: "normal",
  display: "swap",
});
interface ProductPageProps {
  params: { id: string };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProductById(params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Header />
      <section className={`${fontExo.className} text-gray-400 bg-zinc-900 overflow-hidden`}>
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {/* Product Images */}
            <div className="lg:w-1/2 w-full space-y-4">
              <div className="relative h-96 w-full rounded-lg overflow-hidden">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="relative h-24">
                    <Image
                      src={image}
                      alt={`${product.name} detail ${index + 1}`}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-yellow-600/40 tracking-widest">
                SOLID ODYSSEY
              </h2>
              <h1 className="text-white text-3xl title-font font-medium mb-1">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex mb-4">
                <div className="flex items-center">
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
                  <span className="text-gray-400 ml-3">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <p className="leading-relaxed text-gray-400">
                {product.description}
              </p>

              {/* Specifications */}
              <div className="flex mt-6 items-center pb-5 border-b-2 border-yellow-600/40 mb-5">
                <div className="flex flex-col space-y-3">
                  <div>
                    <span className="text-gray-400">Materials: </span>
                    <span className="text-white">
                      {product.materials.join(", ")}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400">Dimensions: </span>
                    <span className="text-white">
                      {product.dimensions.width}cm (W) × {product.dimensions.height}cm (H) × {product.dimensions.depth}cm (D)
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="title-font font-medium text-2xl text-white">
                  ${product.price.toLocaleString()}
                </span>
                <button className="flex ml-auto text-white bg-yellow-600/40 border-0 py-2 px-6 focus:outline-none transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;