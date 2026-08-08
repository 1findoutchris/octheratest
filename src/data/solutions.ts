import type { LucideIcon } from "lucide-react";
import { Blocks, Boxes, KeyRound, Puzzle, Workflow } from "lucide-react";

export type Solution = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const SOLUTIONS: Solution[] = [
  {
    title: "Turnkey Solution",
    description:
      "Launch a complete gaming operation using Octhera's technology stack — platform, content and infrastructure delivered as one.",
    icon: KeyRound,
  },
  {
    title: "White Label",
    description:
      "Launch a branded gaming platform on ready-made infrastructure, live in a fraction of the time of a ground-up build.",
    icon: Boxes,
  },
  {
    title: "API Integration",
    description:
      "Integrate Octhera products and services into an existing platform through a single, well-documented API layer.",
    icon: Blocks,
  },
  {
    title: "Game Aggregation",
    description:
      "Access a broad library of gaming content from multiple providers through one simplified integration.",
    icon: Puzzle,
  },
  {
    title: "Custom Solutions",
    description:
      "Technology designed and configured around the specific requirements of your operation.",
    icon: Workflow,
  },
];
