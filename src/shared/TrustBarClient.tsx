"use client";

import { motion } from "framer-motion";

type Logo = {
  name: string;
  src: string;
};

export function TrustBarClient({ logos }: { logos: Logo[] }) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
      {logos.map((logo, i) => (
        <motion.div
          key={logo.name}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
          className="h-6 w-32 relative"
        >
          {/* Using a span for demo; replace with <Image /> for real SVG files */}
          <span className="text-stone-900 font-bold uppercase tracking-tighter text-sm whitespace-nowrap">
            {logo.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
