"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function BulbScience() {
  const [cri, setCri] = useState(80);

  return (
    <section className="w-full bg-stone-950 px-4 py-16 md:py-32 border-t border-stone-900 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text & Control Side */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="text-amber-500/50 text-[10px] font-bold uppercase tracking-[0.4em] block">
                Color Fidelity
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-white leading-none">
                The Science of <br />
                <span className="italic font-serif text-stone-500">
                  True Color.
                </span>
              </h2>
            </div>

            <p className="text-stone-400 font-light text-base md:text-lg max-w-xl leading-relaxed">
              Standard LEDs often &quot;wash out&quot; textures. Our bulbs
              feature a CRI of 95+, ensuring your furniture&apos;s wood grains
              and fabrics appear exactly as nature intended.
            </p>

            {/* Slider Card */}
            <div className="p-6 md:p-8 bg-stone-900/50 backdrop-blur-sm rounded-[2rem] md:rounded-[2.5rem] border border-stone-800 space-y-6">
              <div className="flex justify-between items-end">
                <span className="text-[10px] font-bold uppercase text-stone-500 tracking-wider">
                  CRI Simulation
                </span>
                <span className="text-2xl font-mono text-amber-200">
                  {cri}%
                </span>
              </div>

              <div className="relative group py-2">
                <input
                  type="range"
                  min="70"
                  max="100"
                  value={cri}
                  onChange={(e) => setCri(Number(e.target.value))}
                  className="w-full h-1.5 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-400 transition-all"
                />
              </div>

              {/* Color Visualizer Bar */}
              <div className="flex h-2 w-full rounded-full overflow-hidden opacity-50">
                <div className="flex-1 bg-red-500" />
                <div className="flex-1 bg-orange-500" />
                <div className="flex-1 bg-yellow-500" />
                <div className="flex-1 bg-green-500" />
                <div className="flex-1 bg-blue-500" />
                <div className="flex-1 bg-purple-500" />
              </div>

              <div className="flex justify-between text-[7px] md:text-[8px] font-bold uppercase tracking-[0.2em] text-stone-600">
                <span>Standard LED</span>
                <span>LUMEN Standard</span>
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative aspect-square w-full max-w-75 md:max-w-md mx-auto order-1 lg:order-2 flex items-center justify-center">
            {/* Animated Spectrum Circle */}
            <div className="absolute inset-0 rounded-full border border-stone-800/50 animate-[spin_30s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-dashed border-stone-800/30 animate-[spin_20s_linear_infinite_reverse]" />

            <motion.div
              animate={{
                filter: `saturate(${cri / 100}) brightness(${0.7 + cri / 300})`,
                scale: 1 + (cri - 70) / 300, // Subtle growth as quality increases
              }}
              className="relative w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(251,191,36,0.05)] border border-stone-800"
            >
              <Image
                fill
                priority
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800"
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 40vw"
                alt="High-fidelity material sample"
              />

              {/* Glossy Overlay */}
              <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-white/10" />
            </motion.div>

            {/* Floating Technical Tag */}
            <div className="absolute -bottom-4 right-4 bg-stone-900 border border-stone-800 px-4 py-2 rounded-full shadow-2xl">
              <span className="text-[9px] font-mono text-amber-200 uppercase tracking-widest">
                Spectral Accuracy
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
