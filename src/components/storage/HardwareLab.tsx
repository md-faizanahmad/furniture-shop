"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { VolumeX, Sparkles } from "lucide-react";

export function HardwareLab() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
      {/* Interactive Hardware Side */}
      <div className="p-12 md:p-24 flex flex-col justify-center space-y-12">
        <div className="space-y-4">
          <span className="text-stone-500 text-[10px] font-bold uppercase tracking-[0.4em]">
            The Soft-Touch Experience
          </span>
          <h3 className="text-5xl font-light italic font-serif">
            Kinetic <br /> Silence.
          </h3>
          <p className="text-stone-400 font-light max-w-sm">
            Experience the German-engineered hydraulic dampers that ensure every
            drawer closes with a whisper.
          </p>
        </div>

        <div className="space-y-6">
          <FeatureItem
            icon={VolumeX}
            title="Zero Decibel"
            desc="Integrated soft-close dampening."
          />
          <FeatureItem
            icon={Sparkles}
            title="Push-to-Open"
            desc="Handle-less magnetic actuators."
          />
        </div>
      </div>

      {/* The Visual Simulation */}
      <div className="relative h-125 lg:h-full bg-stone-800 flex items-center justify-center p-12">
        <div className="relative w-full max-w-md bg-stone-700 aspect-square rounded-[2rem] border border-stone-600 overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 300 }}
            animate={{ x: isOpen ? 300 : 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            onDragEnd={(_, info) => setIsOpen(info.point.x > 200)}
            className="absolute inset-0 bg-stone-900 z-10 border-r border-stone-500 flex items-center justify-end p-8 cursor-grab active:cursor-grabbing shadow-2xl"
          >
            <div className="w-1 h-12 bg-stone-700 rounded-full" />
          </motion.div>
          <div className="absolute inset-0 p-12 flex flex-col gap-4">
            <div className="h-4 w-3/4 bg-stone-600 rounded-full" />
            <div className="h-4 w-1/2 bg-stone-600 rounded-full" />
            <div className="mt-auto h-24 w-full border-2 border-dashed border-stone-600 rounded-2xl flex items-center justify-center text-[10px] uppercase text-stone-500 font-bold tracking-widest">
              Internal Core
            </div>
          </div>
        </div>

        {/* Interaction Hint */}
        <motion.div
          animate={{ x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute right-20 top-1/2 text-white/20"
        >
          <span className="text-[10px] font-bold uppercase tracking-widest">
            Drag to Open →
          </span>
        </motion.div>
      </div>
    </div>
  );
}

interface FeatureItemProps {
  icon: React.ComponentType<{ className: string }>;
  title: string;
  desc: string;
}

function FeatureItem({ icon: Icon, title, desc }: FeatureItemProps) {
  return (
    <div className="flex gap-4">
      <div className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
        <Icon className="h-4 w-4 text-stone-400" />
      </div>
      <div>
        <h4 className="text-sm font-medium">{title}</h4>
        <p className="text-xs text-stone-500 font-light">{desc}</p>
      </div>
    </div>
  );
}
