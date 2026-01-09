"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Sun, Thermometer } from "lucide-react";
import { LIGHT_PROFILES } from "@/lib/dining/lighting-data";

export function LightingVisualizer() {
  const [activeLight, setActiveLight] = useState(LIGHT_PROFILES[0]);

  return (
    <section className="py-32 bg-stone-950 text-white overflow-hidden rounded-[4rem] mx-4 my-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          {/* 1. INTERACTIVE IMAGE CONTAINER */}
          <div className="lg:col-span-7 relative group">
            <div className="relative aspect-4/5 md:aspect-video rounded-[3rem] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLight.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className={cn(
                    "absolute inset-0 transition-all duration-1000",
                    activeLight.filterClass
                  )}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1200"
                    fill
                    className="object-cover"
                    alt="Dining Room Lighting"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Dynamic Glow Overlay */}
              <motion.div
                animate={{ backgroundColor: activeLight.colorHex }}
                className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
              />

              {/* Center Kelvin Label */}
              <div className="absolute top-10 left-10 bg-black/40 backdrop-blur-xl border border-white/10 px-6 py-2 rounded-full">
                <span className="text-xl font-mono tracking-tighter">
                  {activeLight.kelvin}K
                </span>
              </div>
            </div>
          </div>

          {/* 2. TEXT & CONTROLS */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <span className="text-stone-500 text-[10px] font-bold uppercase tracking-[0.6em] block">
                Atmospheric Tech
              </span>
              <h2 className="text-5xl md:text-6xl font-light tracking-tighter leading-none">
                Chroma <br />
                <span className="italic font-serif text-stone-400">
                  Atmosphere.
                </span>
              </h2>
            </div>

            <div className="space-y-6">
              {LIGHT_PROFILES.map((profile) => (
                <button
                  key={profile.id}
                  onClick={() => setActiveLight(profile)}
                  className={cn(
                    "w-full text-left p-6 rounded-[2rem] border transition-all duration-500",
                    activeLight.id === profile.id
                      ? "bg-white text-stone-900 border-white shadow-[0_0_50px_rgba(255,255,255,0.1)]"
                      : "border-stone-800 text-stone-500 hover:border-stone-600"
                  )}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-medium">{profile.label}</h4>
                    <Sun
                      className={cn(
                        "h-4 w-4",
                        activeLight.id === profile.id
                          ? "text-stone-900"
                          : "text-stone-700"
                      )}
                    />
                  </div>
                  <p
                    className={cn(
                      "text-xs font-light leading-relaxed",
                      activeLight.id === profile.id
                        ? "text-stone-600"
                        : "text-stone-500"
                    )}
                  >
                    {profile.description}
                  </p>
                </button>
              ))}
            </div>

            <div className="pt-8 border-t border-stone-800 space-y-4">
              <div className="flex items-center gap-3">
                <Thermometer className="h-4 w-4 text-stone-600" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500">
                  Ambiance Strategy
                </span>
              </div>
              <p className="text-2xl font-serif italic text-stone-300">
                {activeLight.ambiance}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
