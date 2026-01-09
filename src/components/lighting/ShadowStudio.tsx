"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Move, Power } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const MATERIALS = [
  {
    id: "marble",
    name: "Carrara Marble",
    reflect: 0.8,
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
  },
  {
    id: "velvet",
    name: "Deep Velvet",
    reflect: 0.2,
    img: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800",
  },
  {
    id: "oak",
    name: "Smoked Oak",
    reflect: 0.4,
    img: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800",
  },
];

export function ShadowStudio() {
  const [isOn, setIsOn] = useState(true);
  const [activeMat, setActiveMat] = useState(MATERIALS[0]);

  // Drag values for light position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Transformations for shadows based on light position
  const shadowX = useTransform(x, [-200, 200], [20, -20]);
  const shadowY = useTransform(y, [-200, 200], [20, -20]);
  const highlightX = useTransform(x, [-200, 200], ["-20%", "20%"]);

  return (
    <section className="py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Controls */}
          <div className="lg:w-1/3 space-y-12">
            <div className="space-y-4">
              <span className="text-amber-500/50 text-[10px] font-bold uppercase tracking-[0.4em]">
                Interactive Lab
              </span>
              <h2 className="text-5xl font-light tracking-tighter text-white">
                Shadow <br />{" "}
                <span className="italic font-serif text-stone-600">
                  Studio.
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => setIsOn(!isOn)}
                className={cn(
                  "w-full p-6 rounded-3xl flex items-center justify-between border-2 transition-all",
                  isOn
                    ? "bg-amber-100 border-amber-100 text-black"
                    : "bg-transparent border-stone-800 text-stone-500"
                )}
              >
                <span className="text-sm font-bold uppercase tracking-widest">
                  Master Power
                </span>
                <Power className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 gap-2 pt-8">
                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-600 mb-2">
                  Surface Interaction
                </p>
                {MATERIALS.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setActiveMat(m)}
                    className={cn(
                      "text-left py-3 px-4 rounded-xl text-xs transition-colors",
                      activeMat.id === m.id
                        ? "bg-stone-800 text-white"
                        : "text-stone-500 hover:text-stone-300"
                    )}
                  >
                    {m.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Canvas */}
          <div className="lg:w-2/3 h-150 bg-stone-900 rounded-[4rem] relative flex items-center justify-center cursor-none overflow-hidden border border-stone-800">
            {/* The Subject Material */}
            <motion.div
              style={{
                boxShadow: isOn
                  ? `${shadowX.get()}px ${shadowY.get()}px 60px rgba(0,0,0,0.8)`
                  : "none",
              }}
              className="relative w-64 h-64 rounded-3xl overflow-hidden z-10"
            >
              <Image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                src={activeMat.img}
                className="w-full h-full object-cover grayscale-[0.2]"
                alt="Material"
              />
              {/* Dynamic Highlight Layer */}
              <motion.div
                style={{ x: highlightX, opacity: isOn ? activeMat.reflect : 0 }}
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
              />
            </motion.div>

            {/* DRAGGABLE LIGHT SOURCE */}
            <motion.div
              drag
              dragConstraints={{
                left: -300,
                right: 300,
                top: -200,
                bottom: 200,
              }}
              style={{ x, y }}
              className="absolute z-50 cursor-grab active:cursor-grabbing"
            >
              <div className="relative">
                {/* Visual Bulb */}
                <div
                  className={cn(
                    "h-12 w-12 rounded-full border-2 border-white flex items-center justify-center transition-all duration-500",
                    isOn
                      ? "bg-amber-100 shadow-[0_0_100px_rgba(251,191,36,1)]"
                      : "bg-stone-800 border-stone-600"
                  )}
                >
                  <Move
                    className={cn(
                      "h-4 w-4",
                      isOn ? "text-stone-900" : "text-stone-500"
                    )}
                  />
                </div>
                {/* Guidance Label */}
                <div className="absolute top-16 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.3em] text-white/20">
                  Drag Light Source
                </div>
              </div>
            </motion.div>

            {/* Room Ambience */}
            <motion.div
              animate={{ opacity: isOn ? 1 : 0 }}
              className="absolute inset-0 bg-amber-900/5 pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
