import { MaterialLab } from "@/components/living-room/MaterialLab";
import { AcousticShield } from "@/components/office/AcousticShield";
import CollaborativeSection from "@/components/office/CollaborativeSection";
import { OfficeClientUI } from "@/components/office/OfficeClientUI";
import { ProductivityCalculator } from "@/components/office/ProductivityCalculator";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Professional Environments | LUMEN Studio",
  description:
    "High-performance office furniture engineered for focus and executive presence.",
};

export default function OfficePage() {
  return (
    <main className="bg-[#F2F2F0] overflow-hidden">
      {/* 1. Industrial Power Hero */}
      <section className="relative h-screen w-full flex items-center justify-center bg-stone-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="object-cover opacity-40 grayscale-[0.5]"
            alt="Executive Office Environment"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-[#F2F2F0]" />
        </div>

        <div className="relative z-10 text-center px-6">
          <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.8em] block mb-8">
            Volume IV — The Workspace
          </span>
          <h1 className="text-white text-7xl md:text-[10rem] font-light tracking-tighter leading-[0.8] mb-12">
            Engineered <br />
            <span className="italic font-serif text-stone-500">Focus.</span>
          </h1>
          <div className="flex justify-center gap-12 text-stone-500 text-[10px] font-bold uppercase tracking-widest">
            <span>Ergonomics</span>
            <span>Sustainability</span>
            <span>Acoustics</span>
          </div>
        </div>
      </section>

      <OfficeClientUI />
      <ProductivityCalculator />
      <AcousticShield />

      <CollaborativeSection />
      <MaterialLab />
    </main>
  );
}
