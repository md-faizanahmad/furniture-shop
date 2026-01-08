"use client";

import { cn } from "@/lib/utils";

export const StepIndicator = ({ currentStep }: { currentStep: number }) => {
  const steps = ["Service", "Details", "Review"];

  return (
    <div className="flex w-full bg-stone-100/50 p-1 rounded-full mb-8 border border-stone-200/50">
      {steps.map((label, i) => {
        const stepNum = i + 1;
        const isActive = currentStep === stepNum;

        return (
          <div key={label} className="flex-1 flex items-center relative">
            <div
              className={cn(
                "flex-1 text-center py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500",
                isActive
                  ? "bg-white text-stone-900 shadow-sm"
                  : "text-stone-400"
              )}
            >
              <span className="mr-2 opacity-50">{stepNum}</span>
              {label}
            </div>
          </div>
        );
      })}
    </div>
  );
};
