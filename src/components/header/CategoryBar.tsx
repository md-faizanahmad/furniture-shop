"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CATEGORIES } from "@/lib/categories";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

export function CategoryBar() {
  const pathname = usePathname();

  // Animation variants for a subtle staggered entrance
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };

  return (
    <nav className="w-full border-b bg-white/70 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-5 gap-y-6 gap-x-2 sm:grid-cols-5 md:grid-cols-8 lg:flex lg:items-center lg:justify-center lg:gap-10"
        >
          {CATEGORIES.map((cat) => {
            const href = `/category/${cat.name
              .toLowerCase()
              .replace(/ /g, "-")}`;
            const isActive = pathname === href;

            return (
              <motion.div key={cat.name} variants={itemVariants}>
                <Link
                  href={href}
                  className="group flex flex-col items-center gap-2 outline-none"
                >
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={cn(
                        "relative h-15 w-15 sm:h-13 sm:w-13 overflow-hidden rounded-full border transition-all duration-300 shadow-sm",
                        isActive
                          ? "border-stone-900 ring-2 ring-stone-100"
                          : "border-transparent group-hover:border-stone-200"
                      )}
                    >
                      <Image
                        fill
                        priority
                        sizes="48px"
                        src={cat.image}
                        alt={cat.name}
                        className={cn(
                          "object-cover transition-all duration-700",
                          isActive
                            ? "scale-110 grayscale-0"
                            : "grayscale-[0.6] group-hover:grayscale-0 group-hover:scale-110"
                        )}
                      />
                    </motion.div>

                    {/* Compact Indicator Dot */}
                    {isActive && (
                      <motion.div
                        layoutId="activeCategoryDot"
                        className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-stone-900"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </div>

                  <span
                    className={cn(
                      "text-[8px] md:text-[9px] font-bold uppercase tracking-tighter transition-colors duration-300 text-center",
                      isActive
                        ? "text-stone-900"
                        : "text-stone-700 group-hover:text-stone-600"
                    )}
                  >
                    {cat.name.split(" ")[0]}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </nav>
  );
}
