"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collection } from "@/lib/store-data";
import { ProductCard } from "./ProductCard";

export function CollectionsClientUI({
  collections,
}: {
  collections: Collection[];
}) {
  return (
    <div className="space-y-40 py-24">
      {collections.map((collection, index) => (
        <section key={collection.slug} className="container mx-auto px-9">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Collection Meta: Sticky Side Bar */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-8">
              <div className="space-y-4">
                <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.4em] block">
                  Series {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="text-5xl md:text-6xl font-light tracking-tighter text-stone-900 leading-[0.9]">
                  {collection.title.split(" & ").map((part, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && <br />}
                      {i > 0 ? (
                        <span className="italic font-serif text-stone-400">
                          {part}
                        </span>
                      ) : (
                        part
                      )}
                    </React.Fragment>
                  ))}
                </h2>
                <p className="text-stone-500 font-light leading-relaxed max-w-sm">
                  {collection.description}
                </p>
              </div>

              <Link href={`/collections/${collection.slug}`}>
                <Button
                  variant="link"
                  className="p-0 text-stone-900 font-bold group h-auto text-lg items-center"
                >
                  Explore {collection.itemCount} Items
                  <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </Link>
            </div>

            {/* Product List: Swipe on mobile, Grid on desktop */}
            {/* CHANGE LOGIC: 
                - flex overflow-x-auto snap-x for mobile swipe
                - lg:grid lg:grid-cols-2 for desktop grid 
            */}
            <div className="lg:col-span-8  flex flex-nowrap overflow-x-auto gap-8 pb-10 snap-x snap-mandatory no-scrollbar lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16 lg:overflow-visible lg:pb-0">
              {collection.products.map((product, pIndex) => (
                <div
                  key={product.id}
                  className="min-w-[80vw] sm:min-w-[45vw] lg:min-w-0 snap-center shrink-0"
                >
                  <ProductCard product={product} index={pIndex} />
                </div>
              ))}

              {/* View All Ghost Card - Included as the last item in the swipe list */}
              <div className="min-w-[80vw] sm:min-w-[45vw] lg:min-w-0 snap-center shrink-0">
                <Link href={`/category/new-arrivals`} className="group">
                  <div className="relative aspect-3/4 rounded-[2.5rem] border-2 border-dashed border-stone-200 flex flex-col items-center justify-center space-y-6 hover:border-stone-900 hover:bg-white transition-all duration-700 bg-stone-50/30 h-full">
                    <div className="h-16 w-16 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors duration-500 shadow-sm">
                      <ArrowUpRight className="h-6 w-6" />
                    </div>
                    <div className="text-center px-4">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 block mb-1">
                        Full Gallery
                      </span>
                      <span className="text-stone-900 font-serif italic text-xl">
                        View All {collection.title}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
