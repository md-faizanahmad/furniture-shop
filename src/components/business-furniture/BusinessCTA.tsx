"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function BusinessCTA() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      {/* 1. Container with Group Hover Scale */}
      <motion.div
        whileHover="hover" // Triggers "hover" variant in all children
        className="relative group overflow-hidden rounded-[2.5rem] md:rounded-[4rem] cursor-default"
      >
        {/* Background Image with subtle zoom */}
        <div className="absolute inset-0 z-0">
          <motion.div
            variants={{
              hover: { scale: 1.05 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full w-full"
          >
            <Image
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069"
              alt="Modern Office"
              fill
              className="object-cover"
            />
          </motion.div>
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/90 to-transparent opacity-90 transition-opacity group-hover:opacity-95" />
        </div>

        {/* 2. Content Area with Parallax-style Motion */}
        <div className="relative z-10 p-12 md:p-24 lg:p-32">
          <div className="max-w-2xl text-left">
            <motion.div
              variants={{
                hover: { x: 10 }, // Gently slides right on hover
              }}
              transition={{ duration: 0.5, ease: "circOut" }}
            >
              <motion.h2 className="text-4xl md:text-6xl font-light mb-6 tracking-tighter text-white leading-[1.1]">
                Ready to redesign your{" "}
                <span className="italic font-serif text-stone-300">
                  headquarters?
                </span>
              </motion.h2>

              <motion.p className="text-stone-300 mb-10 font-light text-lg md:text-xl max-w-lg leading-relaxed">
                Our project managers handle everything from spatial design to
                white-glove installation for teams of any size.
              </motion.p>

              {/* Buttons with Hover Interaction */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-stone-900 hover:bg-stone-200 rounded-full px-10 h-14 text-base font-medium transition-all group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                >
                  Book a Site Visit
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 bg-white/5 text-white backdrop-blur-md hover:bg-white/20 rounded-full px-10 h-14 text-base transition-colors"
                >
                  Our Process
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
