import { ModularSectional } from "@/components/sofa/ModularSectional";
import { SeatDepthGuide } from "@/components/sofa/SeatDepthGuide";
import { SofaGrid } from "@/components/sofa/SofaGrid";
import { SofaHero } from "@/components/sofa/SofaHero";
import { TextileLab } from "@/components/sofa/TextileLab";
import { UpholsteryConfigurator } from "@/components/sofa/UpholsteryConfigurator";

export default function SofaPage() {
  return (
    <main className="bg-white">
      {/* 1. Hero: Soft Minimalism */}
      <SofaHero />

      {/* 2. Interaction: Build your Sectional */}
      <section className="py-24 md:py-40 bg-stone-50">
        <ModularSectional />
      </section>

      {/* 3. Product Discovery */}
      <SofaGrid />
      <SeatDepthGuide />
      <UpholsteryConfigurator />
      {/* 4. Quality Story: The Textile Lab */}
      <section className="py-32 overflow-hidden">
        <TextileLab />
      </section>
    </main>
  );
}
