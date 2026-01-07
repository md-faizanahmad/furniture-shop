"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { DEALS_PRODUCTS } from "@/lib/deals-data";
import { ShoppingCart, Eye } from "lucide-react";

export function DealsOfTheWeek() {
  const categories = [
    "All",
    ...Array.from(new Set(DEALS_PRODUCTS.map((p) => p.category))),
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light tracking-tighter text-stone-900 mb-2">
            Deals of the <span className="italic font-serif">Week</span>
          </h2>
          <p className="text-stone-500 font-light">
            Handpicked luxury pieces at exceptional prices.
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="bg-stone-100/50 p-1 rounded-full border">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className="rounded-full px-6 data-[state=active]:bg-white data-[state=active]:shadow-sm"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((cat) => (
            <TabsContent key={cat} value={cat} className="mt-0 outline-none">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <AnimatePresence mode="popLayout">
                  {DEALS_PRODUCTS.filter(
                    (p) => cat === "All" || p.category === cat
                  ).map((product) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className="group relative"
                    >
                      <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-stone-100">
                        {/* Discount Badge */}
                        <Badge className="absolute top-4 left-4 z-20 bg-stone-900 hover:bg-stone-900 text-white rounded-full px-3 py-1 font-medium border-none">
                          {product.discount}
                        </Badge>

                        {/* Product Image */}
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Quick Actions Overlay */}
                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                          <button className="bg-white p-3 rounded-full shadow-lg hover:bg-stone-900 hover:text-white transition-colors">
                            <ShoppingCart className="h-5 w-5" />
                          </button>
                          <button className="bg-white p-3 rounded-full shadow-lg hover:bg-stone-900 hover:text-white transition-colors">
                            <Eye className="h-5 w-5" />
                          </button>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="mt-4 space-y-1">
                        <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">
                          {product.category}
                        </p>
                        <h4 className="text-stone-900 font-medium">
                          {product.name}
                        </h4>
                        <div className="flex items-center gap-2">
                          <span className="text-stone-900 font-bold">
                            ${product.price}
                          </span>
                          <span className="text-stone-400 line-through text-sm">
                            ${product.originalPrice}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
