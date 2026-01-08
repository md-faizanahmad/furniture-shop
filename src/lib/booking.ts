export type ServiceType = "design" | "repair" | "";

export interface BookingState {
  step: number;
  serviceType: ServiceType;
  company: string;
  date: Date | undefined;
}

export const FORM_VARIANTS = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
    filter: "blur(10px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 50 : -50,
    opacity: 0,
    filter: "blur(10px)",
  }),
};
