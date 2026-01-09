import { BulbScience } from "@/components/lighting/BulbScience";
import { LightingGrid } from "@/components/lighting/LightingGrid";
import { LightingHero } from "@/components/lighting/LightingHero";
import { LightLayering } from "@/components/lighting/LightLayering";
import { ShadowStudio } from "@/components/lighting/ShadowStudio";

export default function LightingPage() {
  return (
    <main className="bg-stone-950 text-stone-100 min-h-screen">
      {/* Editorial Hero - Focus on Mood */}
      <LightingHero />

      {/* Interaction: How to Layer Light */}
      <LightLayering />

      {/* Product Discovery */}
      <LightingGrid />

      {/* Technical: CRI & Kelvin Explanation */}
      <div className="pb-20">
        <BulbScience />
      </div>
      <ShadowStudio />
    </main>
  );
}
