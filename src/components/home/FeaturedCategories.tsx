"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FEATURED_CATEGORIES } from "@/lib/featured-categories";
import { ArrowRight } from "lucide-react";

export function FeaturedCategories() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#fcfcfc] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-stone-900 mb-4">
              Shop by{" "}
              <span className="italic font-serif text-stone-500">Room</span>
            </h2>
            <p className="text-stone-500 text-lg font-light leading-relaxed">
              Experience the harmony of design and comfort in every corner.
            </p>
          </div>
        </div>

        {/* The Expanding Grid */}
        <div className="flex flex-col md:flex-row h-120 gap-4 w-full">
          {FEATURED_CATEGORIES.map((category, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={category.name}
                // 1. USE LAYOUT PROP: This handles the width change smoothly
                layout
                onMouseEnter={() => setHoveredIndex(index)}
                className="relative overflow-hidden rounded-3xl cursor-pointer"
                // 2. USE ANIMATE INSTEAD OF STYLE: This syncs with Framer's physics engine
                animate={{
                  flex: isHovered ? 3 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 1,
                }}
              >
                <Link
                  href={category.link}
                  className="h-full w-full block relative"
                >
                  {/* Image with subtle zoom on hover */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{ scale: isHovered ? 1.05 : 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </motion.div>

                  {/* Dark Overlay with transition */}
                  <motion.div
                    className="absolute inset-0 z-10"
                    animate={{
                      backgroundColor: isHovered
                        ? "rgba(0,0,0,0.2)"
                        : "rgba(0,0,0,0.5)",
                    }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Text Content */}
                  <div className="absolute inset-0 p-10 flex flex-col justify-end z-20">
                    <div className="relative">
                      <motion.p
                        animate={{
                          opacity: isHovered ? 1 : 0.6,
                          x: isHovered ? 0 : -5,
                        }}
                        className="text-white text-xs font-bold uppercase tracking-[0.3em] mb-3"
                      >
                        {category.name.split(" ")[0]}
                      </motion.p>

                      <h3 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight whitespace-nowrap">
                        {category.name}
                      </h3>

                      <AnimatePresence mode="wait">
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="overflow-hidden"
                          >
                            <p className="text-white/80 font-light max-w-xs mb-6 leading-relaxed">
                              {category.description}
                            </p>
                            <div className="flex items-center gap-2 text-white text-sm font-semibold group">
                              Explore Now
                              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
