export interface StorageUnit {
  id: string;
  name: string;
  capacityLiters: number;
  boxEquivalent: number; // How many standard archive boxes fit
  bestFor: string;
  dimensions: string;
  heightEm: string; // For CSS relative height visualization
}

export const STORAGE_UNITS: StorageUnit[] = [
  {
    id: "credenza",
    name: "Low Credenza",
    capacityLiters: 180,
    boxEquivalent: 4,
    bestFor: "Media & Records",
    dimensions: "160 x 45 x 50 cm",
    heightEm: "h-32",
  },
  {
    id: "sideboard",
    name: "Standard Sideboard",
    capacityLiters: 320,
    boxEquivalent: 8,
    bestFor: "Dining & Glassware",
    dimensions: "180 x 45 x 75 cm",
    heightEm: "h-48",
  },
  {
    id: "highboard",
    name: "Architectural Highboard",
    capacityLiters: 580,
    boxEquivalent: 14,
    bestFor: "Bulk Storage & Pantry",
    dimensions: "120 x 45 x 140 cm",
    heightEm: "h-72",
  },
];
