"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const LIGHTS = [
  {
    id: 1,
    name: "Orbital Pendant",
    type: "Ambient",
    price: "$1,200",
    img: "https://images.unsplash.com/photo-1486265421939-87ca109698e1",
  },
  {
    id: 2,
    name: "Flux Table Lamp",
    type: "Task",
    price: "$450",
    img: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=800",
  },
  {
    id: 3,
    name: "Halo Sconce",
    type: "Accent",
    price: "$680",
    img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800",
  },
];

export function LightingGrid() {
  return (
    <section className="container mx-auto px-6 py-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {LIGHTS.map((light, i) => (
          <motion.div
            key={light.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-4/5 rounded-[3rem] overflow-hidden mb-8 bg-stone-900">
              <Image
                src={light.img}
                alt={light.name}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                className="object-cover opacity-80 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-linear-to-t from-stone-950 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8">
                <span className="text-amber-200 text-[10px] font-bold uppercase tracking-widest px-3 py-1 border border-amber-200/30 rounded-full backdrop-blur-md">
                  {light.type}
                </span>
              </div>
            </div>
            <div className="flex justify-between items-end px-4">
              <div>
                <h4 className="text-2xl font-light text-white">{light.name}</h4>
                <p className="text-stone-500 text-xs uppercase tracking-widest mt-1">
                  Sculptural Glass
                </p>
              </div>
              <span className="text-xl font-serif italic text-amber-100/50">
                {light.price}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
