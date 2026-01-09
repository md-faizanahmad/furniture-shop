"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InteriorScene } from "@/types/Interior";

export default function InteriorClientUI({
  scenes,
}: {
  scenes: InteriorScene[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Scroll-linked animations for the Hero
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <div ref={containerRef} className="relative">
      {/* --- STICKY HERO SECTION --- */}
      <section className=" h-screen flex items-center justify-center sticky top-0 overflow-hidden z-0">
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000"
            alt="Interior Hero"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="object-cover brightness-[0.65]"
          />
        </motion.div>

        <motion.div
          style={{ y: textY }}
          className="relative z-10 text-center text-white px-4"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] md:text-xs uppercase mb-6 font-bold tracking-[0.5em]"
          >
            The Art of Space
          </motion.p>
          <h1 className="text-5xl md:text-8xl font-light tracking-tighter leading-tight">
            Curated{" "}
            <span className="italic font-serif text-stone-400">Interiors</span>
          </h1>
        </motion.div>
      </section>

      {/* --- CONTENT SECTION (Overlays the Hero) --- */}
      <div className="relative z-10 bg-white shadow-[0_-50px_100px_rgba(0,0,0,0.1)]">
        {/* Intro Message */}
        <section className="container mx-auto px-4 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-light tracking-tighter mb-8 text-stone-900">
              Transforming your house into <br />
              <span className="italic font-serif text-stone-500 underline decoration-stone-200 underline-offset-8">
                a home.
              </span>
            </h2>
            <p className="text-stone-500 text-lg md:text-xl font-light leading-relaxed">
              Our bespoke design approach considers the rhythm of your life,
              selecting textures and silhouettes that resonate with your
              personal aesthetic.
            </p>
          </motion.div>
        </section>

        {/* Dynamic Scenes Grid */}
        <section className="pb-32">
          <div className="container mx-auto px-4">
            {scenes.map((scene, index) => (
              <SceneItem key={scene.id} scene={scene} index={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

// Sub-component for individual scenes
function SceneItem({ scene, index }: { scene: InteriorScene; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-12 lg:gap-24 items-center mb-32 md:mb-52`}
    >
      {/* Scene Image */}
      <div className="w-full lg:w-3/5 aspect-4/5 md:aspect-video relative rounded-3xl overflow-hidden group shadow-xl">
        <Image
          src={scene.image}
          alt={scene.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* Scene Details */}
      <div className="w-full lg:w-2/5 space-y-6">
        <div className="space-y-2">
          <span className="text-stone-400 font-bold text-[10px] uppercase tracking-widest block">
            {scene.theme}
          </span>
          <h3 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight">
            {scene.title}
          </h3>
        </div>

        <p className="text-stone-500 font-light text-lg leading-relaxed italic border-l-2 border-stone-100 pl-6">
          &quot;{scene.description}&quot;
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {scene.products.map((p) => (
            <span
              key={p}
              className="px-4 py-1.5 bg-stone-50 border border-stone-100 rounded-full text-[10px] font-bold uppercase text-stone-500"
            >
              {p}
            </span>
          ))}
        </div>

        <div className="pt-6">
          <Button
            variant="link"
            className="p-0 text-stone-900 font-bold group h-auto text-base"
          >
            Explore this Space
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-3" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
