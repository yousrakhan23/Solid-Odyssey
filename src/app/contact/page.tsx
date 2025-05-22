import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
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

const Contact = () => {
  return (
    <div className="bg-zinc-900 ">
      <Header />

      {/* Carousel */}
      <div className="carousel w-full max-h-[75vh] overflow-hidden rounded-lg shadow-2xl relative opacity-35">
        {[
          "Contact Us",
          "Discover elegance in every detail.",
          "Crafting comfort and style for your home.",
          "Where ideas become iconic spaces.",
          "Luxury interiors made personal.",
          "Designs that inspire and impress.",
        ].map((text, index) => {
          const n = index + 1;
          return (
            <div
              key={n}
              id={`slide${n}`}
              className="carousel-item relative w-full"
            >
              <Image
                src={`/images/banner${n}.jpg`}
                alt={`image${n}`}
                width={1000}
                height={1000}
                className="w-full object-cover h-[60vh] sm:h-[70vh] md:h-[75vh]"
              />

              {/* Text overlay */}
              <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                <div className="bg-black/50 p-2 sm:p-4 md:p-6 rounded-lg max-w-[90%] mx-auto">
                  <h2
                    className={`${fontExo.className} text-yellow-600 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold`}
                  >
                    {text}
                  </h2>
                </div>
              </div>

              {/* Navigation arrows */}
              <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 sm:left-5 sm:right-5 top-1/2 z-10">
                <Link
                  href={`#slide${((n - 2 + 6) % 6) + 1}`}
                  className="btn btn-circle"
                >
                  ❮
                </Link>
                <Link href={`#slide${(n % 6) + 1}`} className="btn btn-circle">
                  ❯
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Contact Section */}
      <section className="text-gray-400 bg-zinc-900  relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-zinc-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              style={{
                filter: "grayscale(1) contrast(1.2) opacity(0.16)",
                border: "none",
              }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
            />
            <div className="bg-zinc-900 relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2
                  className={`${fontProsto.className} text-white tracking-widest text-xs`}
                >
                  ADDRESS
                </h2>
                <p className={`${fontExo.className} mt-1`}>
                  Karachi Pakistan
                  .................................................................
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2
                  className={`${fontExo.className} title-font font-semibold text-white tracking-widest text-xs`}
                >
                  EMAIL
                </h2>
                <a
                  className={`${fontExo.className} text-yellow-600/40 leading-relaxed`}
                >
                  solidodyssey@gmail.com
                </a>
                <h2
                  className={`${fontExo.className} title-font font-semibold text-white tracking-widest text-xs mt-4`}
                >
                  PHONE
                </h2>
                <p className={`${fontExo.className} leading-relaxed`}>
                  123-456-7890
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2
              className={`${fontProsto.className} text-white text-lg mb-1 font-medium `}
            >
              Feedback
            </h2>
            <p className={`${fontExo.className} leading-relaxed mb-5`}>
              Your valuable feedback is instrumental in shaping our growth and
              excellence. We appreciate your candid insights, which enable us to
              refine our processes, enhance our offerings, and deliver
              exceptional experiences.
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="name"
                className={`${fontExo.className} leading-7 text-sm text-gray-400`}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-zinc-900 rounded border border-zinc-800  text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className={`${fontExo.className} leading-7 text-sm text-gray-400`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-zinc-900 rounded border border-zinc-800  text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className={`${fontExo.className} leading-7 text-sm text-gray-400`}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-zinc-900 rounded border border-zinc-800 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
            <button
              className={`${fontExo.className} px-6 py-4 bg-yellow-600/40 text-white transition`}
            >
              Submit
            </button>
            <p
              className={`${fontProsto.className} text-xs text-gray-400 text-opacity-90 mt-3`}
            >
              We will get back to you soon🤍
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
