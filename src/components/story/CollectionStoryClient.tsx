"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Story {
  tag: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export function CollectionStoryClient({
  story,
  index,
}: {
  story: Story;
  index: number;
}) {
  const containerRef = useRef(null);
  const isEven = index % 2 === 0;

  // Track scroll progress for this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth out the parallax movement
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [100, -100]), {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex items-center py-20 md:py-0"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* IMAGE COLUMN */}
          <div
            className={cn(
              "lg:col-span-7 relative",
              isEven ? "lg:order-1" : "lg:order-2",
            )}
          >
            <motion.div
              style={{ y }}
              className="relative aspect-4/5 md:aspect-16/10 lg:aspect-4/5 rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <Image
                src={story.image}
                alt={story.title}
                fill
                className="object-cover scale-110" // Extra scale for parallax room
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-6 py-2 rounded-full shadow-xl">
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-900">
                  {story.category}
                </span>
              </div>
            </motion.div>
          </div>

          {/* TEXT COLUMN */}
          <div
            className={cn(
              "lg:col-span-5 space-y-8",
              isEven ? "lg:order-2" : "lg:order-1",
            )}
          >
            <motion.div
              initial={{ opacity: 0, x: isEven ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-10%" }}
            >
              <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.4em] block mb-6">
                {story.tag}
              </span>

              <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-stone-900 leading-[0.9] mb-8">
                {story.title.split(" ").map((word, i) => (
                  <span
                    key={i}
                    className={cn(
                      i === 1 ? "italic font-serif text-stone-400" : "",
                    )}
                  >
                    {word}{" "}
                  </span>
                ))}
              </h2>

              <p className="text-lg md:text-xl text-stone-500 font-light leading-relaxed max-w-md">
                {story.description}
              </p>

              <div className="pt-10">
                <button className="group flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.3em] text-stone-900">
                  Read the story
                  <div className="h-px w-12 bg-stone-900 transition-all duration-500 group-hover:w-24" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
