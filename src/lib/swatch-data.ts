export interface Swatch {
  id: string;
  name: string;
  color: string; // Hex code or CSS color
  textureUrl: string; // Close-up macro shot of the material
  description: string;
  origin: string;
}

export const MATERIAL_SWATCHES: Swatch[] = [
  {
    id: "teak",
    name: "CP Teak Wood",
    color: "#8B4513",
    textureUrl:
      "https://unsplash.com/photos/photo-of-brown-wood-slab-xzPMUMDDsfk",
    description:
      "Sustainably sourced from Central Province. Known for its high oil content and golden-brown grain.",
    origin: "Madhya Pradesh, India",
  },
  {
    id: "velvet",
    name: "Royal Silk Velvet",
    color: "#4B0082",
    textureUrl:
      "https://images.unsplash.com/photo-1598425237654-4fc758e50a93?q=80&w=800",
    description:
      "A high-density weave with a dual-tone sheen that reacts beautifully to ambient lighting.",
    origin: "Surat, India",
  },
  {
    id: "marble",
    name: "Makrana White",
    color: "#E5E4E2",
    textureUrl:
      "https://images.unsplash.com/photo-1588612191544-71286c071720?q=80&w=800",
    description:
      "The world's finest marble. Non-porous with a translucent crystalline structure.",
    origin: "Rajasthan, India",
  },
];
