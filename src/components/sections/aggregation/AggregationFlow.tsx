"use client";

import { motion } from "framer-motion";
import { Blocks, Building2, LayoutGrid, Users } from "lucide-react";

const STAGES = [
  { label: "Game Providers", icon: LayoutGrid, sub: "Multiple content sources" },
  { label: "Octhera API", icon: Blocks, sub: "Unified integration layer" },
  { label: "Operator Platform", icon: Building2, sub: "Your gaming brand" },
  { label: "Players", icon: Users, sub: "Seamless experience" },
];

function Connector({ delay = 0 }: { delay?: number }) {
  return (
    <div className="relative mx-2 hidden h-px flex-1 overflow-hidden bg-ink-soft sm:block lg:mx-4">
      <motion.span
        aria-hidden
        className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-transparent via-cyan to-transparent"
        animate={{ left: ["-10%", "110%"] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay }}
      />
    </div>
  );
}

export function AggregationFlow() {
  return (
    <div className="glass-panel relative overflow-hidden rounded-3xl px-6 py-12 sm:px-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-pattern opacity-30"
      />
      <div className="relative flex flex-col items-stretch gap-6 sm:flex-row sm:items-center sm:gap-0">
        {STAGES.map((stage, i) => (
          <div key={stage.label} className="flex flex-1 items-center sm:contents">
            <div className="flex flex-1 flex-col items-center gap-3 text-center">
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl border ${
                  i === 1
                    ? "border-cyan/40 bg-gradient-to-br from-cyan/20 to-violet/20 shadow-[0_0_40px_-8px_rgba(46,230,200,0.5)]"
                    : "border-ink-soft bg-white/[0.03]"
                }`}
              >
                <stage.icon
                  className={`h-7 w-7 ${i === 1 ? "text-cyan-soft" : "text-mist"}`}
                  strokeWidth={1.6}
                  aria-hidden
                />
              </div>
              <div>
                <p className="font-display text-sm font-bold text-frost sm:text-base">
                  {stage.label}
                </p>
                <p className="text-xs text-mist">{stage.sub}</p>
              </div>
            </div>
            {i < STAGES.length - 1 && <Connector delay={i * 0.4} />}
          </div>
        ))}
      </div>
    </div>
  );
}
