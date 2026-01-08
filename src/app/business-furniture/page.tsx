import { BUSINESS_CATEGORIES } from "@/lib/business-data";
import BusinessClientUI from "@/pages/business-furniture/BusinessClientUI";

export const metadata = {
  title: "Business Solutions | LUMEN STUDIO",
  description: "High-performance office furniture for modern enterprises.",
};

export default function BusinessFurniturePage() {
  return (
    <main className="bg-stone-50 min-h-screen">
      <BusinessClientUI categories={BUSINESS_CATEGORIES} />
    </main>
  );
}
