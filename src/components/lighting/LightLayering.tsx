"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Lamp, Focus } from "lucide-react";
import { cn } from "@/lib/utils";

const LAYERS = [
  {
    id: "ambient",
    label: "Ambient",
    icon: Sun,
    desc: "The base layer for overall visibility.",
  },
  {
    id: "task",
    label: "Task",
    icon: Lamp,
    desc: "Focused light for reading or cooking.",
  },
  {
    id: "accent",
    label: "Accent",
    icon: Focus,
    desc: "Highlighting art and architecture.",
  },
];

export function LightLayering() {
  const [activeLayers, setActiveLayers] = useState<string[]>(["ambient"]);

  const toggleLayer = (id: string) => {
    setActiveLayers((prev) =>
      prev.includes(id) ? prev.filter((l) => l !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-32 container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Visualizer Canvas */}
        <div className="lg:col-span-7 relative aspect-square md:aspect-video rounded-[3rem] overflow-hidden bg-stone-900 shadow-2xl">
          {/* Base Dark Room */}
          <div className="absolute inset-0 bg-stone-950" />

          {/* Layer 1: Ambient (Soft Glow) */}
          <AnimatePresence>
            {activeLayers.includes("ambient") && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-amber-500/20 blur-[100px]"
              />
            )}
          </AnimatePresence>

          {/* Layer 2: Task (Sharp Cones) */}
          <AnimatePresence>
            {activeLayers.includes("task") && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute top-1/4 left-1/4 w-40 h-80 bg-amber-100/20 rounded-full blur-3xl rotate-12"
              />
            )}
          </AnimatePresence>

          {/* Layer 3: Accent (High Contrast) */}
          <AnimatePresence>
            {activeLayers.includes("accent") && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute right-20 top-1/2 -translate-y-1/2 w-4 h-32 bg-amber-200 shadow-[0_0_50px_rgba(251,191,36,0.6)]"
              />
            )}
          </AnimatePresence>

          <div className="absolute bottom-10 left-10 text-[10px] font-mono text-stone-500 uppercase tracking-widest">
            Simulated Photometric Environment
          </div>
        </div>

        {/* Controls */}
        <div className="lg:col-span-5 space-y-10">
          <div className="space-y-4">
            <span className="text-amber-500/50 text-[10px] font-bold uppercase tracking-[0.4em]">
              The Hierarchy of Light
            </span>
            <h2 className="text-5xl font-light tracking-tighter text-white">
              Layering <br />{" "}
              <span className="italic font-serif text-stone-500">
                Intention.
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {LAYERS.map((layer) => {
              const isActive = activeLayers.includes(layer.id);
              return (
                <button
                  key={layer.id}
                  onClick={() => toggleLayer(layer.id)}
                  className={cn(
                    "w-full flex items-center justify-between p-6 rounded-3xl border-2 transition-all duration-500",
                    isActive
                      ? "bg-amber-100 border-amber-100 text-stone-950"
                      : "bg-transparent border-stone-800 text-stone-500"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <layer.icon className="h-5 w-5" />
                    <div className="text-left">
                      <p className="text-sm font-bold uppercase tracking-widest">
                        {layer.label}
                      </p>
                      <p
                        className={cn(
                          "text-xs font-light",
                          isActive ? "text-stone-700" : "text-stone-600"
                        )}
                      >
                        {layer.desc}
                      </p>
                    </div>
                  </div>
                  <div
                    className={cn(
                      "h-2 w-2 rounded-full",
                      isActive ? "bg-stone-950 animate-pulse" : "bg-stone-800"
                    )}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
