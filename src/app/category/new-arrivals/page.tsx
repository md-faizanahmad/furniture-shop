import { CollectionsClientUI } from "@/components/collection/CollectionsClientUI";
import { COLLECTIONS_DATA } from "@/lib/store-data";

export default function AllCollectionsPage() {
  return (
    <main className="bg-[#FAF9F6] min-h-screen pb-20">
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="container mx-auto">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-stone-400 mb-4 block">
              The 2026 Collection
            </span>
            <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-stone-900 leading-none">
              Artisanal{" "}
              <span className="italic font-serif text-stone-500">Living</span>
            </h1>
          </div>
        </div>
      </section>

      <CollectionsClientUI collections={COLLECTIONS_DATA} />
    </main>
  );
}
