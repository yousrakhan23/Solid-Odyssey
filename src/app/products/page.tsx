import React from "react";
import Header from "@/components/Header";
import { getProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { Prosto_One } from "next/font/google";
import { Exo_2 } from "next/font/google";

const fontProsto = Prosto_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rega-quay",
  style: "normal",
  display: "swap",
});

const fontExo = Exo_2({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-exo",
  style: "normal",
  display: "swap",
});

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <div>
      <Header />
      <section className="text-gray-400 bg-zinc-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex w-full mb-20 flex-wrap">
            <h1
              className={`${fontProsto.className} sm:text-3xl text-2xl font-medium title-font text-yellow-600/40 lg:w-1/3 lg:mb-0 mb-4`}
            >
              Our Products
            </h1>
            <p
              className={`${fontExo.className} lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base`}
            >
              Each Solid Odyssey creation is a testament to the marriage of
              timeless design and uncompromising craftsmanship. Hand-sculpted by
              master artisans using century-old techniques, these pieces
              transcend trends to become future heirlooms. This is furniture
              designed to tell your story for generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
