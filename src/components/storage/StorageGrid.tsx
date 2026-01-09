"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const STORAGE_PRODUCTS = [
  {
    id: 1,
    name: "Linear Sideboard",
    price: "₹3,200",
    img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800",
    span: "md:col-span-2",
    tag: "Dining",
  },
  {
    id: 2,
    name: "Core Credenza",
    price: "₹1,850",
    img: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800",
    span: "md:col-span-1",
    tag: "Office",
  },
  {
    id: 3,
    name: "Monolith Wardrobe",
    price: "₹5,400",
    img: "https://images.unsplash.com/photo-1672137233327-37b0c1049e77",
    span: "md:col-span-1",
    tag: "Bedroom",
  },
  {
    id: 4,
    name: "Shift Shelving",
    price: "₹950",
    img: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=800",
    span: "md:col-span-2",
    tag: "Living",
  },
];

export function StorageGrid() {
  return (
    <section className="container mx-auto px-6 py-32">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="space-y-4">
          <h3 className="text-4xl font-light tracking-tighter">
            Geometric Order
          </h3>
          <p className="text-stone-500 text-sm font-light max-w-xs">
            Precision-milled units designed to integrate seamlessly into modern
            interiors.
          </p>
        </div>
        <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest text-stone-400">
          <span>Filter:</span>
          <button className="text-stone-900 border-b border-stone-900">
            All
          </button>
          <button className="hover:text-stone-900 transition-colors">
            Sideboards
          </button>
          <button className="hover:text-stone-900 transition-colors">
            Shelving
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {STORAGE_PRODUCTS.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className={cn("group cursor-pointer", item.span)}
          >
            <div className="relative aspect-16/10 md:aspect-auto md:h-125 rounded-[2.5rem] overflow-hidden mb-6 bg-stone-100">
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105 group-hover:rotate-1"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest text-stone-900">
                  {item.tag}
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center px-2">
              <div>
                <h4 className="text-xl font-medium text-stone-900">
                  {item.name}
                </h4>
                <p className="text-sm text-stone-400 font-light">
                  Italian Smoked Oak
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-serif italic text-stone-500">
                  {item.price}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Utility to merge classes
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
