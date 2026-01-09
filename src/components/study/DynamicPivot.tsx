"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Activity, ShieldCheck, Repeat } from "lucide-react";

export function DynamicPivot() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Tilt the chair from 0 to 15 degrees based on scroll
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [0, 15]);
  const backrestShift = useTransform(scrollYProgress, [0, 0.5], [0, 20]);

  return (
    <section ref={containerRef} className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          {/* THE TILT VISUALIZER */}
          <div className="lg:col-span-7 relative h-150 flex items-center justify-center bg-stone-50 rounded-[4rem] perspective-1000">
            <div className="relative w-full max-w-md h-full flex flex-col items-center justify-center">
              {/* Backrest (Dynamic) */}
              <motion.div
                style={{ rotateX, y: backrestShift }}
                className="absolute top-1/4 w-48 h-64 bg-stone-900 rounded-t-[3rem] origin-bottom shadow-2xl z-10"
              >
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-4 h-24 bg-stone-800 rounded-full opacity-40" />
              </motion.div>

              {/* Seat Base (Static) */}
              <div className="absolute bottom-[35%] w-64 h-16 bg-stone-800 rounded-2xl shadow-xl z-20">
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-mono text-stone-400">
                  Synchro-Tilt: 1:2 Ratio
                </div>
              </div>

              {/* Base/Gas Lift */}
              <div className="absolute bottom-10 w-2 h-48 bg-stone-300 rounded-full" />
            </div>

            {/* Scale/Degree Marker */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
              <div className="h-48 w-px bg-stone-200 relative">
                <motion.div
                  style={{
                    top: useTransform(
                      scrollYProgress,
                      [0, 0.5],
                      ["0%", "100%"]
                    ),
                  }}
                  className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-stone-900 rounded-full shadow-lg"
                />
              </div>
              <span className="text-[10px] font-mono text-stone-400">
                15° Tilt
              </span>
            </div>
          </div>

          {/* THE SPECS */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.4em]">
                Kinetic Support
              </span>
              <h2 className="text-6xl font-light tracking-tighter leading-tight">
                Responsive <br />{" "}
                <span className="italic font-serif text-stone-400">
                  Kinematics.
                </span>
              </h2>
              <p className="text-stone-500 font-light text-lg">
                The AeroTask chair doesn&apos;t just sit; it moves with you. The
                synchronous mechanism adjusts the backrest and seat in a perfect
                1:2 ratio to maintain lumbar contact.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <SpecItem
                icon={Repeat}
                label="Synchro-Tilt"
                detail="Maintains open hip angle during recline."
              />
              <SpecItem
                icon={Activity}
                label="Weight Sensing"
                detail="Automatic tension based on user morphology."
              />
              <SpecItem
                icon={ShieldCheck}
                label="Lumbar Lock"
                detail="4-point adjustable spinal stabilization."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface SpecItemProps {
  icon: React.ComponentType<{ className: string }>;
  label: string;
  detail: string;
}

function SpecItem({ icon: Icon, label, detail }: SpecItemProps) {
  return (
    <div className="flex gap-6 group">
      <div className="h-12 w-12 rounded-2xl bg-stone-100 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-all">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h4 className="text-sm font-bold uppercase tracking-widest text-stone-900 mb-1">
          {label}
        </h4>
        <p className="text-xs text-stone-500 font-light">{detail}</p>
      </div>
    </div>
  );
}
