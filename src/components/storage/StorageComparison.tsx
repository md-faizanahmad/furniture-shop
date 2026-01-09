"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Maximize, Ruler, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { STORAGE_UNITS } from "@/lib/storage/comparison-data";

export function StorageComparison() {
  const [selected, setSelected] = useState(STORAGE_UNITS[1]);

  return (
    <section className="py-32 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.6em] block">
            Spatial Efficiency
          </span>
          <h2 className="text-5xl font-light tracking-tighter text-stone-900">
            Volume{" "}
            <span className="italic font-serif text-stone-400">
              Benchmarking.
            </span>
          </h2>
          <p className="text-stone-500 font-light">
            Visualize the internal capacity of our core silhouettes to find the
            perfect fit for your inventory.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* 1. CAPACITY METRICS (Left) */}
          <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
            {STORAGE_UNITS.map((unit) => (
              <button
                key={unit.id}
                onClick={() => setSelected(unit)}
                className={cn(
                  "w-full p-8 rounded-[2.5rem] text-left transition-all duration-500 border",
                  selected.id === unit.id
                    ? "bg-white border-stone-900 shadow-xl"
                    : "bg-transparent border-stone-200 text-stone-400 hover:border-stone-400"
                )}
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-medium text-stone-900">
                    {unit.name}
                  </h4>
                  <span className="text-[10px] font-mono bg-stone-100 px-2 py-1 rounded text-stone-500">
                    {unit.capacityLiters}L
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-light">
                  <Maximize className="h-3 w-3" /> {unit.dimensions}
                </div>
              </button>
            ))}
          </div>

          {/* 2. VISUAL VOLUME CHART (Center) */}
          <div className="lg:col-span-5 h-125 flex items-end justify-center gap-8 px-12 order-1 lg:order-2 bg-white rounded-[4rem] border border-stone-200 shadow-inner relative">
            <div className="absolute top-10 left-10 flex items-center gap-2 text-stone-300">
              <Ruler className="h-4 w-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Relative Scale
              </span>
            </div>

            {STORAGE_UNITS.map((unit) => (
              <div
                key={unit.id}
                className="flex flex-col items-center gap-4 flex-1"
              >
                <motion.div
                  animate={{
                    height: selected.id === unit.id ? "100%" : "60%",
                    opacity: selected.id === unit.id ? 1 : 0.3,
                  }}
                  className={cn(
                    "w-full rounded-t-3xl transition-colors duration-500 relative flex items-center justify-center overflow-hidden",
                    selected.id === unit.id ? "bg-stone-900" : "bg-stone-200",
                    unit.heightEm
                  )}
                >
                  {/* "Box" Filling Animation */}
                  <AnimatePresence>
                    {selected.id === unit.id && (
                      <div className="grid grid-cols-2 gap-1 p-4">
                        {[...Array(unit.boxEquivalent)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className="h-4 w-4 bg-white/20 rounded-sm"
                          />
                        ))}
                      </div>
                    )}
                  </AnimatePresence>
                </motion.div>
                <span className="text-[9px] font-bold uppercase tracking-tighter text-stone-400 text-center">
                  {unit.id}
                </span>
              </div>
            ))}
          </div>

          {/* 3. PRACTICAL UTILITY (Right) */}
          <div className="lg:col-span-3 space-y-8 order-3">
            <div className="p-8 bg-stone-900 rounded-[3rem] text-white">
              <Box className="h-8 w-8 text-stone-500 mb-6" />
              <h5 className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-2">
                Inventory Match
              </h5>
              <p className="text-2xl font-serif italic mb-4">
                Fits approx. {selected.boxEquivalent} Archive Boxes.
              </p>
              <div className="h-px bg-stone-800 w-full mb-4" />
              <p className="text-sm font-light text-stone-400">
                <span className="text-white">Best Use Case:</span>{" "}
                {selected.bestFor}
              </p>
            </div>

            <div className="flex items-start gap-4 p-6 bg-stone-100 rounded-3xl">
              <Info className="h-5 w-5 text-stone-400 shrink-0 mt-1" />
              <p className="text-[10px] leading-relaxed text-stone-500 uppercase font-medium">
                Internal volume is calculated excluding adjustable shelf
                thickness for maximum transparency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
