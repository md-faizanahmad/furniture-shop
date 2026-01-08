export interface AcousticLayer {
  id: string;
  name: string;
  absorptionRate: number; // Percentage of sound absorbed
  material: string;
  frequencyRange: string;
  image: string;
}

export const ACOUSTIC_LAYERS: AcousticLayer[] = [
  {
    id: "felt",
    name: "Architectural Felt",
    absorptionRate: 85,
    material: "Recycled PET Wool",
    frequencyRange: "High (Speech)",
    image:
      "https://images.unsplash.com/photo-1589128797339-b433b0afd3f5?q=80&w=1998",
  },
  {
    id: "wood",
    name: "Micro-Perforated Oak",
    absorptionRate: 60,
    material: "Sustainably Sourced Oak",
    frequencyRange: "Mid (Ambient)",
    image:
      "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1200",
  },
];
