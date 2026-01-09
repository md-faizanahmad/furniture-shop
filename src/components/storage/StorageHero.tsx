"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function StorageHero() {
  return (
    <section className="relative h-[85vh] w-full flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=2000"
          fill
          priority
          className="object-cover grayscale-[0.3]"
          alt="Minimalist Cabinetry"
        />
        <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-stone-500 text-[10px] font-bold uppercase tracking-[0.8em] block mb-8">
              The Invisible Foundation
            </span>
            <h1 className="text-stone-900 text-7xl md:text-[9rem] font-light tracking-tighter leading-[0.8] mb-8">
              Conceal <br />
              <span className="italic font-serif text-stone-400">
                & Curate.
              </span>
            </h1>
            <p className="text-lg text-stone-600 font-light leading-relaxed max-w-md">
              Architectural storage solutions that eliminate visual noise,
              providing the canvas for a life of intentionality.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
