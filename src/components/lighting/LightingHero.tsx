"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function LightingHero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with a subtle pulse animation */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2000"
          fill
          priority
          className="object-cover"
          alt="Architectural Lighting Design"
        />
      </motion.div>

      {/* Gradient Glow */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-stone-950" />

      <div className="relative z-10 text-center px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-amber-200/50 text-[10px] font-bold uppercase tracking-[1em] block mb-8"
        >
          Volume VI — Luminance
        </motion.span>
        <h1 className="text-white text-7xl md:text-[12rem] font-light tracking-tighter leading-[0.8]">
          Capture <br />
          <span className="italic font-serif text-amber-100/80">The Glow.</span>
        </h1>
      </div>

      {/* Decorative Light Ray */}
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-amber-200/0 via-amber-200/20 to-transparent"
      />
    </section>
  );
}
