"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2 } from "lucide-react";

export function BusinessHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-[#080808] overflow-hidden">
      {/* 1. ARCHITECTURAL BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-0 top-0 w-full lg:w-[55%] h-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000"
            alt="Executive Boardroom"
            fill
            priority
            className="object-cover opacity-40 lg:opacity-100 grayscale hover:grayscale-0 transition-all duration-1000"
          />
          {/* Responsive Gradient Mask */}
          <div className="absolute inset-0 bg-linear-to-r from-[#080808] via-[#080808]/90 lg:via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* 2. CONTENT CONTAINER */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Industry Badge */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-stone-700" />
              <span className="text-stone-400 text-[10px] uppercase tracking-[0.4em] font-bold">
                Enterprise Infrastructure
              </span>
            </div>

            {/* B2B Typography: Sharp & Authoritative */}
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-semibold tracking-tighter text-white leading-[0.9] mb-8">
              Future <br />
              <span className="text-stone-500 font-light italic font-serif">
                Workspace.
              </span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <p className="text-stone-400 text-lg md:text-xl font-light leading-relaxed">
                We design and manufacture high-performance furniture systems for
                global enterprises, focused on ergonomic longevity and
                brand-aligned aesthetics.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-stone-200 rounded-none h-14 px-10 text-xs uppercase tracking-widest font-bold group"
                  >
                    Consultancy Request
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </Button>
                </div>

                {/* Secondary Data Point */}
                <div className="flex items-center gap-4 text-stone-500">
                  <Building2 className="h-5 w-5" />
                  <span className="text-xs uppercase tracking-widest border-l border-stone-800 pl-4">
                    500+ Corporate Headquarters Outfitted
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3. SUBTLE TEXTURE OVERLAY */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
    </section>
  );
}
