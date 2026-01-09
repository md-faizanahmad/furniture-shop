"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils"; // Ensure this path exists
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
  return (
    <div className="py-32 space-y-64">
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
      <section className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16 border-b border-stone-200 pb-8">
          <h3 className="text-4xl font-light tracking-tighter">
            Curated Elements
          </h3>
          <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
            01 — 03
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <ProductCard
            index={0}
            product={{
              id: "l1",
              name: "Nizam Sectional",
              price: "1,85,000",
              image:
                "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800",
              category: "Premium Seating",
              material: "Royal Velvet",
            }}
          />
          <ProductCard
            index={1}
            product={{
              id: "l2",
              name: "Onyx Coffee Table",
              price: "42,000",
              image:
                "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800",
              category: "Living Tables",
              material: "Black Marble",
            }}
          />
          <ProductCard
            index={2}
            product={{
              id: "l3",
              name: "Halo Pendant",
              price: "28,500",
              image:
                "https://images.unsplash.com/photo-1578490343589-ec110a8694b5",
              category: "Atmospheric Lighting",
              material: "Hand-blown Glass",
            }}
          />
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

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, -150]), {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div ref={containerRef} className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* Image Column with Parallax */}
        <div className={cn(side === "right" ? "lg:order-2" : "lg:order-1")}>
          <motion.div
            style={{ y }}
            className="relative aspect-4/5 rounded-[4rem] overflow-hidden shadow-2xl"
          >
            <Image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              src={image}
              className="w-full h-full object-cover scale-110"
              alt={title}
            />
            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-6 py-2 rounded-full shadow-xl">
              <span className="text-[10px] font-bold uppercase tracking-widest text-stone-900">
                {category}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Text Column */}
        <div
          className={cn(
            "space-y-10",
            side === "right" ? "lg:order-1" : "lg:order-2"
          )}
        >
          <motion.div
            initial={{ opacity: 0, x: side === "left" ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.4em]">
              {tag}
            </span>
            <h2 className="text-6xl md:text-7xl font-light tracking-tighter text-stone-900 leading-none">
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
            <p className="text-xl text-stone-500 font-light leading-relaxed max-w-lg">
              {description}
            </p>
            <div className="pt-6">
              <button className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-stone-900">
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
