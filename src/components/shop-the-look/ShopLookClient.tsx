"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
type Hotspot = {
  id: string;
  x: number;
  y: number;
  name: string;
  price: string;
  href: string;
};

type ShopLookData = {
  image: string;
  title: string;
  hotspots: Hotspot[];
};
export function ShopLookClient({ data }: { data: ShopLookData }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="relative aspect-16/10 md:aspect-21/9 rounded-[3rem] overflow-hidden shadow-2xl group">
      <Image
        src={data.image}
        alt={data.title}
        fill
        className="object-cover transition-transform duration-1000 group-hover:scale-105"
      />

      {data.hotspots.map((spot) => (
        <div
          key={spot.id}
          className="absolute"
          style={{ top: `${spot.y}%`, left: `${spot.x}%` }}
        >
          <button
            onClick={() => setActiveId(activeId === spot.id ? null : spot.id)}
            className="relative flex items-center justify-center h-8 w-8 bg-white/90 backdrop-blur-md rounded-full shadow-lg transition-transform hover:scale-110 active:scale-90"
          >
            <Plus
              className={cn(
                "h-4 w-4 transition-transform duration-300",
                activeId === spot.id && "rotate-45",
              )}
            />
            <span className="absolute inset-0 rounded-full bg-white animate-ping opacity-20" />
          </button>

          <AnimatePresence>
            {activeId === spot.id && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-2xl z-50"
              >
                <p className="text-[10px] font-bold uppercase text-stone-400 mb-1">
                  {spot.name}
                </p>
                <p className="text-sm font-medium text-stone-900 mb-3">
                  {spot.price}
                </p>
                <Link
                  href={spot.href}
                  className="flex items-center justify-between text-[9px] font-bold uppercase tracking-widest text-stone-900 border-t border-stone-100 pt-2"
                >
                  View Piece <ArrowRight className="h-3 w-3" />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
