export interface SleepLayer {
  id: string;
  name: string;
  material: string;
  description: string;
  firmness: number;

  img: string;
}

export const MATTRESS_LAYERS: SleepLayer[] = [
  {
    id: "01",
    name: "Pressure Relief",
    material: "Air-Flow Memory Foam",
    firmness: 30,
    description: "Adapts to body heat to cradle pressure points.",
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304",
  },
  {
    id: "02",
    name: "Support Core",
    material: "High-Resilient Latex",
    firmness: 65,
    description: "Provides push-back support to keep the spine neutral.",
    img: "https://images.unsplash.com/photo-1631049555050-34f576594ed5",
  },
  {
    id: "03",
    name: "Stability Base",
    material: "Reinforced Coir Fiber",
    firmness: 90,
    description: "Heavy-duty foundation for long-term structural integrity.",
    img: "https://images.unsplash.com/photo-1584132905271-512c958d674a",
  },
];
