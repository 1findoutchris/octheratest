import type { LucideIcon } from "lucide-react";
import { BarChart3, Blocks, CreditCard, Dices, Gamepad2, Trophy, Tv, Zap } from "lucide-react";

export type EcosystemNode = {
  label: string;
  icon: LucideIcon;
};

export const ECOSYSTEM_NODES: EcosystemNode[] = [
  { label: "Sports", icon: Trophy },
  { label: "Casino", icon: Dices },
  { label: "Live Casino", icon: Tv },
  { label: "Slots", icon: Gamepad2 },
  { label: "Virtual Games", icon: Zap },
  { label: "Payments", icon: CreditCard },
  { label: "Analytics", icon: BarChart3 },
  { label: "API", icon: Blocks },
];
