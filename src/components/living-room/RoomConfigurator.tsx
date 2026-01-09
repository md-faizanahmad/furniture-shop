"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Palette, Maximize2, Sparkles } from "lucide-react";
import { ROOM_MOODS, RoomMood } from "@/lib/living-room/config-data";

export function RoomConfigurator() {
  const [currentMood, setCurrentMood] = useState<RoomMood>(ROOM_MOODS[0]);
  const [isDayMode, setIsDayMode] = useState(true);

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-12">
          {/* HEADER SECTION */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="max-w-xl space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400">
                Atmosphere Simulator
              </span>
              <h2 className="text-5xl md:text-6xl font-light tracking-tighter text-stone-900 leading-none">
                Define your{" "}
                <span className="italic font-serif text-stone-400">
                  Environment.
                </span>
              </h2>
            </div>

            {/* Day/Night Toggle */}
            <button
              onClick={() => setIsDayMode(!isDayMode)}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-stone-100 hover:bg-stone-200 transition-colors group"
            >
              <Sparkles
                className={cn(
                  "h-4 w-4 transition-transform group-hover:rotate-12",
                  isDayMode ? "text-amber-500" : "text-indigo-600"
                )}
              />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                {isDayMode ? "Natural Light" : "Warm Evening"}
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* MAIN VISUALIZER */}
            <div className="lg:col-span-9 relative aspect-video rounded-[3rem] overflow-hidden bg-stone-200 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMood.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentMood.image}
                    alt={currentMood.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={cn(
                      "object-cover transition-all duration-1000",
                      isDayMode
                        ? "brightness-100 contrast-100"
                        : "brightness-75 contrast-125 saturate-[0.8] sepia-[0.2]"
                    )}
                    priority
                  />
                  {/* Evening Glow Overlay */}
                  {!isDayMode && (
                    <div className="absolute inset-0 bg-orange-900/10 mix-blend-overlay pointer-events-none" />
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Data Labels */}
              <div className="absolute bottom-8 left-8 flex flex-wrap gap-4 z-20">
                <div className="px-6 py-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl">
                  <p className="text-[8px] font-bold text-stone-400 uppercase tracking-widest">
                    Selected Form
                  </p>
                  <p className="text-sm font-medium text-stone-900">
                    {currentMood.name}
                  </p>
                </div>
                <div className="px-6 py-3 bg-stone-900/90 backdrop-blur-md rounded-2xl shadow-xl text-white">
                  <p className="text-[8px] font-bold text-stone-400 uppercase tracking-widest">
                    Room Type
                  </p>
                  <p className="text-sm font-medium">{currentMood.type}</p>
                </div>
              </div>
            </div>

            {/* CONFIGURATION DOCK */}
            <div className="lg:col-span-3 flex flex-col gap-1 ms-4">
              <div className="bg-stone-50 p-8 rounded-[2.5rem] flex-1 space-y-8 border border-stone-100">
                <div className="flex items-center gap-2">
                  <Palette className="h-4 w-4 text-stone-400" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500">
                    Curated Moods
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {ROOM_MOODS.map((mood) => (
                    <button
                      key={mood.id}
                      onClick={() => setCurrentMood(mood)}
                      className={cn(
                        "group p-4 rounded-3xl border-2 transition-all text-left flex items-center gap-4",
                        currentMood.id === mood.id
                          ? "border-stone-900 bg-white shadow-lg"
                          : "border-transparent bg-stone-100 hover:bg-stone-200"
                      )}
                    >
                      <div className="relative flex h-10 w-10 shrink-0">
                        <div
                          className="absolute inset-0 rounded-full border border-white z-10 translate-x-1 shadow-sm"
                          style={{ backgroundColor: mood.sofaColor }}
                        />
                        <div
                          className="absolute inset-0 rounded-full scale-90 -translate-x-1"
                          style={{ backgroundColor: mood.wallColor }}
                        />
                      </div>

                      <div className="overflow-hidden">
                        <p className="text-[11px] font-bold text-stone-900 uppercase truncate">
                          {mood.name}
                        </p>
                        <p className="text-[9px] text-stone-400 uppercase tracking-widest">
                          {mood.type}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <button className="h-20 bg-stone-900 text-white rounded-[2rem] font-bold uppercase text-[10px] tracking-[0.3em] hover:bg-black transition-all flex items-center justify-center gap-4 group">
                Request Samples
                <Maximize2 className="h-4 w-4 group-hover:scale-125 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
