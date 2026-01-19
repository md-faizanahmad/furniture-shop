"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { ProductCard } from "../collection/ProductCard";
import Image from "next/image";

interface StorySectionProps {
  side: "left" | "right";
  tag: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export function LivingRoomClientUI() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Sync dot indicators with horizontal scroll
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, offsetWidth } = scrollRef.current;
        const index = Math.round(scrollLeft / offsetWidth);
        setActiveIndex(index);
      }
    };

    const el = scrollRef.current;
    el?.addEventListener("scroll", handleScroll, { passive: true });
    return () => el?.removeEventListener("scroll", handleScroll);
  }, []);

  const products = [
    {
      id: "l1",
      name: "Nizam Sectional",
      price: "1,85,000",
      image:
        "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800",
      category: "Premium Seating",
      material: "Royal Velvet",
    },
    {
      id: "l2",
      name: "Onyx Coffee Table",
      price: "42,000",
      image:
        "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800",
      category: "Living Tables",
      material: "Black Marble",
    },
    {
      id: "l3",
      name: "Halo Pendant",
      price: "28,500",
      image:
        "https://images.unsplash.com/photo-1578490343589-ec110a8694b5?q=80&w=800",
      category: "Atmospheric Lighting",
      material: "Hand-blown Glass",
    },
  ];

  return (
    <div className="py-20 md:py-32 space-y-40 md:space-y-64 bg-[#fdfdfd]">
      {/* STORY CHAPTER 1 */}
      <StorySection
        side="left"
        tag="The Centerpiece"
        category="Sofas"
        title="Form Follows Feel"
        description="Our seating is designed to act as the primary architectural anchor of the room. Using high-density memory foam and reclaimed teak frames."
        image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200"
      />

      {/* PRODUCT SPOTLIGHT GRID */}
      <section className="container mx-auto px-6 overflow-hidden md:overflow-visible">
        <div className="flex justify-between items-end mb-12 md:mb-16 border-b border-stone-200 pb-8">
          <div className="space-y-2">
            <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.4em] block">
              Spotlight
            </span>
            <h3 className="text-4xl font-light tracking-tighter text-stone-900">
              Curated Elements
            </h3>
          </div>
          <span className="hidden md:block text-[10px] font-bold uppercase tracking-widest text-stone-400">
            01 — 03
          </span>
        </div>

        {/* Swipeable Container */}
        <div className="relative group">
          <div
            ref={scrollRef}
            className="flex flex-nowrap overflow-x-auto gap-8 pb-10 snap-x snap-mandatory no-scrollbar md:grid md:grid-cols-3 md:gap-12 md:pb-0 md:overflow-visible"
          >
            {products.map((product, i) => (
              <div
                key={product.id}
                className="min-w-[85vw] md:min-w-0 snap-center shrink-0"
              >
                <ProductCard index={i} product={product} />
              </div>
            ))}
          </div>

          {/* Pagination Dots - Mobile Only */}
          <div className="flex justify-center items-center gap-2.5 mt-4 md:hidden">
            {products.map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-1 rounded-full transition-all duration-500",
                  activeIndex === i ? "w-8 bg-stone-900" : "w-2 bg-stone-200",
                )}
              />
            ))}
          </div>
        </div>
      </section>

      {/* STORY CHAPTER 2 */}
      <StorySection
        side="right"
        tag="Atmospheric Balance"
        category="Lighting"
        title="Painting with Light"
        description="We believe lighting should be felt, not seen. Our diffused LED systems mimic the golden hour, providing a soft, cinematic glow to your evenings."
        image="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1200"
      />
    </div>
  );
}

function StorySection({
  side,
  tag,
  title,
  description,
  image,
  category,
}: StorySectionProps) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Improved parallax with Spring physics
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [50, -100]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={containerRef} className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Image Column */}
        <div className={cn(side === "right" ? "lg:order-2" : "lg:order-1")}>
          <motion.div
            style={{ y }}
            className="relative aspect-4/5 rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl"
          >
            <Image
              sizes="(max-width: 768px) 100vw, 50vw"
              fill
              src={image}
              className="w-full h-full object-cover scale-110"
              alt={title}
            />
            <div className="absolute top-6 left-6 md:top-8 md:left-8 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full shadow-lg">
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-stone-900">
                {category}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Text Column */}
        <div
          className={cn(
            "space-y-8 md:space-y-10",
            side === "right" ? "lg:order-1" : "lg:order-2",
          )}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.4em]">
              {tag}
            </span>
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-stone-900 leading-[0.95]">
              {title.split(" ").map((word, i) => (
                <span
                  key={i}
                  className={
                    i % 2 !== 0 ? "italic font-serif text-stone-400" : ""
                  }
                >
                  {word}{" "}
                </span>
              ))}
            </h2>
            <p className="text-lg md:text-xl text-stone-500 font-light leading-relaxed max-w-lg">
              {description}
            </p>
            <div className="pt-4">
              <button className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-stone-900 transition-all">
                Explore Series
                <div className="h-px w-12 bg-stone-900 transition-all group-hover:w-20" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
