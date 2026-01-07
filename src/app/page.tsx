import { Hero } from "@/components/hero/Hero";
import { DealsOfTheWeek } from "@/components/home/DealsOfTheWeek";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <FeaturedCategories />
      <DealsOfTheWeek />
      {/* Product sections will go here */}
    </div>
  );
}
