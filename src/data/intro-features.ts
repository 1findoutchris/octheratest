import type { LucideIcon } from "lucide-react";
import { Blocks, Gauge, Rocket, Settings2, Smartphone, TrendingUp } from "lucide-react";

export type IntroFeature = {
  title: string;
  icon: LucideIcon;
};

export const INTRO_FEATURES: IntroFeature[] = [
  { title: "Fast deployment", icon: Rocket },
  { title: "Flexible customization", icon: Settings2 },
  { title: "Scalable infrastructure", icon: TrendingUp },
  { title: "API integrations", icon: Blocks },
  { title: "Operator control", icon: Gauge },
  { title: "Multi-device experiences", icon: Smartphone },
];
