"use client";

import React from "react";
import { motion } from "framer-motion";
import { Monitor, Users2, Zap, Share2 } from "lucide-react";
import Image from "next/image";

const FEATURES = [
  {
    icon: Monitor,
    label: "Media Integration",
    detail: 'Hidden VESA mounts for 55" displays.',
  },
  {
    icon: Zap,
    label: "Power Hubs",
    detail: "Built-in 60W USB-C and wireless charging.",
  },
  {
    icon: Share2,
    label: "Modular Rail",
    detail: "Snap-on whiteboards and acoustic felt dividers.",
  },
];

export function CollaborativeUI() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
      {/* FEATURE CALLOUTS (Left) */}
      <div className="lg:col-span-4 space-y-12">
        {FEATURES.map((feature, i) => (
          <motion.div
            key={feature.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="group"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-stone-50 rounded-2xl group-hover:bg-stone-900 group-hover:text-white transition-colors duration-500">
                <feature.icon className="h-5 w-5" />
              </div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-stone-900">
                {feature.label}
              </h4>
            </div>
            <p className="text-stone-500 font-light text-sm pl-16 italic">
              {feature.detail}
            </p>
          </motion.div>
        ))}
      </div>

      {/* DYNAMIC SHOWCASE (Right) */}
      <div className="lg:col-span-8 grid grid-cols-2 gap-6 relative">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative aspect-4/5 rounded-[3rem] overflow-hidden shadow-2xl mt-12"
        >
          <Image
            fill
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200"
            className="w-full h-full object-cover"
            alt="Brainstorming Session"
          />
        </motion.div>

        <div className="space-y-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative aspect-square rounded-[3rem] overflow-hidden shadow-xl"
          >
            <Image
              fill
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200"
              className="w-full h-full object-cover"
              alt="Modular Pods"
            />
          </motion.div>
          <div className="p-10 bg-stone-900 rounded-[3rem] text-white flex flex-col justify-center aspect-square">
            <Users2 className="h-8 w-8 mb-6 text-stone-500" />
            <h3 className="text-3xl font-light mb-4 leading-tight">
              Agile <br />
              Architecture.
            </h3>
            <p className="text-stone-400 text-xs font-light leading-relaxed">
              Configurable for 2 to 8 participants. Moveable assets allow your
              office to breathe with the project lifecycle.
            </p>
          </div>
        </div>

        {/* Floating Stat Card */}
        <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-3xl shadow-2xl border border-stone-100 hidden md:block">
          <p className="text-4xl font-serif italic text-stone-900">40%</p>
          <p className="text-[9px] font-bold uppercase tracking-widest text-stone-400">
            Increase in Team Velocity
          </p>
        </div>
      </div>
    </div>
  );
}
