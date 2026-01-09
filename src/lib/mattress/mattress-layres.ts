export interface SleepLayer {
  id: number;
  name: string;
  material: string;
  description: string;
}

export const MATTRESS_LAYERS: SleepLayer[] = [
  {
    id: 1,
    name: "Surface",
    material: "Mulberry Silk",
    description: "Natural temperature regulation and hypoallergenic finish.",
  },
  {
    id: 2,
    name: "Comfort",
    material: "Talalay Latex",
    description: "Pressure-relieving layer with instant response to movement.",
  },
  {
    id: 3,
    name: "Support",
    material: "Calico Pocket Springs",
    description: "1,200 individual springs for zero-motion transfer.",
  },
  {
    id: 4,
    name: "Base",
    material: "Organic Coir",
    description:
      "High-density coconut fiber for orthopedic structural integrity.",
  },
];
