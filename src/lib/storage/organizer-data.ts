export interface OrganizerKit {
  id: string;
  name: string;
  material: string;
  bestFor: string;
  image: string;
}

export const ORGANIZER_KITS: OrganizerKit[] = [
  {
    id: "tech",
    name: "The Digital Hub",
    material: "Anti-Static Tech Felt",
    bestFor: "Cables, Tablets, & Drives",
    image: "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?w=800",
  },
  {
    id: "valet",
    name: "The Valet Tray",
    material: "Cognac Nubuck Leather",
    bestFor: "Watches, Rings, & EDC",
    image: "https://images.unsplash.com/photo-1633599925393-a4af0a650546?",
  },
  {
    id: "culinary",
    name: "The Sommelier Kit",
    material: "Milled Walnut & Velvet",
    bestFor: "Stemware & Decanters",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800",
  },
];
