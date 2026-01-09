"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Activity, Info } from "lucide-react";
import { COMFORT_ZONES } from "@/lib/dining/comfort-data";

export function ComfortDiagnostic() {
  const [activeZone, setActiveZone] = useState(COMFORT_ZONES[1]);

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* 1. THE VISUAL X-RAY (Left) */}
          <div className="lg:col-span-7 relative order-2 lg:order-1">
            <div className="relative aspect-4/5 md:aspect-square bg-stone-50 rounded-[4rem] overflow-hidden border border-stone-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeZone.id}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 p-12 md:p-24"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000"
                    alt="Chair Ergonomics"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                    className="object-contain grayscale mix-blend-multiply opacity-80"
                  />

                  {/* Interactive Hotspots */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className={cn(
                      "absolute w-8 h-8 rounded-full border-2 border-stone-900 bg-white shadow-2xl flex items-center justify-center transition-all duration-700",
                      activeZone.id === "lumbar"
                        ? "top-[35%] right-[45%]"
                        : activeZone.id === "seat"
                        ? "bottom-[35%] left-[50%]"
                        : "top-[25%] left-[40%]"
                    )}
                  >
                    <div className="w-2 h-2 rounded-full bg-stone-900" />
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Data Overlay */}
              <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end p-8 bg-white/80 backdrop-blur-md rounded-3xl border border-white">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                    Tech Spec
                  </span>
                  <p className="text-xl font-serif italic text-stone-900">
                    {activeZone.tech}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] font-bold text-stone-400 uppercase tracking-widest">
                    Density/Flex
                  </p>
                  <p className="text-lg font-mono text-stone-600">
                    {activeZone.density}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. THE DIAGNOSTIC CONTROLS (Right) */}
          <div className="lg:col-span-5 space-y-12 order-1 lg:order-2">
            <div className="space-y-4">
              <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.6em] block">
                Bio-Mechanical Fit
              </span>
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-stone-900 leading-none">
                Social <br />
                <span className="italic font-serif text-stone-400">
                  Endurance.
                </span>
              </h2>
              <p className="text-stone-500 font-light text-lg max-w-sm">
                A dining chair&apos;s true quality is measured in hours. Explore
                the internal layers that prevent fatigue.
              </p>
            </div>

            <div className="space-y-4">
              {COMFORT_ZONES.map((zone) => (
                <button
                  key={zone.id}
                  onClick={() => setActiveZone(zone)}
                  className={cn(
                    "w-full p-6 rounded-3xl border-2 text-left transition-all duration-500 group",
                    activeZone.id === zone.id
                      ? "bg-stone-900 border-stone-900 text-white shadow-2xl scale-[1.02]"
                      : "border-stone-100 bg-stone-50 text-stone-400 hover:border-stone-200"
                  )}
                >
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="text-lg font-medium tracking-tight">
                      {zone.part}
                    </h4>
                    <Activity
                      className={cn(
                        "h-4 w-4",
                        activeZone.id === zone.id
                          ? "text-stone-400"
                          : "text-stone-200"
                      )}
                    />
                  </div>
                  <p
                    className={cn(
                      "text-xs font-light",
                      activeZone.id === zone.id
                        ? "text-stone-400"
                        : "text-stone-400"
                    )}
                  >
                    {zone.benefit}
                  </p>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4 p-6 bg-stone-50 rounded-2xl border border-stone-100">
              <Info className="h-5 w-5 text-stone-400" />
              <p className="text-[10px] text-stone-500 font-medium leading-relaxed uppercase tracking-widest">
                Tested for 100,000 compression cycles to ensure lifetime loft.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
