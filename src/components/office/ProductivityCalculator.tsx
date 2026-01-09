"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { BarChart3, Zap, Timer, BrainCircuit } from "lucide-react";
import { PRODUCTIVITY_METRICS } from "@/lib/office/productivity-data";

export function ProductivityCalculator() {
  const [activeMetric, setActiveMetric] = useState(PRODUCTIVITY_METRICS[0]);

  return (
    <section className="py-32 bg-stone-100 rounded-[4rem] mx-4 mb-32 border border-stone-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          {/* 1. THE DATA CONTROLS */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.6em] block">
                Performance ROI
              </span>
              <h2 className="text-5xl md:text-6xl font-light tracking-tighter text-stone-900 leading-none">
                The Output <br />
                <span className="italic font-serif text-stone-500">
                  Differential.
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              {PRODUCTIVITY_METRICS.map((metric) => (
                <button
                  key={metric.id}
                  onClick={() => setActiveMetric(metric)}
                  className={cn(
                    "w-full flex items-center justify-between p-6 rounded-3xl border-2 transition-all duration-500",
                    activeMetric.id === metric.id
                      ? "bg-white border-stone-900 shadow-xl"
                      : "bg-stone-50 border-transparent text-stone-400 hover:bg-stone-200"
                  )}
                >
                  <div className="flex items-center gap-4">
                    {metric.id === "focus" && <Timer className="h-5 w-5" />}
                    {metric.id === "energy" && <Zap className="h-5 w-5" />}
                    {metric.id === "posture" && (
                      <BrainCircuit className="h-5 w-5" />
                    )}
                    <span className="text-sm font-bold uppercase tracking-widest">
                      {metric.label}
                    </span>
                  </div>
                  <ChevronRight
                    className={cn(
                      "h-4 w-4",
                      activeMetric.id === metric.id
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* 2. THE VISUAL COMPARISON */}
          <div className="lg:col-span-7 bg-white rounded-[3.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8">
              <BarChart3 className="h-8 w-8 text-stone-100" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeMetric.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-12"
              >
                <div className="space-y-2">
                  <h3 className="text-3xl font-light tracking-tight text-stone-900">
                    {activeMetric.label}
                  </h3>
                  <p className="text-stone-500 font-light leading-relaxed max-w-sm">
                    {activeMetric.description}
                  </p>
                </div>

                <div className="space-y-10">
                  {/* STANDARD BENCHMARK */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-stone-400">
                      <span>Standard Office Seating</span>
                      <span>{activeMetric.standardValue}%</span>
                    </div>
                    <div className="h-3 w-full bg-stone-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${activeMetric.standardValue}%` }}
                        className="h-full bg-stone-300"
                      />
                    </div>
                  </div>

                  {/* LUMEN BENCHMARK */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-stone-900">
                      <span>Lumen Executive Series</span>
                      <span className="text-xl font-serif italic">
                        +{activeMetric.lumenValue - activeMetric.standardValue}%
                        Gain
                      </span>
                    </div>
                    <div className="h-3 w-full bg-stone-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${activeMetric.lumenValue}%` }}
                        transition={{
                          type: "spring",
                          stiffness: 60,
                          damping: 20,
                        }}
                        className="h-full bg-stone-900 shadow-[0_0_20px_rgba(0,0,0,0.1)]"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-8 flex items-center gap-4 border-t border-stone-100">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 italic">
                    Data derived from 2025 Ergonomic Workplace Survey
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}
