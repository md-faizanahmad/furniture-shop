"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, LayoutGrid } from "lucide-react";

export function ConfiguratorClient() {
  const [modules, setModules] = useState([1, 2]); // Initial two modules

  const addModule = () =>
    modules.length < 4 && setModules([...modules, Date.now()]);
  const removeModule = () =>
    modules.length > 1 && setModules(modules.slice(0, -1));

  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        {/* Control Panel */}
        <div className="lg:col-span-5 space-y-10">
          <div className="space-y-4">
            <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.4em]">
              Adaptability
            </span>
            <h2 className="text-5xl md:text-6xl font-light tracking-tighter text-stone-900 leading-none">
              Infinite <br />{" "}
              <span className="italic font-serif text-stone-400">
                Composition.
              </span>
            </h2>
            <p className="text-stone-500 font-light text-lg">
              Our storage systems are built on a 40cm architectural grid. Scale
              your requirements from a single credenza to a full-wall library.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center bg-white rounded-full p-2 border border-stone-200 shadow-sm">
              <button
                onClick={removeModule}
                className="p-4 hover:bg-stone-50 rounded-full transition-colors"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-12 text-center font-mono font-bold text-lg">
                {modules.length}
              </span>
              <button
                onClick={addModule}
                className="p-4 hover:bg-stone-50 rounded-full transition-colors"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
              Modules Selected
            </p>
          </div>
        </div>

        {/* Visualizer Canvas */}
        <div className="lg:col-span-7 flex items-center justify-center min-h-125 bg-stone-100/50 rounded-[4rem] border-2 border-dashed border-stone-200 p-8">
          <div className="flex gap-4">
            <AnimatePresence mode="popLayout">
              {modules.map((id) => (
                <motion.div
                  key={id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, x: 50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: -50 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="w-24 md:w-32 lg:w-40 aspect-3/5 bg-white border border-stone-200 rounded-2xl shadow-xl flex flex-col p-4 justify-between"
                >
                  <div className="h-1/3 border-b border-stone-100 flex items-center justify-center">
                    <LayoutGrid className="text-stone-200 h-4 w-4" />
                  </div>
                  <div className="h-1/3 border-b border-stone-100" />
                  <div className="h-4 w-1/2 bg-stone-100 rounded-full" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
