"use client";

import React, { useRef } from "react";
import Link from "next/link"; // Use Next.js Link
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface VideoHeroProps {
  videoUrl: string;
  posterUrl?: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string; // Change from onCtaClick to ctaHref
  className?: string;
}

export function VideoHero({
  videoUrl,
  posterUrl,
  title,
  subtitle,
  ctaText,
  ctaHref,
  className,
}: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section
      className={cn(
        "relative h-screen w-full flex items-center justify-center overflow-hidden bg-stone-900",
        className,
      )}
    >
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={posterUrl}
          className="h-full w-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white text-6xl md:text-8xl font-light tracking-tighter mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-stone-300 text-lg mb-8 max-w-xl mx-auto">
              {subtitle}
            </p>
          )}

          {ctaText && ctaHref && (
            <Link href={ctaHref}>
              <button className="px-10 py-5 bg-white text-stone-900 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-stone-100 transition-colors">
                {ctaText}
              </button>
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
