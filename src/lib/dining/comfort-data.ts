export interface ComfortZone {
  id: string;
  part: string;
  benefit: string;
  tech: string;
  density: string;
}

export const COMFORT_ZONES: ComfortZone[] = [
  {
    id: "lumbar",
    part: "Lumbar Support",
    benefit: "Spinal Neutrality",
    tech: "Double-Curved Ash Wood",
    density: "High Rigidity",
  },
  {
    id: "seat",
    part: "Seat Base",
    benefit: "Ischial Pressure Relief",
    tech: "Multi-Density Injection Foam",
    density: "45kg/m³",
  },
  {
    id: "pitch",
    part: "Backrest Pitch",
    benefit: "Digestive Comfort",
    tech: "105° Social Angle",
    density: "Dynamic Flex",
  },
];
