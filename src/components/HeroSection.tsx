import React from "react";
import CarouselSlider from "@/components/CarouselSlider";
import Link from "next/link";
import Image from "next/image";
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

const HeroSection = () => {
  return (
    <div>
      <section className="h-screen text-gray-400 bg-zinc-900 body-font flex items-center">
        <div className="container mx-auto px-5 py-10 flex flex-col md:flex-row items-center">
          {/* Left side text */}
          <div className="lg:flex-grow md:w-1/2 flex flex-col items-start text-left">
            <h4
              className={`${fontExo.className} uppercase text-yellow-600/40 mb-7 tracking-[0.5em]`}
            >
              Elegant
            </h4>
            <h1
              className={`${fontProsto.className} text-4xl md:text-6xl mb-7 font-bold text-white uppercase`}
            >
              Unique Design
            </h1>
            <p
              className={`${fontExo.className} mb-8 leading-relaxed text-gray-400`}
            >
              Right design and right ideas matter a lot in interior design
              business. <br />A style that makes a statement.
            </p>

            <Link href="/blog" passHref legacyBehavior>
              <button
                className={`${fontExo.className} px-6 py-4 bg-yellow-600/40 text-white transition transform duration-300`}
              >
                Discover Blog
              </button>
            </Link>
          </div>

          {/* Right side carousel */}
          <div className="md:w-1/2 w-full mt-10 md:mt-0">
            <CarouselSlider />
          </div>
        </div>
      </section>

      <div>
        <section className="text-gray-400 bg-zinc-900 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex w-full mb-20 flex-wrap">
              <h1
                className={`${fontProsto.className} sm:text-3xl text-2xl font-medium text-yellow-600/40 lg:w-1/3 lg:mb-0 mb-4`}
              >
                Our Master Pieces
              </h1>
              <p
                className={`${fontExo.className} lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base`}
              >
                We reject disposable culture. Every Solid Odyssey piece is
                engineered for generations using time-tested joinery,
                uncompromising materials, and finishes that grow more beautiful
                with age. This is not just furniture; it is your legacy in wood.
              </p>
            </div>
            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                  <Image
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="/images/banner1.jpg"
                    width={500}
                    height={300}
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <Image
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="/images/banner2.jpg"
                    width={501}
                    height={301}
                  />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <Image
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src="/images/banner3.jpg"
                    width={600}
                    height={360}
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <Image
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src="/images/banner4.jpg"
                    width={601}
                    height={361}
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <Image
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="/images/banner5.jpg"
                    width={502}
                    height={302}
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <Image
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src="/images/banner6.jpg"
                    width={503}
                    height={303}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
