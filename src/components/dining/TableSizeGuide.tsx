"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { MoveDiagonal, Ruler, Info } from "lucide-react";
import { TABLE_SIZES } from "@/lib/dining/table-guide-data";

export function TableSizeGuide() {
  const [activeSize, setActiveSize] = useState(TABLE_SIZES[1]);

  return (
    <section className="py-32 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* 1. SELECTION & SPECS */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.6em] block">
                Spatial Intelligence
              </span>
              <h2 className="text-5xl md:text-6xl font-light tracking-tighter text-stone-900 leading-none">
                Fit for <br />
                <span className="italic font-serif text-stone-400">
                  Your Space.
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {TABLE_SIZES.map((size) => (
                <button
                  key={size.id}
                  onClick={() => setActiveSize(size)}
                  className={cn(
                    "flex items-center justify-between p-6 rounded-3xl border-2 transition-all",
                    activeSize.id === size.id
                      ? "bg-white border-stone-900 shadow-xl scale-[1.02]"
                      : "border-transparent bg-stone-200/50 text-stone-500 hover:bg-stone-200"
                  )}
                >
                  <div className="text-left">
                    <p className="text-[9px] font-bold uppercase tracking-widest opacity-60 mb-1">
                      {size.seats}
                    </p>
                    <h4 className="text-lg font-medium">{size.label}</h4>
                  </div>
                  <Ruler
                    className={cn(
                      "h-4 w-4",
                      activeSize.id === size.id
                        ? "text-stone-900"
                        : "text-stone-300"
                    )}
                  />
                </button>
              ))}
            </div>

            <div className="p-8 bg-stone-900 rounded-[2.5rem] text-white space-y-4 shadow-2xl">
              <div className="flex items-center gap-3 text-stone-500">
                <MoveDiagonal className="h-4 w-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Technical Specs
                </span>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-[9px] text-stone-500 uppercase font-bold mb-1">
                    Dimensions
                  </p>
                  <p className="text-lg font-light">{activeSize.dimensions}</p>
                </div>
                <div>
                  <p className="text-[9px] text-stone-500 uppercase font-bold mb-1">
                    Min. Room Size
                  </p>
                  <p className="text-lg font-light">{activeSize.clearance}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. THE BLUEPRINT VISUALIZER */}
          <div className="lg:col-span-7 flex items-center justify-center bg-white rounded-[4rem] aspect-square relative border-2 border-dashed border-stone-200 shadow-inner">
            {/* 90cm Clearance Shadow */}
            <motion.div
              animate={{ scale: activeSize.scale + 0.2 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="absolute rounded-full md:rounded-[3rem] border border-stone-200 bg-stone-50/50 flex items-end justify-center pb-6"
              style={{ width: "80%", height: "80%" }}
            >
              <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest flex items-center gap-2">
                <Info className="h-3 w-3" /> Recommended 90cm Clearance Zone
              </span>
            </motion.div>

            {/* The Table Graphic */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSize.id}
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: activeSize.scale, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "relative bg-stone-900 shadow-[0_40px_80px_rgba(0,0,0,0.3)] flex items-center justify-center",
                  activeSize.id === "bistro"
                    ? "rounded-full aspect-square w-64"
                    : "rounded-2xl w-96 h-48"
                )}
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="text-[10px] font-mono text-stone-400">
                    {activeSize.dimensions}
                  </span>
                </div>
                <div className="text-white/20 font-serif italic text-4xl select-none">
                  LUMEN
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Scale Indicator */}
            <div className="absolute bottom-10 right-10 flex flex-col items-end gap-1 opacity-40">
              <div className="h-0.5 w-24 bg-stone-900" />
              <span className="text-[8px] font-mono uppercase">Scale 1:20</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
