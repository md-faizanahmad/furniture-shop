"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Utensils, Users, Wine, Maximize2 } from "lucide-react";
import Image from "next/image";

export function DiningClientUI() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="py-32 space-y-64">
      {/* FEATURE 1: DYNAMIC CAPACITY VISUALIZER */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5 space-y-8">
            <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.4em]">
              Adaptability
            </span>
            <h2 className="text-6xl font-light tracking-tighter text-stone-900 leading-none">
              The Gathering <br />{" "}
              <span className="italic font-serif text-stone-400">
                Monolith.
              </span>
            </h2>
            <p className="text-xl text-stone-500 font-light leading-relaxed">
              Our flagship tables feature a seamless butterfly extension
              mechanism. Transition from a 6-seat intimate dinner to a 10-seat
              celebration in seconds.
            </p>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group flex items-center gap-4 text-stone-900 font-bold uppercase text-[10px] tracking-[0.3em]"
            >
              <div className="p-4 bg-stone-900 text-white rounded-full transition-transform group-hover:scale-110">
                <Maximize2 className="h-4 w-4" />
              </div>
              {isExpanded ? "Collapse to 6 Seats" : "Expand to 10 Seats"}
            </button>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="relative aspect-16/10 bg-stone-100 rounded-[3rem] overflow-hidden shadow-2xl">
              <motion.div
                animate={{ scale: isExpanded ? 1.1 : 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  fill
                  sizes=""
                  src="https://images.unsplash.com/photo-1505409628601-edc9af17fda6?q=80&w=2070&auto=format&fit=crop"
                  className="w-full h-full object-cover grayscale-[0.2]"
                  alt="Dining Table Detail"
                />
              </motion.div>

              {/* Overlay Capacity Badge */}
              <div className="absolute bottom-10 left-10 flex gap-4">
                {[...Array(isExpanded ? 10 : 6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="h-2 w-2 rounded-full bg-white shadow-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 2: KITCHEN SYSTEMS GRID */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <KitchenCard
            title="Culinary Island"
            img="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1936&auto=format&fit=crop"
            icon={Utensils}
          />
          <KitchenCard
            title="Wine Cellars"
            img="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1936&auto=format&fit=crop"
            icon={Wine}
          />
          <div className="lg:col-span-2 bg-stone-900 rounded-[3rem] p-12 flex flex-col justify-between text-white">
            <Users className="h-8 w-8 text-stone-500" />
            <div className="space-y-4">
              <h3 className="text-4xl font-light tracking-tight italic font-serif">
                Social Ergonomics
              </h3>
              <p className="text-stone-400 font-light text-sm leading-relaxed">
                Counter heights and seating depths engineered for long-form
                conversation and fluid movement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

interface KitchenCardProps {
  title: string;
  img: string;
  icon: React.ElementType;
}

function KitchenCard({ title, img, icon: Icon }: KitchenCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="relative aspect-3/4 rounded-[3rem] overflow-hidden group"
    >
      <Image
        fill
        sizes=""
        src={img}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        alt={title}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
      <div className="absolute bottom-8 left-8 text-white">
        <Icon className="h-5 w-5 mb-4 text-stone-400" />
        <h4 className="text-xl font-light tracking-tight">{title}</h4>
      </div>
    </motion.div>
  );
}
