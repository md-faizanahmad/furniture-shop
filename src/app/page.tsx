// import { Hero } from "@/components/hero/Hero";
import { DealsOfTheWeek } from "@/components/home/DealsOfTheWeek";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { LogoMarquee } from "@/shared/LogoMarquee";
import { VideoHero } from "@/shared/VideoHero";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      {/* <Hero /> */}
      <VideoHero
        videoUrl="Furniture_Shop_Video_Generation.mp4"
        posterUrl="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=100&h=100&fit=crop"
        title="Sculpting With Light"
        subtitle="Experience the intersection of architectural precision and atmospheric glow."
        ctaText="Explore Collection"
      />
      <FeaturedCategories />
      <DealsOfTheWeek />
      <LogoMarquee />
      {/* Product sections will go here */}
    </div>
  );
}
