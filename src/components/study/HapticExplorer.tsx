"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const MATERIALS = [
  {
    id: "oak",
    name: "Solid Smoked Oak",
    texture:
      "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800",
    desc: "Open-pore finish for natural resonance.",
  },
  {
    id: "leather",
    name: "Saddle Leather",
    texture: "https://images.unsplash.com/photo-1486946255434-2466348c2166?",
    desc: "Hand-stitched full-grain hide.",
  },
  {
    id: "felt",
    name: "Acoustic Felt",
    texture: "https://images.unsplash.com/photo-1623378431848-2bca49fafbfc",
    desc: "Sound-absorbing desk privacy screens.",
  },
];

export function HapticExplorer() {
  const [active, setActive] = useState(MATERIALS[0]);

  return (
    <section className="py-32 bg-stone-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h3 className="text-4xl font-light mb-12 italic font-serif">
              Sensory <br /> Detail.
            </h3>
            <div className="space-y-4">
              {MATERIALS.map((mat) => (
                <button
                  key={mat.id}
                  onMouseEnter={() => setActive(mat)}
                  className={cn(
                    "w-full text-left p-8 rounded-3xl border transition-all duration-500",
                    active.id === mat.id
                      ? "bg-white text-stone-900 border-white"
                      : "border-stone-800 text-stone-500"
                  )}
                >
                  <h4 className="text-xl font-medium">{mat.name}</h4>
                  {active.id === mat.id && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm mt-2 font-light"
                    >
                      {mat.desc}
                    </motion.p>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Macro Visualizer */}
          <div className="w-full md:w-1/2 relative aspect-square group">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 rounded-[4rem] overflow-hidden"
              >
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  fill
                  src={active.texture}
                  className="w-full h-full object-cover"
                  alt={active.name}
                />
                <div className="absolute inset-0 bg-stone-900/20 mix-blend-overlay" />
              </motion.div>
            </AnimatePresence>

            {/* Interactive "Zoom" Label */}
            <div className="absolute bottom-10 right-10 bg-black/40 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 text-[9px] font-bold uppercase tracking-widest">
              Macro Texture View
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
