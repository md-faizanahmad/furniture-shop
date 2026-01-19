import { ComfortDiagnostic } from "@/components/dining/ComfortDiagnostic";
import { DiningClientUI } from "@/components/dining/DiningClientUI";
import { LightingVisualizer } from "@/components/dining/LightingVisualizer";
import { TableSizeGuide } from "@/components/dining/TableSizeGuide";
import { MaterialLab } from "@/components/living-room/MaterialLab";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dining & Culinary Spaces | LUMEN Studio",
  description:
    "Architectural dining solutions designed for hospitality and social connection.",
};

export default function DiningPage() {
  return (
    <main className="bg-white overflow-hidden">
      {/* 1. Dramatic Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center bg-stone-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1505409628601-edc9af17fda6?q=80&w=2070&auto=format&fit=crop"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            priority
            className="object-cover"
            alt="Minimalist Dining Environment"
          />
          <div className="absolute inset-0 bg-stone-900/10" />
        </div>

        <div className="relative z-10 text-center px-6">
          <span className="text-stone-500 text-[10px] font-bold uppercase tracking-[0.8em] block mb-8">
            Volume V — The Social Hub
          </span>
          <h1 className="text-stone-900 text-7xl md:text-[10rem] font-light tracking-tighter leading-[0.8] mb-12">
            The Art of <br />
            <span className="italic font-serif text-gray-100">Hosting.</span>
          </h1>
        </div>
      </section>

      <DiningClientUI />
      <TableSizeGuide />
      <LightingVisualizer />
      <ComfortDiagnostic />
      <MaterialLab />
    </main>
  );
}
