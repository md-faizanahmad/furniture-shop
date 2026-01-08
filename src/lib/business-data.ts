export interface BusinessCategory {
  id: string;
  title: string;
  image: string;
  description: string;
}

export const BUSINESS_CATEGORIES: BusinessCategory[] = [
  {
    id: "b1",
    title: "Executive Suites",
    description: "Premium walnut and leather solutions for leadership offices.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
  },
  {
    id: "b2",
    title: "Collaborative Hubs",
    description: "Modular seating and acoustic pods for modern teamwork.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070",
  },
  {
    id: "b3",
    title: "Ergonomic Tasking",
    description:
      "Certified seating designed for 8+ hours of peak productivity.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070",
  },
];
