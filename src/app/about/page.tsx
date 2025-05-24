import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
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

const AboutUs = () => {
  return (
    <div>
      <Header />
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1
              className={`${fontProsto.className} text-4xl md:text-5xl font-serif font-bold text-yellow-600/40 mb-4`}
            >
              About Us – <span className="text-white">Solid Odyssey</span>
            </h1>
            <p
              className={`${fontExo.className} text-lg text-gray-600 max-w-3xl mx-auto`}
            ></p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className={`${fontExo.className} text-white text-base leading-relaxed`}>
              — At Solid Odyssey we believe that furniture should be more than
                just functional it should be an enduring piece of art, built to
                last for generations. Our journey began with a passion for solid
                wood craftsmanship sustainability, and a commitment to
                delivering heirloom-quality pieces that blend beauty,
                durability, and purpose.
              </p>
              {/* <p
                className={`${fontExo.className}text-white text-lg leading-relaxed`}
              >
                At
                <Link href="/">
                  <span
                    className={`${fontProsto.className}font-semibold text-yellow-600/40`}
                  >
                    Solid Odyssey
                  </span>
                </Link>
                , we believe that furniture should be more than just
                functional—it should be an enduring piece of art, built to last
                for generations. Our journey began with a passion for{" "}
                <span className="font-medium">solid wood craftsmanship</span>,
                sustainability, and a commitment to delivering{" "}
                <span className="italic">heirloom-quality</span> pieces that
                blend beauty, durability, and purpose.
              </p> */}

              <div className="bg-yellow-600/40 p-6 rounded-lg border-l-8 border-yellow-600/40">
                <h3
                  className={`${fontProsto.className} text-xl font-serif font-bold text-gray-900 mb-3`}
                >
                  Our Philosophy
                </h3>
                <p
                  className={`${fontExo.className} text-white leading-relaxed`}
                >
                  Every piece we create is a testament to{" "}
                  <span className="font-medium">
                    precision, authenticity, and artistry
                  </span>
                  . We source only the finest hardwoods and natural materials,
                  ensuring that each table, chair, or cabinet is not just
                  furniture—but a legacy.
                </p>
              </div>
            </div>

            <div className="relative  md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                width={500}
                height={500}
                src="/images/carousel5.jpg"
                alt="Craftsman working on Solid Odyssey furniture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
            </div>
          </div>

          <section className="text-gray-400 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                <h1 className={`${fontProsto.className} sm:text-3xl text-2xl font-medium title-font mb-4 text-yellow-600/40`}>
                  Why Choose Solid Odyssey?
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  {/* Whatever cardigan tote bag tumblr hexagon brooklyn
                  asymmetrical gentrify, subway tile poke farm-to-table. Franzen
                  you probably haven't heard of them man bun deep jianbing
                  selfies heirloom. */}
                </p>
              </div>
              <div className="flex flex-wrap -m-4">
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative">
                    <Image
                      alt="gallery"
                      className="absolute inset-0 w-full h-full object-right-bottom"
                      src="/images/sofa3.jpg"
                      width={500}
                      height={500}
                    />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-100 bg-yellow-600/40 opacity-0 hover:opacity-100">
                      <Image
                        src={"/images/icon1.png"}
                        alt="icon"
                        height={45}
                        width={45}
                        className="mb-1"
                      />

                      {/* <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
                        THE SUBTITLE
                      </h2> */}
                      <h1 className={`${fontProsto.className} title-font text-xl text-black font-bold mb-3`}>
                        Handcrafted Excellence
                      </h1>
                      <p className={`${fontExo.className} leading-relaxed text-black font-bold`}>
                        Each piece is meticulously crafted by skilled artisans.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative">
                    <Image
                      alt="gallery"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      src="/images/sofa14.jpg"
                      width={500}
                      height={500}
                    />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-100 bg-yellow-600/40 opacity-0 hover:opacity-100">
                      <Image
                        src={"/images/icon2.png"}
                        alt="icon"
                        width={45}
                        height={45}
                        className="mb-1"
                      />
                      {/* <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                        THE SUBTITLE
                      </h2> */}
                      <h1 className={`${fontProsto.className} title-font text-xl text-black font-bold mb-3`}>
                        Sustainable & Ethical
                      </h1>
                      <p className={`${fontExo.className} leading-relaxed text-black font-bold`}>
                        Responsibly sourced materials and eco-friendly
                        practices.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative">
                    <Image
                      alt="gallery"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      src="/images/sofa5.jpg"
                      width={500}
                      height={500}
                    />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-100 bg-yellow-600/40 opacity-0 hover:opacity-100">
                      <Image
                        src={"/images/icon3.png"}
                        alt="icon"
                        width={45}
                        height={45}
                        className="mb-1"
                      />
                      {/* <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                        THE SUBTITLE
                      </h2> */}
                      <h1 className={`${fontProsto.className} title-font text-xl text-black font-bold mb-3`}>
                        Timeless Designs
                      </h1>
                      <p className={`${fontExo.className} leading-relaxed text-black font-bold`}>
                        Elegance that never fades, transcending trends.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative">
                    <Image
                      alt="gallery"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      src="/images/sofa7.jpg"
                      width={500}
                      height={500}
                    />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-100 bg-yellow-600/40  opacity-0 hover:opacity-100">
                      <Image
                        src={"/images/icon4.png"}
                        alt="icon"
                        width={45}
                        height={45}
                        className="mb-1"
                      />
                      {/* <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                        THE SUBTITLE
                      </h2> */}
                      <h1 className={`${fontProsto.className} title-font text-xl text-black font-bold mb-3`}>
                        Built to Last
                      </h1>
                      <p className={`${fontExo.className} leading-relaxed text-black font-bold`}>
                        SO piece engineered for generations using 
                        time-tested joinery that grow more.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative">
                    <Image
                      alt="gallery"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      src="/images/sofa12.jpg"
                      width={500}
                      height={500}
                    />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-100 bg-yellow-600/40 opacity-0 hover:opacity-100">
                      <Image
                        src={"/images/icon5.png"}
                        alt="icon"
                        height={45}
                        width={45}
                        className="mb-1"
                      />
                      {/* <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                        THE SUBTITLE
                      </h2> */}
                      <h1 className={`${fontProsto.className} title-font text-xl text-black font-bold mb-3`}>
                        Master Woodworking
                      </h1>
                      <p className={`${fontExo.className} leading-relaxed text-black font-bold`}>
                        Traditional joinery techniques perfected over
                        generations.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative">
                    <Image
                      alt="gallery"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      src="/images/sofa11.jpg"
                      width={500}
                      height={500}
                    />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-100 bg-yellow-600/40 opacity-0 hover:opacity-100">
                      <Image
                        src={"/images/icon6.png"}
                        alt="icon"
                        width={45}
                        height={45}
                        className="mb-1"
                      />
                      {/* <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                        THE SUBTITLE
                      </h2> */}
                      <h1 className={`${fontProsto.className} title-font text-xl text-black font-bold mb-3`}>
                        Premium Materials
                      </h1>
                      <p className={`${fontExo.className} leading-relaxed text-black font-bold`}>
                        Only the finest hardwoods and luxury finishes for
                        unmatched elegance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-20 text-center">
            <p className={`${fontProsto.className} text-2xl font-extrabold text-white mb-8`}>
              Join the Odyssey. Own a Legacy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/products"
                className={`${fontProsto.className} px-6 py-4 bg-yellow-600/40 text-white transition`}
              >
                Shop Now
              </Link>
              <Link
                href="/contact"
                className={`${fontProsto.className} px-6 py-4 bg-yellow-600/40 text-white transition`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
