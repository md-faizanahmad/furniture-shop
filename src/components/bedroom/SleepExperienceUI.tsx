"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Activity, HandMetal } from "lucide-react";
import { MATTRESS_LAYERS } from "@/lib/bedroom/sleep-layers";

export function SleepExperienceUI() {
  const [activeIdx, setActiveIdx] = useState(0);
  const dragX = useMotionValue(0);

  // DRAG THRESHOLD: How far to swipe before switching (100px)
  const DRAG_THRESHOLD = 100;

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_THRESHOLD && activeIdx < MATTRESS_LAYERS.length - 1) {
      setActiveIdx((pv) => pv + 1);
    } else if (x >= DRAG_THRESHOLD && activeIdx > 0) {
      setActiveIdx((pv) => pv - 1);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-10 md:gap-16 items-start">
      {/* LEFT: INTERACTIVE IMAGE VIEW (SWIPEABLE) */}
      <div className="lg:col-span-7 lg:sticky lg:top-32 z-20 w-full overflow-hidden lg:overflow-visible">
        <div className="relative aspect-square md:aspect-4/3 rounded-[2rem] md:rounded-[3rem] bg-stone-900 shadow-2xl cursor-grab active:cursor-grabbing">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={activeIdx}
              style={{ x: dragX }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={onDragEnd}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              className="absolute inset-0 z-10"
            >
              <Image
                src={MATTRESS_LAYERS[activeIdx].img}
                alt="Mattress Layer"
                fill
                className="object-cover pointer-events-none" // Prevent image ghosting while dragging
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </AnimatePresence>

          {/* SWIPE HINT (Mobile Only) */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 lg:hidden flex items-center gap-2 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 pointer-events-none">
            <HandMetal className="h-3 w-3 text-white/50 animate-pulse" />
            <span className="text-[8px] font-bold text-white/50 uppercase tracking-widest">
              Swipe to Explore
            </span>
          </div>

          {/* PAGINATION DOTS */}
          <div className="absolute top-1/2 right-6 -translate-y-1/2 z-30 flex flex-col gap-2">
            {MATTRESS_LAYERS.map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-1 rounded-full transition-all duration-500",
                  activeIdx === i ? "w-4 bg-white" : "w-1 bg-white/20"
                )}
              />
            ))}
          </div>

          {/* FIRMNESS METER OVERLAY */}
          <div className="absolute bottom-4 left-4 right-4 md:bottom-10 md:left-10 md:right-10 p-5 md:p-8 bg-black/40 backdrop-blur-xl rounded-[1.5rem] md:rounded-[2rem] border border-white/10 z-30 pointer-events-none">
            <div className="flex justify-between items-end mb-3 md:mb-4">
              <div className="space-y-0.5 md:space-y-1">
                <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-stone-400">
                  Firmness Index
                </span>
                <p className="text-base md:text-xl font-light text-white italic truncate max-w-37.5 md:max-w-none">
                  {MATTRESS_LAYERS[activeIdx].material}
                </p>
              </div>
              <div className="text-right">
                <span className="text-xl md:text-2xl font-mono text-white">
                  {MATTRESS_LAYERS[activeIdx].firmness}%
                </span>
              </div>
            </div>
            <div className="h-1 md:h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${MATTRESS_LAYERS[activeIdx].firmness}%` }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                className="h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: LAYER SELECTOR (STAYS SAME FOR DESKTOP ACCESSIBILITY) */}
      <div className="lg:col-span-5 space-y-4 md:space-y-6 w-full relative z-10">
        {MATTRESS_LAYERS.map((layer, i) => (
          <button
            key={layer.id}
            onClick={() => setActiveIdx(i)}
            className="w-full text-left group outline-none focus-visible:ring-1 focus-visible:ring-white rounded-[2rem]"
          >
            <motion.div
              animate={{
                backgroundColor:
                  activeIdx === i
                    ? "rgba(255,255,255,1)"
                    : "rgba(255,255,255,0.03)",
                scale: activeIdx === i ? 1.02 : 1,
              }}
              className={cn(
                "p-5 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border transition-colors",
                activeIdx === i
                  ? "border-white shadow-xl"
                  : "border-white/5 hover:border-white/20"
              )}
            >
              <div className="flex justify-between items-start mb-2 md:mb-4">
                <span
                  className={cn(
                    "text-[8px] md:text-[10px] font-bold uppercase tracking-widest",
                    activeIdx === i ? "text-stone-500" : "text-stone-600"
                  )}
                >
                  Layer {layer.id}
                </span>
                {activeIdx === i && (
                  <Activity className="h-3 w-3 md:h-4 md:w-4 text-stone-900 animate-pulse" />
                )}
              </div>
              <h4
                className={cn(
                  "text-lg md:text-2xl font-light tracking-tight mb-1 md:mb-2",
                  activeIdx === i ? "text-stone-900" : "text-gray-400"
                )}
              >
                {layer.name}
              </h4>
              <AnimatePresence>
                {activeIdx === i && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className={cn(
                      "text-xs md:text-sm font-light leading-relaxed pr-4 md:pr-8",
                      activeIdx === i ? "text-stone-600" : "text-stone-400"
                    )}
                  >
                    {layer.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </button>
        ))}
      </div>
    </div>
  );
}
