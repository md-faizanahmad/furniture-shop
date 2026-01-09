"use client";

import React, { useState } from "react"; // 1. Added useState
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DEALS_PRODUCTS } from "@/lib/deals-data";

export function DealsOfTheWeek() {
  // 2. State to manage active category
  const [activeTab, setActiveTab] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(DEALS_PRODUCTS.map((p) => p.category))),
  ];

  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 md:mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-light tracking-tighter text-stone-900 mb-4">
              Weekly{" "}
              <span className="italic font-serif text-stone-500">
                Privileges
              </span>
            </h2>
          </div>

          {/* 3. Controlled Tabs Component */}
          <Tabs
            defaultValue="All"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full lg:w-fit"
          >
            <TabsList className="flex w-full overflow-x-auto no-scrollbar justify-start bg-stone-100/80 p-1 rounded-full border border-stone-200 h-auto">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className="rounded-full cursor-pointer px-6 py-2 text-xs uppercase tracking-widest data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all whitespace-nowrap"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* 4. Filtered Content Area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          <AnimatePresence mode="popLayout">
            {DEALS_PRODUCTS.filter(
              (p) => activeTab === "All" || p.category === activeTab
            ).map((product) => (
              <motion.div
                key={`${activeTab}-${product.id}`} // Unique key per tab for better animation
                layout
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                className="group relative"
              >
                {/* ... Image Container (Same as your previous code) ... */}
                <div className="relative cursor-pointer aspect-3/4 overflow-hidden rounded-[2rem] bg-stone-100">
                  <Badge className="absolute top-4 left-4 z-30 bg-white/90 backdrop-blur-md text-stone-900 border-none shadow-sm rounded-full px-4 py-1 text-[10px] font-bold tracking-widest">
                    {product.discount}
                  </Badge>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 z-20 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
                    <div className="flex gap-2 w-full bg-white/90 backdrop-blur-xl p-2 rounded-2xl shadow-xl border border-white/20">
                      <Button className="flex-1 cursor-pointer rounded-xl bg-stone-900 text-white hover:bg-stone-800 h-10 md:h-11 text-[10px] md:text-xs uppercase tracking-tighter">
                        <ShoppingCart className="mr-2 h-3.5 w-3.5 md:h-4 md:w-4" />{" "}
                        Add to Cart
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-xl cursor-pointer h-10 w-10 md:h-11 md:w-11 border-stone-200 hover:bg-stone-100"
                      >
                        <Eye className="h-4 w-4 text-stone-700" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Info Area */}
                <div className="mt-6 flex justify-between items-start px-1">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold mb-1">
                      {product.category}
                    </p>
                    <h4 className="text-stone-900 font-medium text-lg tracking-tight">
                      {product.name}
                    </h4>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-stone-900 font-bold">
                        ₹{product.price}
                      </span>
                      <span className="text-stone-400 line-through text-sm font-light">
                        ₹{product.originalPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
