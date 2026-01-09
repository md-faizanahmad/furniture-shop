export interface LightProfile {
  id: string;
  label: string;
  kelvin: number;
  description: string;
  ambiance: string;
  colorHex: string; // Used for the UI glow effect
  filterClass: string; // Tailwind filter to simulate light
}

export const LIGHT_PROFILES: LightProfile[] = [
  {
    id: "warm",
    label: "Warm Sunset",
    kelvin: 2700,
    description:
      "Ideal for evening dining. Enhances gold tones in wood and creates an intimate, cozy atmosphere.",
    ambiance: "Intimate / Relaxed",
    colorHex: "#FFD27D",
    filterClass: "sepia-[0.4] saturate-[1.4] hue-rotate-[-10deg]",
  },
  {
    id: "neutral",
    label: "Natural Noon",
    kelvin: 4000,
    description:
      "The gallery standard. Shows colors accurately. Best for kitchens and food preparation areas.",
    ambiance: "Functional / Modern",
    colorHex: "#FFFFFF",
    filterClass: "brightness-[1.05] contrast-[1.05]",
  },
  {
    id: "cool",
    label: "Cool Daylight",
    kelvin: 5500,
    description:
      "Crisp and energetic. Sharpens details and works beautifully with marble and steel surfaces.",
    ambiance: "Alert / Architectural",
    colorHex: "#D1E8FF",
    filterClass:
      "contrast-[1.1] saturate-[1.1] hue-rotate-[10deg] brightness-[1.1]",
  },
];
