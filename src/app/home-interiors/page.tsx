import InteriorClientUI from "@/components/home-Interior/InteriorClientUI";
import { INTERIOR_SCENES } from "@/lib/interiors-data";

// This is a Server Component by default
export default function HomeInteriorsPage() {
  return (
    <main className="bg-[#fcfcfc] min-h-screen overflow-x-hidden">
      {/* Passing the data as a prop to the Client UI */}
      <InteriorClientUI scenes={INTERIOR_SCENES} />
    </main>
  );
}
