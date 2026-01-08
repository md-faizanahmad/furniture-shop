"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { ServiceType } from "@/lib/booking";

interface ServiceCardProps {
  id: ServiceType;
  label: string;
  icon: LucideIcon;
  description?: string;
  isSelected: boolean;
  onClick: (id: ServiceType) => void;
}

export const ServiceCard = ({
  id,
  label,
  icon: Icon,
  description,
  isSelected,
  onClick,
}: ServiceCardProps) => {
  return (
    <motion.button
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(id)}
      className={cn(
        "relative flex flex-col items-start p-6 rounded-[2rem] border-2 transition-all duration-300 text-left w-full group",
        isSelected
          ? "border-stone-900 bg-stone-900 text-white shadow-xl shadow-stone-900/10"
          : "border-stone-100 bg-stone-50/50 hover:bg-white hover:border-stone-200"
      )}
    >
      {/* 1. SELECTION INDICATOR */}
      <div
        className={cn(
          "absolute top-4 right-4 h-6 w-6 rounded-full flex items-center justify-center transition-all duration-500",
          isSelected ? "bg-white scale-100" : "bg-stone-200 scale-0"
        )}
      >
        <Check className="h-3 w-3 text-stone-900 stroke-[3px]" />
      </div>

      {/* 2. ICON BOX */}
      <div
        className={cn(
          "p-3 rounded-2xl mb-4 transition-colors duration-300",
          isSelected
            ? "bg-white/10 text-white"
            : "bg-white text-stone-900 shadow-sm"
        )}
      >
        <Icon className="h-6 w-6 stroke-[1.5px]" />
      </div>

      {/* 3. CONTENT */}
      <div className="space-y-1">
        <h4
          className={cn(
            "font-bold uppercase tracking-[0.2em] text-[10px] transition-colors",
            isSelected ? "text-white" : "text-stone-900"
          )}
        >
          {label}
        </h4>

        {description && (
          <p
            className={cn(
              "text-xs font-light leading-relaxed transition-colors",
              isSelected ? "text-stone-400" : "text-stone-500"
            )}
          >
            {description}
          </p>
        )}
      </div>

      {/* 4. ACTIVE GLOW (Internal) */}
      {isSelected && (
        <motion.div
          layoutId="activeGlow"
          className="absolute inset-0 rounded-[2rem] ring-2 ring-stone-900 ring-offset-2 pointer-events-none"
        />
      )}
    </motion.button>
  );
};
