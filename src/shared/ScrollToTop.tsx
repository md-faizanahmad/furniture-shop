"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Track scroll progress for the ring
  const { scrollYProgress, scrollY } = useScroll();

  // Smooth out the progress value for the SVG path
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Show button only after 400px of scrolling
    const unsubscribe = scrollY.on("change", (latest) => {
      if (latest > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
    return () => unsubscribe();
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-100 pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="pointer-events-auto relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-white text-stone-900 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-stone-100 group transition-colors hover:bg-stone-900 hover:text-white"
          >
            {/* SVG Progress Ring */}
            <svg className="absolute inset-0 h-full w-full -rotate-90">
              <circle
                cx="50%"
                cy="50%"
                r="48%"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-stone-100 opacity-20"
              />
              <motion.circle
                cx="50%"
                cy="50%"
                r="48%"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="1"
                style={{ pathLength: scaleX }}
                className="text-stone-900 group-hover:text-white transition-colors"
              />
            </svg>

            {/* Icon */}
            <ArrowUp className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1" />

            {/* Screen Reader Label */}
            <span className="sr-only">Scroll to Top</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
