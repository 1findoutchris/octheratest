import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  CreditCard,
  Gauge,
  LayoutDashboard,
  LifeBuoy,
  Megaphone,
  Network,
  Sparkles,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    title: "Back Office",
    description: "Centralized management for gaming operations, from configuration to control.",
    icon: LayoutDashboard,
  },
  {
    title: "Payment Solutions",
    description: "Flexible payment integration architecture built around operator needs.",
    icon: CreditCard,
  },
  {
    title: "Affiliate System",
    description: "Tools for managing affiliate relationships and performance.",
    icon: Megaphone,
  },
  {
    title: "Bonus Engine",
    description: "Flexible promotional and bonus configuration for player engagement.",
    icon: Sparkles,
  },
  {
    title: "CMS",
    description: "Manage platform content and presentation without engineering overhead.",
    icon: Gauge,
  },
  {
    title: "Analytics",
    description: "Business intelligence and operational reporting across your platform.",
    icon: BarChart3,
  },
  {
    title: "Agent System",
    description: "Infrastructure for agent-based gaming operations and hierarchies.",
    icon: Network,
  },
  {
    title: "Technical Support",
    description: "Technical assistance for platform partners, when it matters.",
    icon: LifeBuoy,
  },
];
