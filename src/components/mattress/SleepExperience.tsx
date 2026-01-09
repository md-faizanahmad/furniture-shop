"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Info, Layers } from "lucide-react";
import { MATTRESS_LAYERS } from "@/lib/bedroom/sleep-layers";

export function SleepExperience() {
  const [showXRay, setShowXRay] = useState(false);
  const [activeLayer, setActiveLayer] = useState(0);

  return (
    <section className="relative min-h-[120vh] md:h-screen w-full flex items-center justify-center bg-stone-950 overflow-hidden py-20 md:py-0">
      {/* 1. IMMERSIVE BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2000"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          className={cn(
            "object-cover transition-all duration-1000",
            showXRay ? "scale-110 blur-md opacity-30" : "scale-100 opacity-50"
          )}
          alt="Sleep Atmosphere"
        />
        <div className="absolute inset-0 bg-linear-to-r from-stone-950 via-stone-950/40 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* 2. TEXT & CONTROLS */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-stone-500 text-[10px] font-bold uppercase tracking-[0.6em] block"
              >
                Engineering Rest
              </motion.span>
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-white leading-none">
                Internal <br />
                <span className="italic font-serif text-stone-400">
                  Architecture.
                </span>
              </h2>
            </div>

            <p className="text-stone-400 font-light text-lg leading-relaxed max-w-md">
              Peer beneath the silk surface. Our mattresses are a composite of
              four distinct layers, each engineered for a specific orthopedic
              function.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowXRay(!showXRay)}
                className={cn(
                  "h-16 px-10 rounded-full font-bold uppercase text-[10px] tracking-widest transition-all flex items-center justify-center gap-3",
                  showXRay
                    ? "bg-white text-stone-950"
                    : "bg-stone-800 text-white hover:bg-stone-700"
                )}
              >
                <Layers className="h-4 w-4" />
                {showXRay ? "Close X-Ray" : "View Cross-Section"}
              </button>
            </div>
          </div>

          {/* 3. INTERACTIVE X-RAY VIEW */}
          <div className="lg:col-span-7 relative h-125 md:h-150 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {!showXRay ? (
                <motion.div
                  key="external"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border border-white/10"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1647376036543-f9f543601a1d"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                    className="object-cover"
                    alt="Mattress Exterior"
                  />
                  <div className="absolute inset-0 bg-stone-900/20" />
                </motion.div>
              ) : (
                <motion.div
                  key="internal"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="w-full h-full flex flex-col justify-center space-y-4"
                >
                  {MATTRESS_LAYERS.map((layer, i) => (
                    <motion.div
                      key={layer.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      onMouseEnter={() => setActiveLayer(i)}
                      className={cn(
                        "group relative p-6 rounded-2xl border transition-all cursor-pointer",
                        activeLayer === i
                          ? "bg-white border-white text-stone-950 scale-105 z-20 shadow-2xl"
                          : "bg-stone-900/50 border-stone-800 text-stone-400 opacity-60 hover:opacity-100"
                      )}
                    >
                      <div className="flex justify-between items-center">
                        <div className="space-y-1">
                          <span className="text-[9px] font-bold uppercase tracking-widest opacity-60">
                            Layer 0{layer.id} — {layer.name}
                          </span>
                          <h4 className="text-xl font-medium tracking-tight">
                            {layer.material}
                          </h4>
                        </div>
                        <Info
                          className={cn(
                            "h-5 w-5",
                            activeLayer === i
                              ? "text-stone-400"
                              : "text-stone-700"
                          )}
                        />
                      </div>

                      {activeLayer === i && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          className="mt-4 text-sm font-light leading-relaxed border-t border-stone-200 pt-4"
                        >
                          {layer.description}
                        </motion.p>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* 4. DECORATIVE BACKGROUND TEXT */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 select-none pointer-events-none whitespace-nowrap">
        <h2 className="text-[20vw] font-black uppercase tracking-tighter text-white/2">
          RESTORATIVE
        </h2>
      </div>
    </section>
  );
}
