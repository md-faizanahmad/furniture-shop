"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CLIENT_LOGOS } from "@/lib/logos-data";

export function LogoMarquee() {
  // We double the array to create a seamless infinite loop
  const duplicatedLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="py-20 bg-white border-b border-stone-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold text-center lg:text-left">
          Trusted by Industry Leaders
        </p>
      </div>

      <div className="relative flex w-full">
        {/* Gradients to fade logos in/out at the edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white to-transparent z-10" />

        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30, // Adjust speed here (higher = slower)
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex items-center justify-center px-12 md:px-20"
            >
              <div className="relative h-8 md:h-12 w-24 md:w-36 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default">
                <Image
                  src={logo.url}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
