"use client";

import React, { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { BUSINESS_STATS, StatItem } from "@/lib/stats-data";

export function ProjectStats() {
  return (
    <section className="py-24 bg-white border-b border-stone-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {BUSINESS_STATS.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, stat.value, {
        duration: 2,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1], // Sophisticated quintic easing
      });
    }
  }, [isInView, count, stat.value, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="flex flex-col m-auto space-y-4"
    >
      {/* Visual Indicator */}
      <div className="h-1 w-8 bg-stone-900" />

      <div className="flex items-baseline gap-1">
        <motion.span className="text-5xl md:text-6xl font-semibold tracking-tighter text-stone-900">
          {rounded}
        </motion.span>
        <span className="text-3xl font-light text-stone-400 font-serif italic">
          {stat.suffix}
        </span>
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-stone-900">
          {stat.label}
        </h4>
        <p className="text-sm text-stone-500 font-light leading-relaxed max-w-50">
          {stat.description}
        </p>
      </div>
    </motion.div>
  );
}
