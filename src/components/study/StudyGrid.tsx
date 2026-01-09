"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PRODUCTS = [
  {
    id: 1,
    name: "Monolith Desk",
    price: "₹2,400",
    img: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800",
    cat: "Desks",
  },
  {
    id: 2,
    name: "AeroTask Chair",
    price: "₹850",
    img: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=800",
    cat: "Seating",
  },
  {
    id: 3,
    name: "Linear Shelving",
    price: "₹1,100",
    img: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=800",
    cat: "Storage",
  },
];

export function StudyGrid() {
  return (
    <section className="container mx-auto px-6 py-32">
      <div className="flex justify-between items-end mb-16 border-b border-stone-200 pb-8">
        <h3 className="text-4xl font-light tracking-tighter">
          Tools of the Trade
        </h3>
        <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
          3 Collections
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {PRODUCTS.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-3/4 rounded-[2rem] overflow-hidden mb-6">
              <Image
                src={product.img}
                alt={product.name}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">
                  {product.cat}
                </p>
                <h4 className="text-xl font-medium text-stone-900">
                  {product.name}
                </h4>
              </div>
              <p className="text-lg font-serif italic text-stone-500">
                {product.price}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
