import { MattressClientUI } from "@/components/mattress/MattressClientUI";
import { SleepExperience } from "@/components/mattress/SleepExperience";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sleep Systems | LUMEN Studio",
  description:
    "Advanced orthopedic sleep systems engineered for deep recovery and thermal regulation.",
};

export default function MattressPage() {
  return (
    <main className="bg-stone-50 overflow-hidden">
      {/* 1. The Ethereal Hero */}
      <section className="relative h-screen w-full flex items-center justify-center bg-white">
        <div className="absolute inset-0 z-0 opacity-60">
          <Image
            src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2000"
            fill
            priority
            className="object-cover"
            alt="Macro shot of luxury mattress fabric"
          />
          <div className="absolute inset-0 bg-linear-to-b from-white/20 via-transparent to-stone-50" />
        </div>

        <div className="relative z-10 text-center px-6">
          <span>Scientific Restoration</span>
          <h1 className="text-stone-900 text-7xl md:text-[10rem] font-light tracking-tighter leading-[0.8] mb-12">
            Engineered <br />
            <span className="italic font-serif text-stone-400">Stillness.</span>
          </h1>
        </div>
      </section>

      <MattressClientUI />
      <SleepExperience />
    </main>
  );
}
