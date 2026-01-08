export interface RoomMood {
  id: string;
  name: string;
  type: "Living" | "Dining";
  description: string;
  sofaColor: string;
  wallColor: string;
  image: string;
}

export const ROOM_MOODS: RoomMood[] = [
  {
    id: "scandi-light",
    name: "Nordic Morning",
    type: "Living",
    description:
      "Cream bouclé textures against a soft off-white lime-wash wall.",
    sofaColor: "#F5F5F0",
    wallColor: "#EAE7E2",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "industrial-dark",
    name: "Midnight Loft",
    type: "Living",
    description:
      "Charcoal leather paired with raw concrete walls and moody shadows.",
    sofaColor: "#2D2D2D",
    wallColor: "#555555",
    image:
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "terracotta-warm",
    name: "Haveli Dusk",
    type: "Living",
    description:
      "Emerald velvet sofa set against a deep terracotta traditional wall.",
    sofaColor: "#064E3B",
    wallColor: "#914D33",
    image:
      "https://images.unsplash.com/photo-1615876234886-fd9a39faa97f?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "minimal-dining",
    name: "The Banquet",
    type: "Dining",
    description: "Marble table set against a minimalist timber-slat wall.",
    sofaColor: "#FFFFFF",
    wallColor: "#D2B48C",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1db207062?auto=format&fit=crop&q=80&w=2000",
  },
];
