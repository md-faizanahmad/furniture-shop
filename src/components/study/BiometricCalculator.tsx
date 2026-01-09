"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Monitor, MousePointer2 } from "lucide-react";

export function BiometricCalculator() {
  const [height, setHeight] = useState(175); // User height in cm

  const metrics = useMemo(
    () => ({
      sitting: Math.round(height * 0.41),
      standing: Math.round(height * 0.62),
      monitor: Math.round(height * 0.7),
    }),
    [height]
  );

  return (
    <section className="container mx-auto px-6 rounded-[3rem] bg-white border border-stone-200 py-20 shadow-sm overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Input & Data */}
        <div className="lg:col-span-5 space-y-10">
          <div className="space-y-4">
            <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.4em]">
              Ergonomics
            </span>
            <h2 className="text-5xl font-light tracking-tighter text-stone-900">
              Ideal <br />{" "}
              <span className="italic font-serif text-stone-400">
                Alignment.
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-end">
              <label className="text-[10px] font-bold uppercase text-stone-500">
                Your Stature
              </label>
              <span className="text-3xl font-mono text-stone-900">
                {height}cm
              </span>
            </div>
            <input
              type="range"
              min="140"
              max="210"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              className="w-full h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-stone-900"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 pt-6">
            <div className="p-6 bg-stone-50 rounded-3xl border border-stone-100">
              <p className="text-[9px] font-bold text-stone-400 uppercase mb-2">
                Sitting Desk
              </p>
              <p className="text-3xl font-light text-stone-900">
                {metrics.sitting}cm
              </p>
            </div>
            <div className="p-6 bg-stone-900 rounded-3xl text-white">
              <p className="text-[9px] font-bold text-stone-500 uppercase mb-2">
                Standing Desk
              </p>
              <p className="text-3xl font-light">{metrics.standing}cm</p>
            </div>
          </div>
        </div>

        {/* Dynamic Visual Guide */}
        <div className="lg:col-span-7 relative bg-stone-50 aspect-square rounded-[3rem] flex items-center justify-center p-12 overflow-hidden border border-stone-100">
          {/* Abstract Desk Figure */}
          <div className="relative w-full h-full border-b-2 border-stone-200 flex flex-col justify-end">
            <motion.div
              animate={{ height: `${(metrics.standing / 210) * 100}%` }}
              transition={{ type: "spring", stiffness: 50 }}
              className="w-full bg-stone-900/5 border-t-4 border-stone-900 rounded-t-lg relative"
            >
              <div className="absolute -top-12 right-0 flex items-center gap-2">
                <div className="h-px w-24 bg-stone-400" />
                <span className="text-[10px] font-mono text-stone-400">
                  Standing Height
                </span>
              </div>
            </motion.div>

            <motion.div
              animate={{ height: `${(metrics.sitting / 210) * 100}%` }}
              className="absolute bottom-0 w-full bg-stone-900/10 border-t-2 border-stone-400 border-dashed"
            >
              <div className="absolute -top-8 left-0 flex items-center gap-2">
                <span className="text-[10px] font-mono text-stone-400">
                  Sitting Height
                </span>
                <div className="h-px w-24 bg-stone-400" />
              </div>
            </motion.div>
          </div>

          {/* Animated Annotations */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-10 right-10 flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <Monitor className="h-4 w-4 text-stone-300" />
              <span className="text-[9px] text-stone-400 uppercase tracking-widest">
                Eye Level Target
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MousePointer2 className="h-4 w-4 text-stone-300" />
              <span className="text-[9px] text-stone-400 uppercase tracking-widest">
                90° Forearm Flex
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
