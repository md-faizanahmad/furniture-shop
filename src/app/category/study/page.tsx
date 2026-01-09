import { StudyGrid } from "@/components/study/StudyGrid";
import { StudyClientUI } from "@/components/study/StudyClientUI";
import { HapticExplorer } from "@/components/study/HapticExplorer";
import { BiometricCalculator } from "@/components/study/BiometricCalculator";
import { DynamicPivot } from "@/components/study/DynamicPivot";
import { CableBlueprint } from "@/components/study/CableBlueprint"; // Added for the complete engineering story
import { StudyHero } from "@/components/study/Study-Hero";

export default function StudyPage() {
  return (
    <main className="bg-[#F8F7F4] min-h-screen">
      {/* PHASE 1: INSPIRATION & DISCOVERY */}
      <section className="relative">
        <StudyHero />
      </section>

      {/* PHASE 2: COLLECTION CURATION */}
      <section className="py-20 md:py-32">
        <StudyGrid />
      </section>

      {/* PHASE 3: LIFESTYLE & UTILITY */}
      {/* StudyClientUI handles the "Focus Mode" and general desk layout */}
      <StudyClientUI />

      {/* PHASE 4: TACTILE STORYTELLING */}
      {/* High-impact material textures to build emotional connection */}
      <section className="my-20 md:my-40 overflow-hidden rounded-[3rem] md:rounded-[5rem] mx-4 md:mx-8">
        <HapticExplorer />
      </section>

      {/* PHASE 5: THE ENGINEERING LAB (Interactive Technicals) */}
      <div className="space-y-24 md:space-y-48 pb-32">
        {/* Biometric Calculator - Best placed after seeing products */}
        <div className="px-4 md:px-0">
          <BiometricCalculator />
        </div>

        {/* Dynamic Pivot - High motion seating diagnostic */}
        <DynamicPivot />

        {/* Internal Blueprint - The "Final Proof" of quality */}
        <CableBlueprint />
      </div>
    </main>
  );
}
