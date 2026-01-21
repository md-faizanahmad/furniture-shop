"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Search, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-[#F8F7F4] flex items-center justify-center overflow-hidden px-6">
      {/* 1. BACKGROUND AMBIENCE */}
      <div className="absolute inset-0 z-0">
        {/* Abstract "Empty Room" Corner */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-stone-200/50 rounded-bl-[100%] blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-stone-200/30 rounded-tr-[100%] blur-3xl" />
      </div>

      <div className="container max-w-4xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 2. VISUAL METAPHOR */}
          <div className="order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-3/4 md:aspect-square bg-white rounded-[3rem] shadow-2xl flex items-center justify-center p-12 border border-stone-100"
            >
              {/* Animated Empty Chair Silhouette */}
              <div className="relative w-full h-full opacity-10">
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  className="w-full h-full stroke-stone-900 stroke-[0.5]"
                >
                  <path d="M30 80 L30 40 L70 40 L70 80 M30 60 L70 60" />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    d="M30 40 C 30 20, 70 20, 70 40"
                  />
                </svg>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-[12vw] lg:text-[8vw] font-light tracking-tighter text-stone-200 leading-none">
                  404
                </span>
                <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-stone-400 -mt-4">
                  Space Vacant
                </p>
              </div>
            </motion.div>
          </div>

          {/* 3. CONTENT & NAVIGATION */}
          <div className="order-1 lg:order-2 space-y-10 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-stone-900 leading-[0.9]">
                Lost in <br />
                <span className="italic font-serif text-stone-400">
                  Design.
                </span>
              </h1>
              <p className="text-stone-500 font-light text-lg max-w-sm mx-auto lg:mx-0">
                The piece you are looking for has been moved or is currently
                being curated. Let us guide you back home.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4 max-w-xs mx-auto lg:mx-0"
            >
              <Link href="/">
                <button className="w-full group flex items-center justify-between bg-stone-900 text-white px-8 py-5 rounded-2xl hover:bg-black transition-all">
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Return Home
                  </span>
                  <Home className="h-4 w-4 transition-transform group-hover:scale-110" />
                </button>
              </Link>

              <div className="grid grid-cols-2 gap-4">
                <Link href="/category/new-arrivals">
                  <button className="w-full flex items-center justify-center gap-2 bg-white border border-stone-200 text-stone-900 px-4 py-4 rounded-2xl hover:bg-stone-50 transition-all text-[9px] font-bold uppercase tracking-widest">
                    <Compass className="h-3 w-3" /> Explore
                  </button>
                </Link>
                <Link href="/search">
                  <button className="w-full flex items-center justify-center gap-2 bg-white border border-stone-200 text-stone-900 px-4 py-4 rounded-2xl hover:bg-stone-50 transition-all text-[9px] font-bold uppercase tracking-widest">
                    <Search className="h-3 w-3" /> Search
                  </button>
                </Link>
              </div>
            </motion.div>

            <Link href="/contact" className="inline-block pt-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-300 hover:text-stone-900 transition-colors cursor-pointer">
                Contact Concierge →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* 4. FOOTER DECOR */}
      <div className="absolute bottom-10 left-10 hidden md:block">
        <p className="text-[9px] font-bold uppercase tracking-[0.8em] text-stone-200">
          Lumen Studio — Established 2020
        </p>
      </div>
    </main>
  );
}
