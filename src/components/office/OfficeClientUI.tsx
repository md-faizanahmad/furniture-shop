"use client";

import Image from "next/image";
import { ProductCard } from "../collection/ProductCard";

export function OfficeClientUI() {
  return (
    <div className="py-32 space-y-64">
      {/* CHAPTER 1: THE ERGONOMIC CORE */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1703355685952-03ed19f70f51"
              fill
              className="object-cover"
              alt="Modern Desk System"
            />
            <div className="absolute inset-0 bg-stone-900/10" />
          </div>

          <div className="lg:col-span-5 space-y-8 order-1 lg:order-2">
            <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.4em]">
              Efficiency
            </span>
            <h2 className="text-6xl font-light tracking-tighter text-stone-900 leading-none">
              Command <br />{" "}
              <span className="italic font-serif text-stone-400">Systems.</span>
            </h2>
            <p className="text-xl text-stone-600 font-light leading-relaxed">
              Our workspace series is designed to eliminate friction. Integrated
              cable management and height-adjustable interfaces allow for
              uninterrupted deep work.
            </p>
          </div>
        </div>
      </section>

      {/* OFFICE PRODUCT SHOWCASE */}
      <section className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16 border-b border-stone-300 pb-8">
          <h3 className="text-4xl font-light tracking-tighter">
            Tools of the Trade
          </h3>
          <div className="text-right">
            <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
              Available for B2B Export
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <ProductCard
            index={0}
            product={{
              id: "o1",
              name: "Director's Monolith",
              price: "1,25,000",
              image:
                "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800",
              category: "Desks",
              material: "Black Walnut & Steel",
            }}
          />
          <ProductCard
            index={1}
            product={{
              id: "o2",
              name: "AeroTask Chair",
              price: "48,500",
              image:
                "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=800",
              category: "Seating",
              material: "Breathable Mesh",
            }}
          />
          <ProductCard
            index={2}
            product={{
              id: "o3",
              name: "Linear Library",
              price: "82,000",
              image:
                "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=800",
              category: "Storage",
              material: "Matte Aluminum",
            }}
          />
        </div>
      </section>
    </div>
  );
}
