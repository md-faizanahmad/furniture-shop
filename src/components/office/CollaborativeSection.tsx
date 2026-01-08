import { CollaborativeUI } from "./CollaborativeUI";

export default function CollaborativeSection() {
  return (
    <section className="bg-white py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.6em] block mb-4">
            Phase II — Interaction
          </span>
          <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-stone-900 leading-none">
            Zones of <br />
            <span className="italic font-serif text-stone-400">
              Convergence.
            </span>
          </h2>
          <p className="mt-8 text-xl text-stone-500 font-light leading-relaxed">
            Breakout spaces designed for high-velocity ideation. Modular seating
            meets integrated digital interfaces to bridge the gap between
            physical and remote teams.
          </p>
        </div>

        <CollaborativeUI />
      </div>
    </section>
  );
}
