"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MATERIAL_SWATCHES, Swatch } from "@/lib/swatch-data";
import Image from "next/image";

export function MaterialLab() {
  const [activeSwatch, setActiveSwatch] = useState<Swatch>(
    MATERIAL_SWATCHES[0]
  );

  return (
    <section className="py-32 bg-stone-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* 1. TEXTURE DISPLAY (Large Preview) */}
          <div className="flex-1 relative w-full aspect-square lg:aspect-4/5 rounded-[4rem] overflow-hidden shadow-2xl bg-stone-800">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSwatch.id}
                initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  fill
                  priority // Added priority for SEO and LCP performance
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src={activeSwatch.textureUrl}
                  className="object-cover"
                  alt={`Close up texture of ${activeSwatch.name}`}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

                <div className="absolute bottom-10 left-10 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400">
                    Provenance
                  </span>
                  <p className="text-xl font-serif italic text-white">
                    {activeSwatch.origin}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 2. SWATCH SELECTION & DETAILS */}
          <div className="flex-1 space-y-12">
            <div className="space-y-4">
              <span className="text-stone-500 text-[10px] font-bold uppercase tracking-[0.6em]">
                The Laboratory
              </span>
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter leading-none">
                Honest <br />
                <span className="italic font-serif text-stone-400">
                  Materials.
                </span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-4 md:gap-6">
              {MATERIAL_SWATCHES.map((swatch) => (
                <button
                  key={swatch.id}
                  onClick={() => setActiveSwatch(swatch)}
                  className="relative group focus:outline-none"
                  aria-label={`Select ${swatch.name} material`}
                >
                  <motion.div
                    animate={{
                      scale: activeSwatch.id === swatch.id ? 1.1 : 1,
                      // Fixed: Animating to rgba(0,0,0,0) instead of "transparent"
                      borderColor:
                        activeSwatch.id === swatch.id
                          ? "rgba(255, 255, 255, 1)"
                          : "rgba(255, 255, 255, 0)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative h-16 w-16 md:h-20 md:w-20 rounded-2xl border-2 p-1 bg-stone-800 overflow-hidden"
                  >
                    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-inner bg-stone-700">
                      <Image
                        fill
                        sizes="80px" // Optimized size for swatches
                        src={swatch.textureUrl}
                        className="object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                        alt="" // Decorative image
                      />
                    </div>
                  </motion.div>

                  {activeSwatch.id === swatch.id && (
                    <motion.div
                      layoutId="activeDot"
                      className="relative h-1.5 w-1.5 bg-white rounded-full mx-auto mt-4"
                    />
                  )}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeSwatch.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 max-w-md relative"
              >
                <h4 className="text-2xl font-medium tracking-tight">
                  {activeSwatch.name}
                </h4>
                <p className="text-stone-400 font-light leading-relaxed text-lg">
                  {activeSwatch.description}
                </p>
                <div className="h-px w-full bg-stone-800" />
                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-stone-500">
                  <span>Durable Finish</span>
                  <span>Artisanal Sourcing</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
