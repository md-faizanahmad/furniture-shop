"use client";

import { motion } from "framer-motion";
import { Droplets, ShieldCheck } from "lucide-react";
import Image from "next/image";

export function TextileLab() {
  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Macro Texture View */}
        <div className="relative aspect-square rounded-[3rem] overflow-hidden group">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full"
          >
            <Image
              fill
              sizes=""
              src="https://images.unsplash.com/photo-1519961655809-34fa156820ff"
              className="w-full h-full object-cover"
              alt="Close up of Bouclé Fabric"
            />
          </motion.div>
          <div className="absolute inset-0 bg-stone-900/10 mix-blend-overlay" />

          <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/80 backdrop-blur-md rounded-3xl border border-white">
            <h4 className="text-xl font-medium text-stone-900 mb-2">
              Heritage Bouclé
            </h4>
            <p className="text-xs text-stone-500 font-light leading-relaxed">
              Woven in Italy with 100% recycled wool fibers. Martindale tested
              for 60,000 cycles.
            </p>
          </div>
        </div>

        {/* Feature List */}
        <div className="space-y-12">
          <div className="space-y-4">
            <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.4em]">
              Engineered Weave
            </span>
            <h3 className="text-5xl font-light tracking-tighter text-stone-900">
              Life-Proof <br />
              <span className="italic font-serif text-stone-400">Luxury.</span>
            </h3>
          </div>

          <div className="space-y-8">
            <TextileFeature
              icon={Droplets}
              title="Nanotech Coating"
              desc="Liquids bead up and roll off before they can penetrate the fibers."
            />
            <TextileFeature
              icon={ShieldCheck}
              title="Pet Friendly"
              desc="High-density weave prevents snagging from claws and resists pilling."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

interface TextileFeatureProps {
  icon: React.ComponentType<{ className: string }>;
  title: string;
  desc: string;
}

function TextileFeature({ icon: Icon, title, desc }: TextileFeatureProps) {
  return (
    <div className="flex gap-6">
      <div className="h-12 w-12 bg-stone-100 rounded-2xl flex items-center justify-center shrink-0">
        <Icon className="h-5 w-5 text-stone-900" />
      </div>
      <div>
        <h5 className="text-sm font-bold uppercase tracking-widest text-stone-900 mb-2">
          {title}
        </h5>
        <p className="text-sm text-stone-500 font-light leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}
