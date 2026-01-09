"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { VolumeX, ShieldCheck } from "lucide-react";
import { ACOUSTIC_LAYERS } from "@/lib/office/acoustic-data";

export function AcousticShield() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* 1. THE VISUAL WAVEFORM (left) */}
          <div className="flex-1 relative w-full aspect-square">
            <div className="absolute inset-0 bg-stone-50 rounded-[4rem] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={ACOUSTIC_LAYERS[activeTab].image}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover grayscale"
                    alt="Acoustic Material"
                  />
                  <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply" />
                </motion.div>
              </AnimatePresence>

              {/* Animated Sound Wave Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex gap-1 items-center">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: [20, 100, 20],
                        opacity: [0.2, 1, 0.2],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeInOut",
                      }}
                      className="w-1.5 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                      style={{ height: "40px" }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Decibel Counter Badge */}
            <div className="absolute top-10 right-10 bg-white p-6 rounded-3xl shadow-2xl text-center">
              <span className="text-[10px] font-bold text-stone-400 block mb-1">
                NRC Rating
              </span>
              <p className="text-3xl font-serif italic text-stone-900">
                {ACOUSTIC_LAYERS[activeTab].absorptionRate / 100}
              </p>
            </div>
          </div>

          {/* 2. THE CONTROLS (right) */}
          <div className="flex-1 space-y-12">
            <div className="space-y-4">
              <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.6em] block">
                Sound Intelligence
              </span>
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-stone-900 leading-none">
                Acoustic <br />
                <span className="italic font-serif text-stone-500">
                  Shield.
                </span>
              </h2>
            </div>

            <div className="space-y-6">
              {ACOUSTIC_LAYERS.map((layer, idx) => (
                <button
                  key={layer.id}
                  onClick={() => setActiveTab(idx)}
                  className={cn(
                    "w-full p-8 rounded-[2.5rem] border-2 text-left transition-all",
                    activeTab === idx
                      ? "border-stone-900 bg-stone-50"
                      : "border-transparent bg-stone-100/50 hover:bg-stone-100"
                  )}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-medium">{layer.name}</h4>
                    <VolumeX
                      className={cn(
                        "h-5 w-5",
                        activeTab === idx ? "text-stone-900" : "text-stone-300"
                      )}
                    />
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="flex-1 h-1 bg-stone-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{
                          width:
                            activeTab === idx
                              ? `${layer.absorptionRate}%`
                              : "0%",
                        }}
                        className="h-full bg-stone-900"
                      />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                      {layer.absorptionRate}% Absorption
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-8 flex items-center gap-4 text-stone-400">
              <ShieldCheck className="h-5 w-5" />
              <p className="text-xs font-light italic leading-relaxed">
                Tested to ASTM C423 standards. Designed to reduce ambient office
                noise by up to 12dB.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
