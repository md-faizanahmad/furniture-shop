"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag, Heart, Eye } from "lucide-react";
import { Product } from "@/lib/store-data";

export function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative"
    >
      {/* Image Container */}
      <div className="relative  aspect-3/4 overflow-hidden rounded-[2.5rem] bg-stone-100 shadow-sm">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="eager"
        />

        {/* Hover Actions Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px] flex items-center justify-center gap-3">
          <Link href={`/product/${product.id}`}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white rounded-full text-stone-900 shadow-xl hover:bg-stone-50"
              title="Quick View"
            >
              <Eye className="h-5 w-5" />
            </motion.button>
          </Link>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-stone-900 rounded-full text-white shadow-xl hover:bg-black"
            title="Add to Cart"
          >
            <ShoppingBag className="h-5 w-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-white rounded-full text-rose-500 shadow-xl hover:bg-rose-50"
            title="Add to Wishlist"
          >
            <Heart className="h-5 w-5 fill-current" />
          </motion.button>
        </div>
      </div>

      {/* Info Area */}
      <div className="mt-6 px-2 flex justify-between items-start">
        <div className="max-w-[70%]">
          <p className="text-[9px] uppercase tracking-[0.2em] text-stone-400 font-bold mb-1">
            {product.material}
          </p>
          <h4 className="text-lg font-light text-stone-900 leading-tight group-hover:text-stone-600 transition-colors">
            {product.name}
          </h4>
        </div>
        <span className="text-base font-medium text-stone-900">
          ₹{product.price}
        </span>
      </div>
    </motion.div>
  );
}
