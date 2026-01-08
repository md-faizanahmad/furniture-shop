export interface SleepSolution {
  id: string;
  type: "Soft" | "Medium" | "Firm";
  title: string;
  description: string;
  material: string;
  benefit: string;
  image: string;
}

export const SLEEP_SOLUTIONS: SleepSolution[] = [
  {
    id: "side-sleeper",
    type: "Soft",
    title: "The Cloud-9 Ortho",
    description:
      "Designed for side sleepers who require deep pressure relief at the shoulders and hips.",
    material: "Adaptive Memory Foam & Silk Wrap",
    benefit: "Spinal Alignment",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200",
  },
  {
    id: "back-sleeper",
    type: "Medium",
    title: "The Heritage Hybrid",
    description:
      "A balanced feel for those who switch positions, featuring pocket springs and natural latex.",
    material: "Natural Latex & Pocket Springs",
    benefit: "Zero Motion Transfer",
    image:
      "https://images.unsplash.com/photo-1584132905271-512c958d674a?q=80&w=1200",
  },
  {
    id: "stomach-sleeper",
    type: "Firm",
    title: "The Zen Foundation",
    description:
      "Maximum support to prevent lower back arching. Our firmest high-density coconut fiber core.",
    material: "Coir Fiber & High-Density Foam",
    benefit: "Orthopedic Support",
    image:
      "https://images.unsplash.com/photo-1621293954908-907159247fc8?q=80&w=1200",
  },
];
