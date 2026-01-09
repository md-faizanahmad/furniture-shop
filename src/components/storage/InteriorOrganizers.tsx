"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronRight, MousePointer2 } from "lucide-react";
import { ORGANIZER_KITS } from "@/lib/storage/organizer-data";

export function InteriorOrganizers() {
  const [activeKit, setActiveKit] = useState(ORGANIZER_KITS[0]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  return (
    <section className="py-32 bg-[#FDFDFD] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* 1. INTERACTIVE DRAWER VISUALIZER (Left) */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-square md:aspect-video bg-stone-100 rounded-[3rem] overflow-hidden group border border-stone-200 shadow-inner">
              {/* The "Internal" View */}
              <div className="absolute inset-0 p-12 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeKit.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <Image
                      src={activeKit.image}
                      alt={activeKit.name}
                      fill
                      className="object-cover transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-stone-900/10" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* The "Drawer Front" (Animated Overlay) */}
              <motion.div
                initial={false}
                animate={{ x: isDrawerOpen ? "85%" : "0%" }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="absolute inset-0 bg-stone-200 z-10 border-l-4 border-white shadow-[-50px_0_100px_rgba(0,0,0,0.1)] flex items-center justify-start p-12 cursor-pointer"
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              >
                <div className="flex flex-col gap-1 opacity-20 group-hover:opacity-100 transition-opacity">
                  <MousePointer2 className="h-6 w-6 text-stone-900 mb-2" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-stone-900">
                    {isDrawerOpen ? "Close" : "Open Reveal"}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* 2. SPECIFICATION PANEL (Right) */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.6em] block">
                Jewelry-Box Precision
              </span>
              <h2 className="text-5xl md:text-6xl font-light tracking-tighter text-stone-900 leading-[0.9]">
                Internal <br />
                <span className="italic font-serif text-stone-400">Order.</span>
              </h2>
              <p className="text-stone-500 font-light text-lg">
                True luxury is found in the details that remain unseen until the
                moment of use.
              </p>
            </div>

            <div className="space-y-4">
              {ORGANIZER_KITS.map((kit) => (
                <button
                  key={kit.id}
                  onClick={() => {
                    setActiveKit(kit);
                    setIsDrawerOpen(true);
                  }}
                  className={cn(
                    "w-full p-6 rounded-3xl border transition-all duration-500 flex items-center justify-between group",
                    activeKit.id === kit.id
                      ? "bg-white border-stone-900 shadow-xl scale-[1.02]"
                      : "border-transparent bg-stone-50 text-stone-400 hover:bg-stone-100"
                  )}
                >
                  <div className="text-left">
                    <p className="text-[9px] font-bold uppercase tracking-widest mb-1 opacity-60">
                      {kit.material}
                    </p>
                    <h4 className="text-lg font-medium text-stone-900">
                      {kit.name}
                    </h4>
                    <p className="text-xs font-light text-stone-400 mt-1">
                      {kit.bestFor}
                    </p>
                  </div>
                  <ChevronRight
                    className={cn(
                      "h-5 w-5 transition-transform",
                      activeKit.id === kit.id
                        ? "text-stone-900 translate-x-0"
                        : "text-stone-200 -translate-x-2 group-hover:translate-x-0"
                    )}
                  />
                </button>
              ))}
            </div>

            <div className="pt-8 border-t border-stone-100">
              <p className="text-[10px] font-bold uppercase tracking-widest text-stone-300">
                Customization available for heirloom collections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
