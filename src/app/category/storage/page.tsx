import { ConfiguratorClient } from "@/components/storage/ConfiguratorClient";
import { HardwareLab } from "@/components/storage/HardwareLab";
import { InteriorOrganizers } from "@/components/storage/InteriorOrganizers";
import { StorageComparison } from "@/components/storage/StorageComparison";
import { StorageGrid } from "@/components/storage/StorageGrid";
import { StorageHero } from "@/components/storage/StorageHero";

export default function StoragePage() {
  return (
    <main className="bg-white overflow-hidden">
      {/* Editorial Introduction */}
      <StorageHero />

      {/* Visualizing the "Invisible" — Modular Configurator */}
      <section className="bg-stone-50 py-24 md:py-40">
        <ConfiguratorClient />
      </section>

      {/* Collection Grid */}
      <StorageGrid />

      {/* Engineering Story — Hardware & Motion */}
      <section className="bg-stone-900 text-white rounded-[4rem] md:rounded-[6rem] mx-4 md:mx-8 mb-32 overflow-hidden">
        <HardwareLab />
      </section>
      <InteriorOrganizers />
      <StorageComparison />
    </main>
  );
}
