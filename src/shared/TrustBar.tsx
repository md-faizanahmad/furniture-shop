import { TrustBarClient } from "./TrustBarClient";

const LOGOS = [
  { name: "Architectural Digest", src: "/logos/ad.svg" },
  { name: "Vogue Living", src: "/logos/vogue.svg" },
  { name: "Elle Decor", src: "/logos/elle.svg" },
  { name: "Wallpaper*", src: "/logos/wallpaper.svg" },
];

export default function TrustBar() {
  return (
    <section className="py-20 bg-stone-50 border-y border-stone-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-2">
              Global Authority
            </span>
            <p className="text-stone-900 font-serif italic text-xl">
              Recognized by industry leaders.
            </p>
          </div>
          <TrustBarClient logos={LOGOS} />
        </div>
      </div>
    </section>
  );
}
