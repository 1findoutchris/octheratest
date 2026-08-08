import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  BarChart3,
  CreditCard,
  Dices,
  Gamepad2,
  LayoutGrid,
  Megaphone,
  Settings,
  ShieldAlert,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

export type PlatformModule = {
  label: string;
  icon: LucideIcon;
};

/** Marketing mockup of an operator dashboard — illustrative, not a claim of shipped functionality. */
export const PLATFORM_MODULES: PlatformModule[] = [
  { label: "Overview", icon: LayoutGrid },
  { label: "Players", icon: Users },
  { label: "Transactions", icon: CreditCard },
  { label: "Games", icon: Dices },
  { label: "Sportsbook", icon: Trophy },
  { label: "Bonuses", icon: Sparkles },
  { label: "Affiliates", icon: Megaphone },
  { label: "Reports", icon: BarChart3 },
  { label: "Analytics", icon: Gamepad2 },
  { label: "Risk Management", icon: ShieldAlert },
  { label: "Alerts", icon: AlertTriangle },
  { label: "Settings", icon: Settings },
];
