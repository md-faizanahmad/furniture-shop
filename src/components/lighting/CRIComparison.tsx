"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MoveHorizontal, Zap, Sun } from "lucide-react";

export function CRIComparison() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, position)));
  };

  return (
    <section className="py-32 bg-stone-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* 1. TEXTUAL CONTEXT */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <span className="text-amber-500/50 text-[10px] font-bold uppercase tracking-[0.6em] block">
                Comparison Lab
              </span>
              <h2 className="text-5xl font-light tracking-tighter text-white leading-none">
                Visible <br />{" "}
                <span className="italic font-serif text-stone-500">
                  Difference.
                </span>
              </h2>
            </div>
            <p className="text-stone-400 font-light leading-relaxed">
              Slide to compare the color rendering of standard bulbs versus our
              high-fidelity spectral LEDs. Notice the vibrancy in the reds and
              the depth in the wood grains.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="flex items-center gap-2 text-stone-500">
                <Zap className="h-4 w-4" />
                <span className="text-[9px] font-bold uppercase tracking-widest">
                  CRI 70
                </span>
              </div>
              <div className="flex items-center gap-2 text-amber-200">
                <Sun className="h-4 w-4" />
                <span className="text-[9px] font-bold uppercase tracking-widest">
                  CRI 98
                </span>
              </div>
            </div>
          </div>

          {/* 2. THE SLIDER (Right) */}
          <div className="lg:col-span-8 relative">
            <div
              ref={containerRef}
              onMouseMove={handleMove}
              onTouchMove={handleMove}
              className="relative aspect-16/10 md:aspect-video rounded-[3rem] overflow-hidden cursor-none select-none border border-stone-800 shadow-2xl"
            >
              {/* Layer 1: High Fidelity (CRI 98) */}
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200"
                  fill
                  className="object-cover"
                  alt="High CRI"
                />
              </div>

              {/* Layer 2: Standard (CRI 70) - Clipped */}
              <motion.div
                className="absolute inset-0 z-10 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200"
                  fill
                  className="object-cover grayscale-[0.3] brightness-[0.8] saturate-[0.4]"
                  alt="Low CRI"
                />
              </motion.div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 z-20 w-1 bg-white cursor-ew-resize"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 bg-white rounded-full shadow-2xl flex items-center justify-center">
                  <MoveHorizontal className="h-5 w-5 text-stone-900" />
                </div>
              </div>

              {/* Labels */}
              <div className="absolute bottom-10 left-10 z-30 pointer-events-none">
                <span className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold text-white uppercase tracking-[0.2em] border border-white/10">
                  Standard LED
                </span>
              </div>
              <div className="absolute bottom-10 right-10 z-30 pointer-events-none">
                <span className="bg-amber-400/80 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold text-stone-900 uppercase tracking-[0.2em]">
                  Lumen Studio
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
