export interface ProductivityMetric {
  id: string;
  label: string;
  standardValue: number; // Percent of productivity on standard chair
  lumenValue: number; // Percent on Lumen ergonomic series
  description: string;
}

export const PRODUCTIVITY_METRICS: ProductivityMetric[] = [
  {
    id: "focus",
    label: "Deep Work Duration",
    standardValue: 45, // mins before discomfort
    lumenValue: 120,
    description:
      "Extended spinal support allows for longer periods of uninterrupted cognitive focus.",
  },
  {
    id: "energy",
    label: "Post-Work Energy",
    standardValue: 30, // % of energy remaining
    lumenValue: 85,
    description:
      "Reduced physical strain preserves metabolic energy for personal life after hours.",
  },
  {
    id: "posture",
    label: "Posture Integrity",
    standardValue: 20, // % of time in correct posture
    lumenValue: 95,
    description:
      "Self-adjusting lumbar tech ensures the body remains in the power-pose position.",
  },
];
