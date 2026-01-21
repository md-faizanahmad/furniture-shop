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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [60, -60]), {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div
      ref={containerRef}
      className="relative flex items-center py-12 md:py-24 lg:min-h-[70vh] overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          {/* IMAGE COLUMN - Compact Heights */}
          <div
            className={cn(
              "lg:col-span-7 relative",
              isEven ? "lg:order-1" : "lg:order-2",
            )}
          >
            <motion.div
              style={{ y }}
              className="relative aspect-3/2 md:aspect-video lg:aspect-16/10 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl"
            >
              <Image
                src={story.image}
                alt={story.title}
                fill
                className="object-cover scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
              />
              <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-white/90 backdrop-blur-md px-4 py-1.5 md:px-6 md:py-2 rounded-full shadow-sm">
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-stone-900">
                  {story.category}
                </span>
              </div>
            </motion.div>
          </div>

          {/* TEXT COLUMN */}
          <div
            className={cn(
              "lg:col-span-5 space-y-6 md:space-y-8",
              isEven ? "lg:order-2" : "lg:order-1",
            )}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-10%" }}
            >
              <span className="text-stone-400 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] block mb-4 md:mb-6">
                {story.tag}
              </span>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tighter text-stone-900 leading-[1.1] mb-6">
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

              <p className="text-base md:text-lg text-stone-500 font-light leading-relaxed max-w-md">
                {story.description}
              </p>

              <div className="pt-6 md:pt-10">
                <button className="group flex items-center gap-4 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-stone-900">
                  Read the story
                  <div className="h-px w-8 md:w-12 bg-stone-900 transition-all duration-500 group-hover:w-20" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
