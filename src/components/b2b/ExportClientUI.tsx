"use client";

import React from "react";
import { motion } from "framer-motion";
import { Truck, Globe2, ShieldCheck, Box } from "lucide-react";

const LOGISTICS_STEPS = [
  {
    icon: Box,
    title: "ISPM-15 Packaging",
    desc: "Custom-built heat-treated wooden crates with shock-absorbent internal suspension for zero-damage transit.",
  },
  {
    icon: ShieldCheck,
    title: "Global Compliance",
    desc: "Seamless customs handling with pre-verified HS Codes and automated duty documentation for your region.",
  },
  {
    icon: Truck,
    title: "White Glove Delivery",
    desc: "On-site assembly and debris removal by our certified local installation partners in 40+ countries.",
  },
];

export function ExportClientUI() {
  return (
    <div className="py-32">
      {/* LOGISTICS STEPS */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-48">
          {LOGISTICS_STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="space-y-6"
            >
              <div className="h-16 w-16 bg-stone-100 rounded-full flex items-center justify-center">
                <step.icon className="h-6 w-6 text-stone-900" />
              </div>
              <h3 className="text-xl font-medium tracking-tight">
                {step.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed font-light">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* TRANSIT TIME VISUALIZER */}
        <div className="bg-stone-900 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h2 className="text-5xl font-light tracking-tighter leading-none">
                Optimized <br />{" "}
                <span className="italic font-serif text-stone-400">
                  Transit Cycles.
                </span>
              </h2>
              <p className="text-stone-400 font-light leading-relaxed max-w-sm">
                We leverage major maritime hubs (Mumbai, Mundra) to maintain
                consistent lead times for global bulk orders.
              </p>

              <div className="space-y-6">
                <TransitLine region="Europe / UK" days="18-22" />
                <TransitLine region="North America" days="24-30" />
                <TransitLine region="Middle East / UAE" days="8-12" />
              </div>
            </div>

            <div className="relative aspect-square md:aspect-auto flex items-center justify-center">
              <Globe2 className="w-full h-full text-stone-800 absolute opacity-20" />
              <div className="relative z-10 text-center">
                <p className="text-[100px] md:text-[150px] font-light tracking-tighter leading-none text-white">
                  40+
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-500">
                  Major Port Connections
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TransitLine({ region, days }: { region: string; days: string }) {
  return (
    <div className="group border-b border-stone-800 pb-4">
      <div className="flex justify-between items-end">
        <span className="text-stone-300 text-sm font-medium">{region}</span>
        <span className="text-stone-500 text-[10px] font-bold uppercase tracking-widest">
          {days} Days
        </span>
      </div>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        className="h-px bg-stone-500 mt-2 origin-left"
      />
    </div>
  );
}
