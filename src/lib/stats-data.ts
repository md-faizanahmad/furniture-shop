export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const BUSINESS_STATS: StatItem[] = [
  {
    id: "s1",
    value: 500,
    suffix: "+",
    label: "Global Enterprises",
    description: "Fortune 500 companies outfitted with our furniture systems.",
  },
  {
    id: "s2",
    value: 120,
    suffix: "k",
    label: "Workstations Installed",
    description: "Ergonomically engineered units delivered worldwide.",
  },
  {
    id: "s3",
    value: 15,
    suffix: "yr",
    label: "Average Longevity",
    description: "Industry-leading durability for high-traffic environments.",
  },
  {
    id: "s4",
    value: 98,
    suffix: "%",
    label: "Retention Rate",
    description: "Of our corporate clients return for workspace expansions.",
  },
];
