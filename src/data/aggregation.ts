import type { LucideIcon } from "lucide-react";
import { BarChart3, Database, Layers, Plug, ServerCog, Workflow } from "lucide-react";

export type AggregationFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const AGGREGATION_FEATURES: AggregationFeature[] = [
  {
    title: "Unified API",
    description: "One integration layer standing between operators and every provider.",
    icon: Plug,
  },
  {
    title: "Simplified integration",
    description: "Connect once and extend content over time without repeated integration work.",
    icon: Workflow,
  },
  {
    title: "Centralized content management",
    description: "Manage the entire game library from a single, consistent control point.",
    icon: Database,
  },
  {
    title: "Provider connectivity",
    description: "A growing network of certified content providers behind one connection.",
    icon: Layers,
  },
  {
    title: "Game management",
    description: "Configure, enable and organize content across your platform with ease.",
    icon: ServerCog,
  },
  {
    title: "Reporting",
    description: "Consolidated performance data across providers and game categories.",
    icon: BarChart3,
  },
];

export const AGGREGATION_FLOW = ["Game Providers", "Octhera API", "Operator Platform", "Players"];
