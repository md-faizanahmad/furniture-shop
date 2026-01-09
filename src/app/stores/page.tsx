"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";

const STORES = [
  {
    id: 1,
    city: "New York",
    neighborhood: "SoHo District",
    address: "122 Greene Street, NY 10012",
    image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee",
    hours: "10:00 AM — 8:00 PM",
    phone: "+1 (212) 555-0198",
  },
  {
    id: 2,
    city: "London",
    neighborhood: "Mayfair",
    address: "45 Savile Row, W1S 3QG",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
    hours: "11:00 AM — 7:00 PM",
    phone: "+44 20 7946 0122",
  },
];

export default function StorePage() {
  const [activeStore, setActiveStore] = useState(STORES[0]);

  return (
    <main className="bg-[#F8F7F4] min-h-screen pt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:h-[80vh] items-stretch">
          {/* List Side */}
          <div className="space-y-12 overflow-y-auto pr-4 no-scrollbar">
            <header className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-stone-400">
                Our Ateliers
              </span>
              <h1 className="text-6xl font-light tracking-tighter">
                Global <br />
                <span className="italic font-serif text-stone-400">
                  Presence.
                </span>
              </h1>
            </header>

            <div className="space-y-6">
              {STORES.map((store) => (
                <motion.div
                  key={store.id}
                  onClick={() => setActiveStore(store)}
                  className={`p-8 rounded-[2rem] cursor-pointer transition-all duration-500 border-2 ${
                    activeStore.id === store.id
                      ? "bg-white border-stone-900 shadow-xl"
                      : "bg-transparent border-transparent hover:bg-stone-100"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-medium">{store.city}</h3>
                      <p className="text-stone-400 text-sm">
                        {store.neighborhood}
                      </p>
                    </div>
                    <ArrowRight
                      className={`h-5 w-5 transition-transform ${
                        activeStore.id === store.id
                          ? "rotate-0"
                          : "-rotate-45 opacity-20"
                      }`}
                    />
                  </div>

                  {activeStore.id === store.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-8 pt-8 border-t border-stone-100 space-y-4 text-stone-600"
                    >
                      <div className="flex items-center gap-3 text-xs">
                        <MapPin className="h-4 w-4" /> {store.address}
                      </div>
                      <div className="flex items-center gap-3 text-xs">
                        <Clock className="h-4 w-4" /> {store.hours}
                      </div>
                      <div className="flex items-center gap-3 text-xs">
                        <Phone className="h-4 w-4" /> {store.phone}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image/Map Side */}
          <div className="relative rounded-[3rem] overflow-hidden hidden lg:block bg-stone-200">
            <Image
              src={activeStore.image}
              fill
              className="object-cover transition-all duration-1000"
              alt={activeStore.city}
            />
            <div className="absolute inset-0 bg-stone-900/10" />
            <div className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl">
              <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">
                Current Selection
              </p>
              <p className="text-sm font-medium">
                Lumen {activeStore.city} — Gallery
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
