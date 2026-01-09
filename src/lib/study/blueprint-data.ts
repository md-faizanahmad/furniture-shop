export interface BlueprintNode {
  id: string;
  label: string;
  description: string;
  coordinates: { top: string; left: string };
}

export const BLUEPRINT_NODES: BlueprintNode[] = [
  {
    id: "hub",
    label: "Integrated Media Hub",
    description:
      "Recessed CNC-milled bay featuring 60W USB-C, HDMI 2.1, and universal power outlets.",
    coordinates: { top: "15%", left: "75%" },
  },
  {
    id: "spine",
    label: "Vertical Cable Spine",
    description:
      "Magnetic internal channel within the solid oak leg that masks all descending wiring.",
    coordinates: { top: "55%", left: "85%" },
  },
  {
    id: "tray",
    label: "Under-Mount Tray",
    description:
      "Suspended steel tray with ventilation for bulky power bricks and dock stations.",
    coordinates: { top: "35%", left: "45%" },
  },
];
