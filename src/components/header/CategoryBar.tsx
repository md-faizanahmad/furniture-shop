"use client";

import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";
import { motion } from "framer-motion";

export function CategoryBar() {
  return (
    <div className="w-full  border-b bg-white">
      <div className="container  mx-auto px-4 py-4">
        <div className="flex  lg:ms-25 items-center justify-start gap-8 overflow-x-auto no-scrollbar pb-2">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.name}
              href={`/category/${cat.name.toLowerCase().replace(/ /g, "-")}`}
              className="group flex flex-col items-center gap-2 min-w-fit"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-transparent group-hover:border-stone-900 transition-all shadow-sm"
              >
                <Image
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={cat.image}
                  alt={cat.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
              <span className="text-[11px] font-semibold uppercase tracking-tight text-stone-600 group-hover:text-stone-900 text-center whitespace-nowrap">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
