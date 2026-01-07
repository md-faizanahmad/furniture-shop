"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HERO_SLIDES } from "@/lib/hero-data";

export function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="relative w-full overflow-x-hidden bg-stone-100">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <CarouselContent className="ml-0">
          {HERO_SLIDES.map((slide) => (
            <CarouselItem key={slide.id} className="pl-0">
              {/* Responsive Height: h-[50vh] on small, h-[70vh] on medium, h-[90vh] on large */}
              <div className="relative h-[50vh] sm:h-[70vh] lg:h-[90vh] w-full">
                {/* Background Image */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />

                {/* Overlay with Content - now a stronger gradient for contrast */}
                <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-transparent flex items-center">
                  <div className="container mx-auto px-6 md:px-12">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }} // Slide in from left
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="max-w-xl text-white"
                    >
                      {/* Subtitle - smaller on mobile, larger on desktop */}
                      <p className="mb-2 text-xs md:text-sm font-bold uppercase tracking-[0.3em]">
                        {slide.subtitle}
                      </p>
                      {/* Title - responsive sizing for impact */}
                      <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter">
                        {slide.title}
                      </h1>
                      {/* Description - hidden on very small screens to save space */}
                      <p className="mb-6 hidden sm:block text-sm md:text-lg opacity-90 font-light max-w-sm md:max-w-md">
                        {slide.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <Button
                          size="lg"
                          className="h-10 md:h-12 rounded-none bg-white text-stone-900 px-6 md:px-8 hover:bg-stone-200 border-none transition-colors"
                        >
                          {slide.cta}
                        </Button>
                        <Button
                          variant="outline"
                          size="lg"
                          className="h-10 md:h-12 rounded-none border-white text-white bg-transparent px-6 md:px-8 hover:bg-white hover:text-stone-900 transition-colors"
                        >
                          View Details
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
        <div className="hidden md:flex">
          <CarouselPrevious className="left-4 lg:left-8 h-12 w-12 border-none bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-stone-900 transition-all" />
          <CarouselNext className="right-4 lg:right-8 h-12 w-12 border-none bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-stone-900 transition-all" />
        </div>
      </Carousel>
    </section>
  );
}
