import { LivingRoomClientUI } from "@/components/living-room/LivingRoomClientUI";
import { MaterialLab } from "@/components/living-room/MaterialLab";
import { RoomConfigurator } from "@/components/living-room/RoomConfigurator";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Living Room | LUMEN Studio",
  description:
    "A storytelling journey through our 2026 Living Room collection.",
};

export default function LivingRoomPage() {
  return (
    <main className="bg-[#FAF9F6] overflow-hidden">
      {/* 1. CINEMATIC HERO - Fixed with 'fill' for better Next.js Optimization */}
      <section className="relative h-screen w-full flex items-center justify-center bg-stone-950">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000"
            fill // Changed from height/width to fill for hero sections
            priority // Loads this image first for better LCP
            className="object-cover opacity-60"
            alt="Living Room Atmosphere"
          />
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-[#FAF9F6]" />
        </div>

        <div className="relative z-10 text-center px-6">
          <span className="text-stone-400 text-[10px] uppercase tracking-[0.8em] font-bold block mb-8">
            Volume II — The Interior
          </span>
          <h1 className="text-white text-7xl md:text-[10rem] font-light tracking-tighter leading-[0.8] mb-12">
            Living <br />
            <span className="italic font-serif text-stone-500">Dialogue.</span>
          </h1>
          {/* Animated Scroll Indicator */}
          <div className="h-20 w-px bg-linear-to-b from-stone-500 to-transparent mx-auto animate-bounce" />
        </div>
      </section>

      {/* 2. THE STORYTELLING FLOW */}

      {/* Introduction to Materials - Dark Section for contrast */}
      <MaterialLab />

      {/* Main Product Story - Light Section with Parallax */}
      <div className="relative z-10 bg-[#FAF9F6]">
        <LivingRoomClientUI />
      </div>

      {/* Interactive Customization - High Engagement Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-stone-400">
            Personalize your space
          </h2>
        </div>
        <RoomConfigurator />
      </div>

      {/* 3. FINAL FOOTER SECTION (Optional but recommended) */}
      <section className="py-32 bg-stone-900 text-white text-center">
        <h3 className="text-4xl font-light italic font-serif mb-8">
          Ready to transform?
        </h3>
        <button className="px-12 py-4 border border-stone-700 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
          Contact a Designer
        </button>
      </section>
    </main>
  );
}
