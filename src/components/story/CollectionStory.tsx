import { CollectionStoryClient } from "./CollectionStoryClient";

// This would typically come from your database or CMS
const STORY_DATA = [
  {
    id: "01",
    tag: "The Foundation",
    title: "Raw Materials. Refined Forms.",
    description:
      "Every piece begins with sustainably sourced A-grade teak and hand-finished Italian marble. We believe the soul of the home is found in the integrity of its materials.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200",
    category: "Craftsmanship",
  },
  {
    id: "02",
    tag: "The Philosophy",
    title: "Architectural Silence.",
    description:
      "Design is not just what you see, but what you feel. Our collections prioritize negative space and clean lines to create an atmosphere of curated calm.",
    image:
      "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1200",
    category: "Design",
  },
];

export default function CollectionStory() {
  return (
    <section className="bg-[#F8F7F4] overflow-hidden">
      {STORY_DATA.map((story, index) => (
        <CollectionStoryClient key={story.id} story={story} index={index} />
      ))}
    </section>
  );
}
