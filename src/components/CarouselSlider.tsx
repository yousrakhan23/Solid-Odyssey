"use client"

import * as React from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  
} from "@/components/ui/carousel"

const images = [
  "/images/carousel1.jpg",
  "/images/carousel2.jpg",
  "/images/carousel3.jpg",
  "/images/carousel4.jpg",
  "/images/carousel5.jpg",
]

const CarouselSlider = () => {
  const [current, setCurrent] = React.useState(0)
  const totalSlides = images.length

  // Auto-slide every 4 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Carousel className="w-full max-w-sm mx-auto relative">
      <CarouselContent
        style={{
          transform: `translateX(-${current * 100}%)`,
          transition: "transform 0.6s ease-in-out",
          display: "flex",
        }}
      >
        {images.map((src, index) => (
          <CarouselItem
            key={index}
            className="w-full flex-shrink-0"
          >
            <div className="overflow-hidden shadow-xl transition hover:scale-[1.02]">
              <Image
                src={src}
                width={900}
                height={900}
                alt={`carousel ${index + 1}`}
                className="w-full h-[700px] md:h-[600px] aspect-square object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Optional manual controls */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2">
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides)}
          className="bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
        >
          ‹
        </button>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % totalSlides)}
          className="bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
        >
          ›
        </button>
      </div>
    </Carousel>
  )
}

export default CarouselSlider
