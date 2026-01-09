"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Wind, ShieldAlert, ThermometerSnowflake, Ruler } from "lucide-react";
import { cn } from "@/lib/utils";

const SLEEP_TECH = [
  {
    title: "Phase-Change Cooling",
    desc: "Graphite-infused latex absorbs and dissipates body heat.",
    icon: ThermometerSnowflake,
  },
  {
    title: "7-Zone Support",
    desc: "Targeted firmness for shoulders, lumbar, and hips.",
    icon: ShieldAlert,
  },
  {
    title: "Micro-Climate Mesh",
    desc: "3D border fabrics ensure 360° air circulation.",
    icon: Wind,
  },
];

export function MattressClientUI() {
  const [activeZone, setActiveZone] = useState("lumbar");

  return (
    <div className="py-32 space-y-64">
      {/* SECTION 1: THE PRESSURE DIAGRAM */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.4em]">
                Orthopedics
              </span>
              <h2 className="text-6xl font-light tracking-tighter text-stone-900 leading-none">
                Zero-Gravity <br />{" "}
                <span className="italic font-serif text-stone-400">
                  Alignment.
                </span>
              </h2>
            </div>

            <p className="text-xl text-stone-500 font-light leading-relaxed">
              Our 7-zone pocket spring system adapts to your unique morphology,
              ensuring the spine remains perfectly neutral regardless of
              sleeping position.
            </p>

            <div className="flex flex-wrap gap-4">
              {["Shoulders", "Lumbar", "Hips"].map((zone) => (
                <button
                  key={zone}
                  onClick={() => setActiveZone(zone.toLowerCase())}
                  className={cn(
                    "px-6 py-2 rounded-full border text-[10px] font-bold uppercase tracking-widest transition-all",
                    activeZone === zone.toLowerCase()
                      ? "bg-stone-900 text-white border-stone-900"
                      : "border-stone-200 text-stone-400 hover:border-stone-400"
                  )}
                >
                  {zone}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="relative aspect-16/10 bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-stone-100 p-12">
              {/* Body Pressure Silhouette */}

              <div className="relative w-full h-full flex items-center justify-center opacity-40">
                <Ruler className="absolute top-0 left-0 text-stone-200 h-full w-full stroke-[0.5]" />
                <motion.div
                  animate={{
                    scale: activeZone === "lumbar" ? 1.1 : 1,
                    opacity: activeZone === "lumbar" ? 1 : 0.5,
                  }}
                  className="w-1/3 h-24 bg-blue-500/20 blur-3xl rounded-full"
                />
              </div>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <p className="text-[12vw] font-black text-stone-900/5 uppercase tracking-tighter select-none">
                  {activeZone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SLEEP TECHNOLOGY CARDS */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SLEEP_TECH.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -10 }}
              className="p-12 bg-white rounded-[3rem] border border-stone-100 shadow-sm space-y-6"
            >
              <div className="h-12 w-12 bg-stone-50 rounded-2xl flex items-center justify-center">
                <item.icon className="h-5 w-5 text-stone-900" />
              </div>
              <h3 className="text-2xl font-light tracking-tight">
                {item.title}
              </h3>
              <p className="text-stone-500 text-sm font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
