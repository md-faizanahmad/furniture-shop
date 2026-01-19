"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Palette, Maximize2, Sparkles } from "lucide-react";
import { ROOM_MOODS, RoomMood } from "@/lib/living-room/config-data";

export function RoomConfigurator() {
  const [currentMood, setCurrentMood] = useState<RoomMood>(ROOM_MOODS[0]);
  const [isDayMode, setIsDayMode] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Optional: Auto-scroll to active button on mobile
  useEffect(() => {
    const activeBtn = document.getElementById(`mood-${currentMood.id}`);
    if (activeBtn && window.innerWidth < 1024) {
      activeBtn.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [currentMood]);

  return (
    <section className="py-16 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-8 md:gap-12">
          {/* HEADER SECTION */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="max-w-xl space-y-3 md:space-y-4">
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400">
                Atmosphere Simulator
              </span>
              <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-stone-900 leading-[0.9]">
                Define your{" "}
                <span className="italic font-serif text-stone-400">
                  Environment.
                </span>
              </h2>
            </div>

            <button
              onClick={() => setIsDayMode(!isDayMode)}
              className="flex items-center gap-3 px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-stone-100 hover:bg-stone-200 transition-colors group shrink-0"
            >
              <Sparkles
                className={cn(
                  "h-3.5 w-3.5 md:h-4 md:w-4 transition-transform group-hover:rotate-12",
                  isDayMode ? "text-amber-500" : "text-indigo-600",
                )}
              />
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest">
                {isDayMode ? "Natural Light" : "Warm Evening"}
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            {/* MAIN VISUALIZER */}
            <div className="lg:col-span-9 relative aspect-[4/5] sm:aspect-video rounded-[2.5rem] md:rounded-[3rem] overflow-hidden bg-stone-200 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMood.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentMood.image}
                    alt={currentMood.name}
                    fill
                    className={cn(
                      "object-cover transition-all duration-1000",
                      isDayMode
                        ? "brightness-100 contrast-100"
                        : "brightness-75 contrast-110 saturate-[0.8] sepia-[0.1]",
                    )}
                    priority
                  />
                  {!isDayMode && (
                    <div className="absolute inset-0 bg-orange-900/10 mix-blend-overlay pointer-events-none" />
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Status Labels - Stacked on Mobile */}
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 flex flex-col sm:flex-row gap-3 z-20">
                <div className="px-4 py-2 md:px-6 md:py-3 bg-white/90 backdrop-blur-md rounded-xl md:rounded-2xl shadow-xl border border-white/20">
                  <p className="text-[7px] md:text-[8px] font-bold text-stone-400 uppercase tracking-widest">
                    Selected Form
                  </p>
                  <p className="text-xs md:text-sm font-medium text-stone-900">
                    {currentMood.name}
                  </p>
                </div>
                <div className="px-4 py-2 md:px-6 md:py-3 bg-stone-900/90 backdrop-blur-md rounded-xl md:rounded-2xl shadow-xl text-white border border-white/10">
                  <p className="text-[7px] md:text-[8px] font-bold text-stone-400 uppercase tracking-widest">
                    Mood
                  </p>
                  <p className="text-xs md:text-sm font-medium">
                    {currentMood.type}
                  </p>
                </div>
              </div>
            </div>

            {/* CONFIGURATION DOCK */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              {/* MOOD SELECTION: Swipeable on mobile, Grid on desktop */}
              <div className="bg-stone-50 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-stone-100">
                <div className="flex items-center gap-2 mb-6">
                  <Palette className="h-4 w-4 text-stone-400" />
                  <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-stone-500">
                    Curated Moods
                  </span>
                </div>

                <div
                  ref={scrollRef}
                  className="flex flex-row overflow-x-auto lg:grid lg:grid-cols-1 gap-4 no-scrollbar snap-x snap-mandatory"
                >
                  {ROOM_MOODS.map((mood) => (
                    <button
                      id={`mood-${mood.id}`}
                      key={mood.id}
                      onClick={() => setCurrentMood(mood)}
                      className={cn(
                        "group p-3 md:p-4 rounded-2xl md:rounded-3xl border-2 transition-all text-left flex items-center gap-4 shrink-0 min-w-[200px] lg:min-w-0 snap-center",
                        currentMood.id === mood.id
                          ? "border-stone-900 bg-white shadow-lg"
                          : "border-transparent bg-stone-100 hover:bg-stone-200",
                      )}
                    >
                      <div className="relative flex h-8 w-8 md:h-10 md:w-10 shrink-0">
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
                        <p className="text-[10px] md:text-[11px] font-bold text-stone-900 uppercase truncate">
                          {mood.name}
                        </p>
                        <p className="text-[8px] md:text-[9px] text-stone-400 uppercase tracking-widest">
                          {mood.type}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Primary Action Button */}
              <button className="h-16 md:h-20 bg-stone-900 text-white rounded-[1.5rem] md:rounded-[2rem] font-bold uppercase text-[9px] md:text-[10px] tracking-[0.3em] hover:bg-black transition-all flex items-center justify-center gap-4 group">
                Request Samples
                <Maximize2 className="h-4 w-4 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
