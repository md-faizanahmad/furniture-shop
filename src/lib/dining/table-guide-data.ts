export interface TableSize {
  id: string;
  label: string;
  seats: string;
  dimensions: string;
  clearance: string;
  scale: number; // For CSS scaling of the visual table
}

export const TABLE_SIZES: TableSize[] = [
  {
    id: "bistro",
    label: "Circular Bistro",
    seats: "2-3 Seats",
    dimensions: "90cm Diameter",
    clearance: "2.7m x 2.7m Room",
    scale: 0.4,
  },
  {
    id: "standard",
    label: "Executive Rectangular",
    seats: "6-8 Seats",
    dimensions: "200cm x 100cm",
    clearance: "3.8m x 2.8m Room",
    scale: 0.7,
  },
  {
    id: "grand",
    label: "Grand Banquet",
    seats: "10-12 Seats",
    dimensions: "300cm x 110cm",
    clearance: "4.8m x 3.0m Room",
    scale: 1.0,
  },
];
