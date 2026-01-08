"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ProductCard } from "../collection/ProductCard";

export function BedroomClientUI() {
  return (
    <div className="py-32 space-y-64">
      {/* CHAPTER 1: THE FOUNDATION */}
      <section className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="order-2 lg:order-1 space-y-10">
          <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.4em]">
            Structure
          </span>
          <h2 className="text-6xl font-light tracking-tighter text-stone-900 leading-none">
            The Sleep <br />{" "}
            <span className="italic font-serif text-stone-400">
              Foundation.
            </span>
          </h2>
          <p className="text-xl text-stone-500 font-light leading-relaxed max-w-lg">
            Our bed frames are crafted from solid Indian Teak and Sheesham,
            engineered to provide a lifetime of silent, sturdy support.
          </p>
          <div className="pt-6 border-t border-stone-200 w-fit">
            <p className="text-[10px] font-bold uppercase tracking-widest text-stone-900">
              Featured: The Nizam King
            </p>
          </div>
        </div>

        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-2 relative aspect-square rounded-[4rem] overflow-hidden"
        >
          <Image
            fill
            src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1200"
            className="w-full h-full object-cover"
            alt="Solid Wood Bed Frame"
          />
        </motion.div>
      </section>

      {/* GRID: RESTORATIVE ELEMENTS */}
      <section className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16 border-b border-stone-200 pb-8">
          <h3 className="text-4xl font-light tracking-tighter">
            The Essentials
          </h3>
          <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 text-right">
            ₹ Price in INR
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <ProductCard
            index={0}
            product={{
              id: "b1",
              name: "Nizam King Bed",
              price: "1,10,000",
              image:
                "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800",
              category: "Beds",
              material: "Teak & Cane",
            }}
          />
          <ProductCard
            index={1}
            product={{
              id: "b2",
              name: "Opal Nightstand",
              price: "22,500",
              image:
                "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=800",
              category: "Storage",
              material: "Oak Wood",
            }}
          />
          <ProductCard
            index={2}
            product={{
              id: "b3",
              name: "Silk Cloud Duvet",
              price: "12,900",
              image:
                "https://images.unsplash.com/photo-1584132905271-512c958d674a?q=80&w=800",
              category: "Furnishing",
              material: "Mulberry Silk",
            }}
          />
        </div>
      </section>
    </div>
  );
}
