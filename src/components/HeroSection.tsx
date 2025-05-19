import CarouselSlider from "@/components/CarouselSlider"
import { Prosto_One } from "next/font/google"
import { Exo_2 } from "next/font/google"


const fontProsto = Prosto_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rega-quay",
  style: "normal",
  display: "swap",
})

const fontExo = Exo_2({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-exo",
  style: "normal",
  display: "swap",
})

const HeroSection = () => {
  return (
    <section className="h-screen text-gray-400 bg-zinc-900 body-font flex items-center">
      <div className="container mx-auto px-5 py-10 flex flex-col md:flex-row items-center">
        {/* Left side text */}
        <div className="lg:flex-grow md:w-1/2 flex flex-col items-start text-left">
          <h4 className={`${fontExo.className} uppercase text-yellow-600/40 mb-7 tracking-[0.5em]`}>Elegant</h4>
          <h1 className={`${fontProsto.className} text-4xl md:text-6xl mb-7 font-bold text-white uppercase`}>
            Unique Design
          </h1>
          <p className={`${fontExo.className} mb-8 leading-relaxed text-gray-400`}>
            Right design and right ideas matter a lot in interior design business. <br />
            A style that makes a statement.
          </p>
          <button className="px-6 py-4 bg-yellow-600/40 text-white transition">
            Discover Work
          </button>
        </div>

        {/* Right side carousel */}
        <div className="md:w-1/2 w-full mt-10 md:mt-0">
          <CarouselSlider />
        </div>
      </div>
    </section>
  )
}

export default HeroSection;
