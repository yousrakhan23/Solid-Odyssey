"use client";
import { useState } from "react";
import Loader from "@/components/Loader";
import { motion } from "framer-motion";
import { Prosto_One } from "next/font/google";
import { Exo_2 } from "next/font/google";

const fontExo = Exo_2({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-exo",
  style: "normal",
  display: "swap",
});

const fontProsto = Prosto_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rega-quay",
  style: "normal",
  display: "swap",
});

export default function Home() {
  const [loadingFinished, setLoadingFinished] = useState(false);
  const [curtainOpened, setCurtainOpened] = useState(false);

  const handleLoaderFinish = () => {
    setLoadingFinished(true);
    setTimeout(() => setCurtainOpened(true), 400); // Short delay for effect
  };

  return (
    <>
      {!loadingFinished && <Loader onFinish={handleLoaderFinish} />}

      {loadingFinished && (
        <motion.div
          className="fixed inset-0 z-40"
          initial={{ height: "100%" }}
          animate={{ height: curtainOpened ? "0%" : "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-black"></div>
          {/* <Image
            src="/images/furniture.jpg"
            alt="Furniture"
            layout="fill"
            objectFit="cover"
            priority
          /> */}
        </motion.div>
      )}

      {/* Main content under the curtain */}
      {curtainOpened && (
        <div className="relative min-h-screen">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50 z-0"
            style={{ backgroundImage: "url('/images/furniture.jpg')" }}
          ></div>

          {/* Foreground Text */}
          <div className="relative z-10 grid place-items-center min-h-screen text-center">
            <div>
              <h1 className={`${fontProsto.className} text-6xl text-black`}>
                Solid Odyssey
              </h1>
              <p
                className={`${fontExo.className} text-xl text-gray-600 mt-4 tracking-[0.5em] uppercase`}
              >
                furniture store
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
