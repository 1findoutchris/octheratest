export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    index: "01",
    title: "Tell Us Your Vision",
    description: "Share your goals, market and the kind of gaming brand you want to build.",
  },
  {
    index: "02",
    title: "Select Your Solution",
    description: "Choose turnkey, white label, API integration or a custom configuration.",
  },
  {
    index: "03",
    title: "Customize & Integrate",
    description: "Shape branding, content and modules around your operation.",
  },
  {
    index: "04",
    title: "Launch & Scale",
    description: "Go live on infrastructure built to grow alongside your business.",
  },
];
