export interface Fabric {
  id: string;
  name: string;
  hex: string;
  texture: string;
  category: "Natural" | "Performance" | "Leather";
}

export const FABRICS: Fabric[] = [
  {
    id: "oat",
    name: "Sand Bouclé",
    hex: "#E5E1D9",
    texture: "https://images.unsplash.com/photo-1534171472159-edb6d1e0b63c",
    category: "Natural",
  },
  {
    id: "slate",
    name: "Shadow Weave",
    hex: "#4A4E52",
    texture:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400",
    category: "Performance",
  },
  {
    id: "tan",
    name: "Cognac Nubuck",
    hex: "#A67B5B",
    texture: "https://images.unsplash.com/photo-1571829604981-ea159f94e5ad",
    category: "Leather",
  },
];
