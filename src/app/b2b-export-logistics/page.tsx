import { ExportClientUI } from "@/components/b2b/ExportClientUI";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Export & Logistics | LUMEN B2B",
  description:
    "Worldwide fulfillment for large-scale office, hospitality, and residential projects.",
};

export default function ExportPage() {
  return (
    <main className="bg-white overflow-hidden">
      {/* 1. Logistics Hero */}
      <section className="relative h-[80vh] w-full flex items-center bg-stone-900">
        <div className="absolute inset-0 z-0 opacity-30">
          {/* Using a subtle blueprint/grid pattern instead of a photo */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-20" />
          <div className="absolute inset-0 bg-linear-to-r from-stone-900 via-stone-900/40 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-8">
            <span className="text-stone-500 text-[10px] font-bold uppercase tracking-[0.8em] block">
              Supply Chain Excellence
            </span>
            <h1 className="text-white text-7xl md:text-[9rem] font-light tracking-tighter leading-[0.8]">
              Beyond <br />
              <span className="italic font-serif text-stone-500">Borders.</span>
            </h1>
            <p className="text-xl text-stone-400 font-light leading-relaxed max-w-xl">
              From our manufacturing hubs in India to project sites across EMEA
              and North America. Reliable, trackable, and duty-optimized
              fulfillment.
            </p>
          </div>
        </div>
      </section>

      <ExportClientUI />
    </main>
  );
}
