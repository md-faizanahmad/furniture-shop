export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
  material: string; // Added back
}

export interface Collection {
  slug: string;
  title: string;
  description: string;
  itemCount: number; // Added back
  products: Product[];
}

export const COLLECTIONS_DATA: Collection[] = [
  {
    slug: "sofas-recliners",
    title: "Sofas & Recliners",
    description:
      "Hand-tufted comfort and premium Italian leathers for the modern Indian home.",
    itemCount: 42,
    products: [
      {
        id: "sr1",
        name: "Maharaja Sectional",
        price: "1,45,000",
        image:
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800",
        category: "Sofas",
        material: "Italian Leather",
      },
      {
        id: "sr2",
        name: "Velvet Cloud Recliner",
        price: "85,900",
        image:
          "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800",
        category: "Recliners",
        material: "Silk Velvet",
      },
    ],
  },
  {
    slug: "living",
    title: "Living",
    description:
      "Curated coffee tables and entertainment units that serve as the heart of your home.",
    itemCount: 28,
    products: [
      {
        id: "lv1",
        name: "Onyx Coffee Table",
        price: "42,000",
        image:
          "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800",
        category: "Tables",
        material: "Black Marble",
      },
    ],
  },
  {
    slug: "bedroom",
    title: "Bedroom",
    description: "Serene bed frames and nightstands engineered for deep rest.",
    itemCount: 35,
    products: [
      {
        id: "bd1",
        name: "Nizam King Bed",
        price: "1,10,000",
        image: "https://images.unsplash.com/photo-1668512624222-2e375314be39",
        category: "Beds",
        material: "Teak Wood",
      },
    ],
  },
  {
    slug: "dining-kitchen",
    title: "Dining & Kitchen",
    description:
      "Solid wood dining sets where families gather and memories are made.",
    itemCount: 22,
    products: [
      {
        id: "dk1",
        name: "Heritage 6-Seater",
        price: "95,000",
        image: "https://images.unsplash.com/photo-1664997432996-010bbf13efbc",
        category: "Dining",
        material: "Rosewood",
      },
    ],
  },
  {
    slug: "mattresses",
    title: "Mattresses",
    description:
      "Orthopedic memory foam and natural latex for a restorative sleep experience.",
    itemCount: 12,
    products: [
      {
        id: "mt1",
        name: "Cloud-9 Ortho",
        price: "35,000",
        image:
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800",
        category: "Mattress",
        material: "Latex Foam",
      },
    ],
  },
  {
    slug: "study",
    title: "Study",
    description:
      "Ergonomic desks and library shelving for high-focus environments.",
    itemCount: 18,
    products: [
      {
        id: "st1",
        name: "Director's Desk",
        price: "68,000",
        image:
          "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800",
        category: "Desks",
        material: "Oak & Brass",
      },
    ],
  },
  {
    slug: "storage",
    title: "Storage",
    description: "Minimalist wardrobes and sideboards to organize your world.",
    itemCount: 20,
    products: [
      {
        id: "sg1",
        name: "Linear Wardrobe",
        price: "1,25,000",
        image:
          "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800",
        category: "Wardrobes",
        material: "Matte Laminate",
      },
    ],
  },
  {
    slug: "lighting",
    title: "Lighting",
    description: "Atmospheric instruments that redefine the energy of a room.",
    itemCount: 15,
    products: [
      {
        id: "lt1",
        name: "Halo Chandelier",
        price: "45,000",
        image: "https://images.unsplash.com/photo-1578490343589-ec110a8694b5",
        category: "Lighting",
        material: "Gold Plated",
      },
    ],
  },
  {
    slug: "furnishing",
    title: "Furnishing",
    description:
      "Hand-woven rugs and cushions that add the final layer of soul to a room.",
    itemCount: 50,
    products: [
      {
        id: "fn1",
        name: "Jaipur Jute Rug",
        price: "18,500",
        image:
          "https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?q=80&w=800",
        category: "Rugs",
        material: "Hand-spun Jute",
      },
    ],
  },
];
