"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const SOFAS = [
  {
    id: 1,
    name: "Cloud Sectional",
    price: "$4,200",
    tag: "Modular",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
  },
  {
    id: 2,
    name: "Nido Lounge",
    price: "$1,850",
    tag: "Accent",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
  },
  {
    id: 3,
    name: "Vera Sofa",
    price: "$3,100",
    tag: "Classic",
    img: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800",
  },
];

export function SofaGrid() {
  return (
    <section className="container mx-auto px-6 py-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
        {SOFAS.map((sofa, i) => (
          <motion.div
            key={sofa.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-4/5 rounded-[3rem] overflow-hidden mb-8 bg-stone-100">
              <Image
                src={sofa.img}
                alt={sofa.name}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest">
                  {sofa.tag}
                </span>
              </div>
            </div>
            <div className="flex justify-between items-end px-2">
              <h4 className="text-2xl font-light text-stone-900">
                {sofa.name}
              </h4>
              <span className="text-lg font-serif italic text-stone-400">
                {sofa.price}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
