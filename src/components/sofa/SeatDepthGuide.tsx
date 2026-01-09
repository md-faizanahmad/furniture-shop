"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Info, Maximize2, Coffee } from "lucide-react";

const DEPTHS = [
  {
    id: "formal",
    label: "Formal",
    cm: "55cm",
    desc: "Upright posture for conversation.",
    icon: Coffee,
  },
  {
    id: "lounge",
    label: "Deep Lounge",
    cm: "70cm",
    desc: "Extended depth for relaxed immersion.",
    icon: Maximize2,
  },
];

export function SeatDepthGuide() {
  const [active, setActive] = useState(DEPTHS[0]);

  return (
    <section className="py-32 bg-stone-900 text-white rounded-[4rem] mx-4 md:mx-8 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          {/* 1. TEXT & TOGGLES */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <span className="text-stone-500 text-[10px] font-bold uppercase tracking-[0.6em] block">
                Posture Dynamics
              </span>
              <h2 className="text-5xl font-light tracking-tighter leading-none">
                The Depth <br />{" "}
                <span className="italic font-serif text-stone-400">
                  of Relaxation.
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              {DEPTHS.map((depth) => (
                <button
                  key={depth.id}
                  onClick={() => setActive(depth)}
                  className={`w-full p-6 rounded-3xl border-2 text-left transition-all duration-500 flex items-center justify-between ${
                    active.id === depth.id
                      ? "bg-white text-stone-900 border-white"
                      : "border-stone-800 text-stone-500"
                  }`}
                >
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest">
                      {depth.label}
                    </h4>
                    <p className="text-xs font-light mt-1 opacity-70">
                      {depth.desc}
                    </p>
                  </div>
                  <span className="text-xl font-mono">{depth.cm}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 2. THE DIAGRAM (Visual) */}
          <div className="lg:col-span-7 relative h-100 md:h-125 bg-stone-800/50 rounded-[3rem] flex items-center justify-center p-12 border border-stone-800">
            {/* Geometric Sofa Silhouette */}
            <div className="relative w-full max-w-md h-64 border-b-2 border-stone-700 flex items-end">
              {/* Seat Animation */}
              <motion.div
                animate={{ width: active.id === "formal" ? "60%" : "90%" }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="h-16 bg-white rounded-t-xl relative shadow-[0_-20px_50px_rgba(255,255,255,0.05)]"
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[10px] font-mono text-amber-200">
                  {active.cm}
                </div>
              </motion.div>

              {/* Backrest */}
              <div className="absolute left-0 bottom-0 w-8 h-48 bg-stone-700 rounded-t-full" />
            </div>

            <div className="absolute bottom-10 right-10 flex items-center gap-3 text-stone-600">
              <Info className="h-4 w-4" />
              <span className="text-[9px] font-bold uppercase tracking-widest">
                Postural Accuracy 1:10
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
