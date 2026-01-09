"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { FABRICS } from "@/lib/sofa/upholstery-data";
import Image from "next/image";

export function UpholsteryConfigurator() {
  const [activeFabric, setActiveFabric] = useState(FABRICS[0]);

  return (
    <section className="py-24 md:py-40 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* 1. VISUAL PREVIEW (Left) */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-4/3 rounded-[3rem] overflow-hidden bg-white shadow-2xl border border-stone-200">
              {/* Dynamic Texture Overlay */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFabric.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  {/* Macro Texture underlying the sofa shape */}
                  <Image
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                    src={activeFabric.texture}
                    className="w-full h-full object-cover opacity-20 mix-blend-multiply"
                    alt="Fabric Texture"
                  />
                  {/* Dynamic Color Wash */}
                  <div
                    className="absolute inset-0 opacity-80 transition-colors duration-1000"
                    style={{ backgroundColor: activeFabric.hex }}
                  />

                  {/* Product Silhouette (Mockup) */}
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                    <div className="w-full h-40 bg-black/5 rounded-full blur-3xl translate-y-20 scale-150" />
                    <h3 className="text-white text-[12vw] font-black opacity-10 select-none tracking-tighter">
                      {activeFabric.name.split(" ")[1]}
                    </h3>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Technical Overlay */}
              <div className="absolute top-10 right-10 flex flex-col items-end">
                <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest">
                  Material Grade
                </span>
                <span className="text-lg font-serif italic text-stone-900">
                  {activeFabric.category}
                </span>
              </div>
            </div>
          </div>

          {/* 2. SWATCH SELECTION (Right) */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.4em] block">
                Customization
              </span>
              <h2 className="text-5xl md:text-6xl font-light tracking-tighter text-stone-900 leading-none">
                Tailored <br />{" "}
                <span className="italic font-serif text-stone-400">
                  Tactility.
                </span>
              </h2>
              <p className="text-stone-500 font-light text-lg">
                Select from our curated palette of European textiles. Each hide
                and weave is hand-inspected for grain consistency.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {FABRICS.map((fabric) => (
                <button
                  key={fabric.id}
                  onClick={() => setActiveFabric(fabric)}
                  className={`group relative flex items-center gap-6 p-4 rounded-3xl border-2 transition-all duration-500 ${
                    activeFabric.id === fabric.id
                      ? "border-stone-900 bg-white shadow-xl translate-x-4"
                      : "border-transparent bg-stone-200/50 hover:bg-stone-200"
                  }`}
                >
                  <div
                    className="h-16 w-16 rounded-2xl overflow-hidden shadow-inner relative shrink-0"
                    style={{ backgroundColor: fabric.hex }}
                  >
                    <Image
                      alt="fabric-texture"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      fill
                      src={fabric.texture}
                      className="w-full h-full object-cover opacity-40 mix-blend-multiply"
                    />
                    {activeFabric.id === fabric.id && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                        <Check className="h-5 w-5 text-white" />
                      </div>
                    )}
                  </div>

                  <div className="text-left">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-stone-900">
                      {fabric.name}
                    </h4>
                    <p className="text-xs text-stone-500 font-light mt-1">
                      Ready for 4-6 week delivery.
                    </p>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-6 pt-8 border-t border-stone-200">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-white bg-stone-300"
                  />
                ))}
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                +14 additional bespoke hides in-store
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
