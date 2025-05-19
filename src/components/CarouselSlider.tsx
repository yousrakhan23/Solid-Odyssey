import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const images = [
  "/images/carousel1.jpg",
  "/images/carousel2.jpg",
  "/images/carousel3.jpg",
  "/images/carousel4.jpg",
  "/images/carousel5.jpg",
]

const CarouselSlider = () => {
  return (
    <Carousel className="w-full max-w-2xl mx-auto">
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    width={500}
                    height={500}
                    src={src}
                    alt={`carousel ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default CarouselSlider
