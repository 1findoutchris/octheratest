import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  Gauge,
  Globe2,
  LifeBuoy,
  Rocket,
  Settings2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export type Advantage = {
  title: string;
  icon: LucideIcon;
};

export const ADVANTAGES: Advantage[] = [
  { title: "Flexible architecture", icon: Blocks },
  { title: "Fast integrations", icon: Rocket },
  { title: "Scalable infrastructure", icon: TrendingUp },
  { title: "Modern technology", icon: Gauge },
  { title: "Operator-focused tools", icon: Settings2 },
  { title: "Customizable solutions", icon: ShieldCheck },
  { title: "Global-ready architecture", icon: Globe2 },
  { title: "Dedicated technical support", icon: LifeBuoy },
];
