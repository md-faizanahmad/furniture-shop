"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

const MODULE_TYPES = [
  { id: "left", label: "Left Arm", width: "w-32 md:w-48" },
  { id: "center", label: "Center", width: "w-32 md:w-48" },
  { id: "corner", label: "Corner", width: "w-32 md:w-32" },
  { id: "ottoman", label: "Ottoman", width: "w-32 md:w-32" },
];

export function ModularSectional() {
  const [layout, setLayout] = useState(["left", "center"]);

  const addModule = (type: string) => {
    if (layout.length < 5) setLayout([...layout, type]);
  };

  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        {/* Controls */}
        <div className="lg:col-span-4 space-y-10">
          <div className="space-y-4">
            <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.4em]">
              Adaptability
            </span>
            <h2 className="text-5xl font-light tracking-tighter text-stone-900 leading-none">
              The Cloud <br />{" "}
              <span className="italic font-serif text-stone-400">System.</span>
            </h2>
            <p className="text-stone-500 font-light text-lg">
              Our modular pieces snap together with invisible magnetic
              connectors, allowing your sofa to evolve with your home.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {MODULE_TYPES.map((type) => (
              <button
                key={type.id}
                onClick={() => addModule(type.id)}
                className="p-4 border border-stone-200 rounded-2xl hover:border-stone-900 transition-all text-[10px] font-bold uppercase tracking-widest text-stone-600"
              >
                + {type.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setLayout(["left", "center"])}
            className="flex items-center gap-2 text-stone-400 hover:text-stone-900 transition-colors text-[10px] font-bold uppercase tracking-[0.2em]"
          >
            <RotateCcw className="h-3 w-3" /> Reset Layout
          </button>
        </div>

        {/* 3D-Style Visualizer */}
        <div className="lg:col-span-8 bg-white rounded-[4rem] aspect-video flex items-center justify-center p-8 md:p-12 shadow-inner border border-stone-200 overflow-hidden">
          <div className="flex items-end gap-1">
            <AnimatePresence mode="popLayout">
              {layout.map((type, i) => (
                <motion.div
                  key={`${type}-${i}`}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className={cn(
                    "relative h-32 md:h-48 bg-stone-100 border-2 border-white rounded-2xl shadow-lg transition-colors hover:bg-stone-200",
                    MODULE_TYPES.find((m) => m.id === type)?.width
                  )}
                >
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 h-1 w-4 bg-stone-300 rounded-full" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
