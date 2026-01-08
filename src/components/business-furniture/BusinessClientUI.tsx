"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  Users,
  ShieldCheck,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BusinessCategory } from "@/lib/business-data";
import { BusinessHero } from "./BusinessHero";
import { ProjectStats } from "./ProjectStats";
import { BusinessCTA } from "./BusinessCTA";

export default function BusinessClientUI({
  categories,
}: {
  categories: BusinessCategory[];
}) {
  return (
    <div className="pb-20 bg-white">
      {/* 1. Enhanced Professional Hero */}
      <BusinessHero />

      {/* 2. Trust Bar: Using a cleaner 'Paper' feel */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-y border-stone-100 py-12">
            {[
              { icon: Building2, label: "Space Planning" },
              { icon: Users, label: "Bulk Discounts" },
              { icon: ShieldCheck, label: "10yr Warranty" },
              { icon: Briefcase, label: "Project Management" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center space-y-4 group"
              >
                <div className="p-4 rounded-full bg-stone-50 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-500">
                  <item.icon className="h-6 w-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <ProjectStats />
      {/* 3. Category Grid: Subtle refinement to text and spacing */}
      <section className="py-24 bg-stone-50/50">
        <div className="container mx-auto px-4">
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-stone-900">
              Expertise by <span className="italic font-serif">Industry</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-4/5 overflow-hidden rounded-3xl cursor-pointer shadow-sm"
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-stone-900 via-stone-900/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                  <div className="translate-y-12 group-hover:translate-y-0 transition-transform duration-700 ease-[0.22, 1, 0.36, 1]">
                    <h3 className="text-3xl font-medium mb-4 tracking-tight">
                      {cat.title}
                    </h3>

                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      <p className="text-stone-300 text-sm font-light mb-8 leading-relaxed line-clamp-3">
                        {cat.description}
                      </p>

                      <Button
                        variant="outline"
                        className="border-white/30 bg-white/5 backdrop-blur-md text-white hover:bg-white hover:text-black rounded-full px-8 h-12 transition-all"
                      >
                        Explore Range <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <BusinessCTA />
    </div>
  );
}
