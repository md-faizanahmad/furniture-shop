"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function StudyHero() {
  return (
    <section className="relative h-[90vh] w-full flex items-center overflow-hidden bg-stone-100">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000"
          fill
          priority
          className="object-cover opacity-80"
          alt="Architectural Home Office"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#F8F7F4] via-[#F8F7F4]/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.8em] block mb-8">
              The Private Library
            </span>
            <h1 className="text-stone-900 text-7xl md:text-[9rem] font-light tracking-tighter leading-[0.8] mb-8">
              Deep <br />
              <span className="italic font-serif text-stone-400">Thought.</span>
            </h1>
            <p className="text-lg text-stone-500 font-light leading-relaxed max-w-md">
              A collection of workspace essentials designed to fade into the
              background, allowing your best work to take center stage.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
