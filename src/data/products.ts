import type { LucideIcon } from "lucide-react";
import {
  Bolt,
  Dices,
  Gamepad2,
  Ticket,
  Trophy,
  Tv,
  Users,
  Zap,
} from "lucide-react";

export type Product = {
  title: string;
  description: string;
  icon: LucideIcon;
  /** Controls the asymmetric grid span on desktop. */
  size: "lg" | "md" | "sm";
};

export const PRODUCTS: Product[] = [
  {
    title: "Sportsbook",
    description: "Sports betting infrastructure with deep pre-match and live markets.",
    icon: Trophy,
    size: "lg",
  },
  {
    title: "Casino",
    description: "A scalable casino ecosystem designed for modern operators.",
    icon: Dices,
    size: "md",
  },
  {
    title: "Live Casino",
    description: "Premium live gaming experiences from integrated providers.",
    icon: Tv,
    size: "md",
  },
  {
    title: "Slots",
    description: "A broad gaming content ecosystem accessible through one platform.",
    icon: Gamepad2,
    size: "sm",
  },
  {
    title: "Esports",
    description: "Competitive gaming markets and esports betting infrastructure.",
    icon: Users,
    size: "sm",
  },
  {
    title: "Virtual Games",
    description: "Always-on virtual gaming experiences for continuous engagement.",
    icon: Zap,
    size: "sm",
  },
  {
    title: "Crash & Instant Games",
    description: "Fast-paced, modern gaming content built for quick sessions.",
    icon: Bolt,
    size: "md",
  },
  {
    title: "Lottery / Toto",
    description: "Flexible lottery and pool-based gaming solutions.",
    icon: Ticket,
    size: "sm",
  },
];
