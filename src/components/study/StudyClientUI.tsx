"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, PenTool, Layout, Headphones } from "lucide-react";
import Image from "next/image";

const FOCUS_FEATURES = [
  {
    title: "Tactile Surfaces",
    icon: PenTool,
    desc: "Italian leather inlays and solid wood edges provide a grounding sensory experience.",
  },
  {
    title: "Library Systems",
    icon: BookOpen,
    desc: "Modular shelving with integrated LED illumination for curated collections.",
  },
  {
    title: "Hidden Utility",
    icon: Layout,
    desc: "Undermount power hubs and magnetic cable channels for a frictionless surface.",
  },
];

export function StudyClientUI() {
  return (
    <div className="py-32 space-y-64">
      {/* SECTION 1: THE MONOLITH DESK */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-6 relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              className="object-cover"
              alt="The Writer's Desk"
            />
            {/* Visual Callout for Cable Management */}
            <div className="absolute bottom-12 right-12 bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 text-white max-w-50">
              <Headphones className="h-5 w-5 mb-3 text-stone-300" />
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1">
                Zero Friction
              </p>
              <p className="text-xs font-light text-stone-300">
                Internal channels hide all power and data lines.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-12">
            <div className="space-y-4">
              <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.4em]">
                Design Philosophy
              </span>
              <h2 className="text-6xl font-light tracking-tighter text-stone-900 leading-none">
                Distraction <br />{" "}
                <span className="italic font-serif text-stone-400">Free.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {FOCUS_FEATURES.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center gap-6">
                    <div className="h-12 w-12 rounded-2xl bg-white border border-stone-200 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-all duration-500">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-stone-900">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-stone-500 font-light max-w-sm">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE MOOD GRID */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="aspect-4/5 relative rounded-[3rem] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1526887593587-a307ea5d46b4"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              className="object-cover"
              alt="Detail 1"
            />
          </div>
          <div className="aspect-4/5 relative rounded-[3rem] overflow-hidden md:mt-12">
            <Image
              src="https://images.unsplash.com/photo-1531668720450-39cf1563fab9"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              className="object-cover"
              alt="Detail 2"
            />
          </div>
          <div className="p-12 bg-stone-900 rounded-[3rem] text-white flex flex-col justify-end aspect-4/5">
            <h3 className="text-4xl font-light mb-6 font-serif italic">
              Curated <br />
              Intellect.
            </h3>
            <p className="text-stone-400 text-sm font-light leading-relaxed">
              A workspace is an extension of the mind. We build environments
              that respect your concentration and store your legacy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
