"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Eye, ShieldCheck } from "lucide-react";
import { BLUEPRINT_NODES } from "@/lib/study/blueprint-data";

export function CableBlueprint() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <section className="py-32 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* 1. TEXTUAL CONTEXT */}
          <div className="lg:w-1/3 space-y-8">
            <div className="space-y-4">
              <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.6em] block">
                Internal Architecture
              </span>
              <h2 className="text-5xl font-light tracking-tighter text-stone-900 leading-none">
                Zero-Friction <br />
                <span className="italic font-serif text-stone-400">
                  Utility.
                </span>
              </h2>
            </div>

            <p className="text-stone-500 font-light leading-relaxed">
              We treat cable management as a structural priority. By routing
              power through the core of the furniture, we eliminate the visual
              noise of modern technology.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-stone-400">
                <ShieldCheck className="h-5 w-5" />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Shielded Interference
                </span>
              </div>
              <div className="flex items-center gap-4 text-stone-400">
                <Zap className="h-5 w-5" />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Integrated 60W PD
                </span>
              </div>
            </div>
          </div>

          {/* 2. THE 3D SCHEMATIC VISUALIZER */}
          <div className="lg:w-2/3 relative aspect-video bg-white rounded-[4rem] shadow-2xl border border-stone-200 p-8 flex items-center justify-center overflow-hidden">
            {/* Blueprint Grid Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />

            {/* The "3D" Desk Graphic (SVG-based) */}
            <div className="relative w-full h-full max-w-3xl">
              <motion.div
                animate={{ rotateY: 10, rotateX: 5 }}
                className="w-full h-full relative"
              >
                {/* SVG Outline representing the desk and hidden channels */}
                <svg viewBox="0 0 800 500" className="w-full h-full">
                  {/* Outer Table Top */}
                  <path
                    d="M100,150 L700,150 L650,450 L50,450 Z"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />

                  {/* Internal Routing Path (The Wire) */}
                  <motion.path
                    d="M600,160 L600,180 L300,180 L300,350 L620,350 L620,450"
                    fill="none"
                    stroke="#000"
                    strokeWidth="3"
                    strokeDasharray="10 10"
                    animate={{ strokeDashoffset: [0, -100] }}
                    transition={{
                      repeat: Infinity,
                      duration: 10,
                      ease: "linear",
                    }}
                    className="opacity-40"
                  />
                </svg>

                {/* Hotspot Points */}
                {BLUEPRINT_NODES.map((node) => (
                  <button
                    key={node.id}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    className="absolute group"
                    style={{
                      top: node.coordinates.top,
                      left: node.coordinates.left,
                    }}
                  >
                    <div className="relative h-6 w-6">
                      <motion.div
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0.2, 0.5],
                        }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute inset-0 bg-stone-900 rounded-full"
                      />
                      <div className="absolute inset-1.5 bg-stone-900 rounded-full border border-white" />
                    </div>

                    {/* Tooltip Overlay */}
                    <AnimatePresence>
                      {hoveredNode === node.id && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9, y: 10 }}
                          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 p-6 bg-stone-900 text-white rounded-3xl shadow-2xl z-50"
                        >
                          <p className="text-[9px] font-bold uppercase tracking-widest text-stone-500 mb-2">
                            {node.label}
                          </p>
                          <p className="text-xs font-light leading-relaxed text-stone-300">
                            {node.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                ))}
              </motion.div>
            </div>

            {/* Bottom Label */}
            <div className="absolute bottom-8 right-8 flex items-center gap-3">
              <Eye className="h-4 w-4 text-stone-300" />
              <span className="text-[9px] font-bold text-stone-300 uppercase tracking-widest">
                Blueprint View 1.0
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
