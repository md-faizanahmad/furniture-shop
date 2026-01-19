"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DEALS_PRODUCTS } from "@/lib/deals-data";

export function DealsOfTheWeek() {
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

        {/* Filtered Content Area with Mobile Swipe */}
        {/* CHANGE: Added flex-nowrap, overflow-x-auto, and snap-x utilities for mobile */}
        <div className="flex flex-nowrap overflow-x-auto gap-6 pb-8 snap-x snap-mandatory no-scrollbar md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-10 md:overflow-visible md:pb-0">
          <AnimatePresence mode="popLayout">
            {DEALS_PRODUCTS.filter(
              (p) => activeTab === "All" || p.category === activeTab,
            ).map((product) => (
              <motion.div
                key={`${activeTab}-${product.id}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                // CHANGE: Added min-w and snap-align for mobile cards
                className="group relative min-w-70 sm:min-w-0 snap-center shrink-0"
              >
                <div className="relative cursor-pointer aspect-3/4 overflow-hidden rounded-[2rem] bg-stone-100">
                  <Badge className="absolute top-4 left-4 z-30 bg-white/90 backdrop-blur-md text-stone-900 border-none shadow-sm rounded-full px-4 py-1 text-[10px] font-bold tracking-widest">
                    {product.discount}
                  </Badge>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 280px, 25vw"
                  />

                  {/* Action Buttons (Hidden on mobile touch by default, shows on group-hover) */}
                  <div className="absolute inset-x-0 bottom-0 z-20 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex gap-2 w-full bg-white/90 backdrop-blur-xl p-2 rounded-2xl shadow-xl border border-white/20">
                      <Button className="flex-1 rounded-xl bg-stone-900 text-white h-10 text-[10px] uppercase">
                        <ShoppingCart className="mr-2 h-3.5 w-3.5" /> Add
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-xl h-10 w-10"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

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
