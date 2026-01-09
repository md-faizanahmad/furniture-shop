"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function SofaHero() {
  return (
    <section className="relative h-[85vh] w-full flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=2000"
          fill
          priority
          className="object-cover opacity-90"
          alt="Luxury Minimalist Sofa"
        />
        {/* Soft atmospheric overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.8em] block mb-8">
              The Living Collection
            </span>
            <h1 className="text-stone-900 text-7xl md:text-[9rem] font-light tracking-tighter leading-[0.8] mb-8">
              Sculpted <br />
              <span className="italic font-serif text-stone-400">Comfort.</span>
            </h1>
            <p className="text-lg text-stone-500 font-light leading-relaxed max-w-md">
              A study in soft volumes and architectural poise. Designed to be
              the silent anchor of the modern home.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
