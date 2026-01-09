"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Speaker,
} from "lucide-react";

// Helper for Tailwind class merging
const cn = (...classes: (string | undefined | false | null)[]): string =>
  classes.filter(Boolean).join(" ");

const SCENES = [
  {
    id: "dawn",
    label: "Morning Rise",
    color: "from-orange-200/20",
    text: "Soft 2000K gradual brightening.",
  },
  {
    id: "focus",
    label: "Deep Work",
    color: "from-blue-100/20",
    text: "Crisp 4000K for cognitive clarity.",
  },
  {
    id: "soiree",
    label: "Evening Social",
    color: "from-amber-500/20",
    text: "Dimmed 2700K accent layering.",
  },
];

export function SmartIntegration() {
  const [activeScene, setActiveScene] = useState(SCENES[1]);

  return (
    <section className="py-20 md:py-40 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* 1. VISUAL INTERFACE (Mobile Simulation) */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative flex justify-center py-10">
            {/* Ambient Background Glow */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScene.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={cn(
                  "absolute inset-0 bg-linear-to-tr to-transparent blur-[80px] md:blur-[120px] rounded-full",
                  activeScene.color
                )}
              />
            </AnimatePresence>

            {/* The "Device" - Uses max-width and aspect ratio for responsiveness */}
            <div className="relative z-10 w-full max-w-70 md:max-w-[320px] aspect-9/19 bg-stone-900 rounded-[2.5rem] md:rounded-[3rem] p-3 md:p-4 shadow-2xl border-[6px] md:border-[8px] border-stone-800">
              <div className="h-full w-full bg-stone-950 rounded-[1.8rem] md:rounded-[2.2rem] overflow-hidden p-5 md:p-6 space-y-6 md:space-y-8 flex flex-col">
                <div className="flex justify-between items-center pt-2">
                  <div className="h-1.5 w-10 bg-stone-800 rounded-full" />
                  <div className="h-3 w-3 rounded-full border border-stone-800" />
                </div>

                <div className="space-y-1">
                  <p className="text-[9px] font-bold text-stone-500 uppercase tracking-widest">
                    LUMEN Control
                  </p>
                  <h4 className="text-lg md:text-xl text-white font-medium">
                    Living Room
                  </h4>
                </div>

                <div className="flex-1 space-y-2.5 md:space-y-3">
                  {SCENES.map((scene) => (
                    <button
                      key={scene.id}
                      onClick={() => setActiveScene(scene)}
                      className={cn(
                        "w-full p-3 md:p-4 rounded-xl md:rounded-2xl text-left transition-all duration-300 border",
                        activeScene.id === scene.id
                          ? "bg-white text-stone-900 border-white shadow-lg"
                          : "bg-stone-900 text-stone-500 border-stone-800"
                      )}
                    >
                      <p className="text-[10px] md:text-xs font-bold uppercase tracking-tighter">
                        {scene.label}
                      </p>
                      {activeScene.id === scene.id && (
                        <motion.p
                          layoutId="desc"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.7 }}
                          className="text-[9px] md:text-[10px] mt-1 leading-tight"
                        >
                          {scene.text}
                        </motion.p>
                      )}
                    </button>
                  ))}
                </div>

                <div className="mt-auto pb-2 flex justify-center">
                  <div className="h-1 w-16 bg-stone-800 rounded-full" />
                </div>
              </div>
            </div>

            {/* Floating Protocol Icons - Hidden on small mobile */}
            <div className="absolute -right-2 top-1/4 bg-white p-4 rounded-2xl shadow-xl border border-stone-100 hidden xl:block">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 opacity-40">
                  <CheckCircle2 className="h-4 w-4 text-stone-900" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-stone-900">
                    HomeKit
                  </span>
                </div>
                <div className="flex items-center gap-3 opacity-40">
                  <CheckCircle2 className="h-4 w-4 text-stone-900" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-stone-900">
                    Zigbee 3.0
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. COPY & FEATURES */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-10 md:space-y-12 text-center lg:text-left">
            <div className="space-y-4">
              <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.4em] block">
                Automation
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter text-stone-900 leading-[0.9]">
                Seamless <br />
                <span className="italic font-serif text-stone-400">
                  Intelligence.
                </span>
              </h2>
              <p className="text-stone-500 font-light text-base md:text-lg max-w-md mx-auto lg:mx-0">
                Every LUMEN fixture is a smart node. Integrate with your
                preferred ecosystem to automate your circadian rhythm.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:gap-8 text-left">
              <Feature
                icon={Speaker}
                title="Voice"
                desc="Siri, Google, Alexa."
              />
              <Feature
                icon={Clock}
                title="Schedules"
                desc="Circadian syncing."
              />
              <Feature
                icon={Smartphone}
                title="Remote"
                desc="Global control."
              />
              <Feature
                icon={ShieldCheck}
                title="Matter"
                desc="Ready for 2026."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="space-y-3">
      <div className="h-10 w-10 bg-stone-50 rounded-xl flex items-center justify-center border border-stone-100">
        <Icon className="h-5 w-5 text-stone-900" />
      </div>
      <h4 className="text-[11px] font-bold uppercase tracking-widest text-stone-900">
        {title}
      </h4>
      <p className="text-[11px] text-stone-500 font-light leading-snug">
        {desc}
      </p>
    </div>
  );
}
