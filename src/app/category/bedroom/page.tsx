import { BedroomClientUI } from "@/components/bedroom/BedRoomClientUI";
import { SleepExperienceUI } from "@/components/bedroom/SleepExperienceUI";
import { MaterialLab } from "@/components/living-room/MaterialLab"; // Reuse your material lab
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Bedroom Sanctuary | LUMEN Studio",
  description:
    "Explore our 2026 collection of artisanal beds and restorative textures.",
};

export default function BedroomPage() {
  return (
    <main className="bg-[#FAF9F6] overflow-hidden ">
      {/* 1. Ethereal Hero Header */}
      <section className="relative h-screen w-full flex items-center justify-center bg-stone-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1560635921-171138a3955e?q=80&w=2070"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="object-cover opacity-80"
            alt="Serene Bedroom Environment"
          />
          <div className="absolute inset-0 bg-linear-to-b from-white/20 via-transparent to-[#FAF9F6]" />
        </div>

        <div className="relative z-10 text-center px-6">
          <span className="text-stone-500 text-[10px] uppercase tracking-[0.8em] font-bold block mb-8">
            Volume III — The Rest
          </span>
          <h1 className="text-stone-900 text-7xl md:text-[10rem] font-light tracking-tighter leading-[0.8] mb-12">
            Quiet <br />
            <span className="italic font-serif text-stone-400">Sanctuary.</span>
          </h1>
          <div className="h-20 w-px bg-stone-300 mx-auto animate-pulse" />
        </div>
      </section>

      {/* 2. Content Flow */}
      <BedroomClientUI />

      {/* 3. Specialized Material Focus (Hardwoods & Linens) */}
      <MaterialLab />
      <SleepExperienceUI />
    </main>
  );
}
