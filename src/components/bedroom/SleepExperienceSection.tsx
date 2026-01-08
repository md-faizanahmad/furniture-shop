import { SleepExperienceUI } from "./SleepExperienceUI";

export default function SleepExperienceSection() {
  return (
    <section className="relative w-full bg-stone-950 py-24 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(40,40,40,0.3)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-20">
          <span className="text-stone-500 text-[10px] font-bold uppercase tracking-[0.6em] block mb-4">
            Technical Specification
          </span>
          <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-white leading-none">
            Anatomy of <br />
            <span className="italic font-serif text-stone-400">Rest.</span>
          </h2>
        </div>

        <SleepExperienceUI />
      </div>
    </section>
  );
}
