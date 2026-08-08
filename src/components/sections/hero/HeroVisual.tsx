"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ECOSYSTEM_NODES } from "@/data/ecosystem";

const RADIUS = 42; // percentage of container
const ORBIT_DURATION = 70;

export function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();
  const nodes = ECOSYSTEM_NODES.map((node, i) => {
    const angle = (2 * Math.PI * i) / ECOSYSTEM_NODES.length - Math.PI / 2;
    return {
      ...node,
      x: 50 + RADIUS * Math.cos(angle),
      y: 50 + RADIUS * Math.sin(angle),
    };
  });

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      {/* concentric rings */}
      <div aria-hidden className="absolute inset-0 rounded-full border border-border/70" />
      <div aria-hidden className="absolute inset-[13%] rounded-full border border-border/50" />
      <div aria-hidden className="absolute inset-[27%] rounded-full border border-dashed border-border/40" />

      {/* ambient glow */}
      <div
        aria-hidden
        className="absolute inset-[18%] rounded-full bg-gradient-to-br from-primary/25 via-secondary/10 to-transparent blur-2xl"
      />

      {/* rotating orbit group: lines + nodes */}
      <motion.div
        className="absolute inset-0"
        animate={shouldReduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: ORBIT_DURATION, repeat: Infinity, ease: "linear" }}
      >
        <svg
          aria-hidden
          className="absolute inset-0 h-full w-full overflow-visible"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {nodes.map((node, i) => (
            <line
              key={i}
              x1={50}
              y1={50}
              x2={node.x}
              y2={node.y}
              stroke="url(#octhera-line-gradient)"
              strokeWidth={0.25}
              strokeDasharray="1.4 2"
            />
          ))}
          <defs>
            <linearGradient id="octhera-line-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.75} />
              <stop offset="100%" stopColor="var(--color-secondary)" stopOpacity={0.15} />
            </linearGradient>
          </defs>
        </svg>

        {nodes.map((node) => (
          <motion.div
            key={node.label}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            animate={shouldReduceMotion ? undefined : { rotate: -360 }}
            transition={{ duration: ORBIT_DURATION, repeat: Infinity, ease: "linear" }}
          >
            <div className="glass-panel flex h-11 w-11 items-center justify-center rounded-xl text-primary-soft shadow-lg sm:h-14 sm:w-14">
              <node.icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} aria-hidden />
            </div>
            <span className="whitespace-nowrap rounded-full bg-background/70 px-2 py-0.5 text-[10px] font-medium tracking-wide text-muted sm:text-xs">
              {node.label}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* central core */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-primary/30 bg-surface/90 shadow-[0_0_60px_-10px_rgb(from_var(--octhera-primary)_r_g_b/0.5)] sm:h-28 sm:w-28">
          <div
            aria-hidden
            className="absolute inset-0 animate-pulse-soft rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-md"
          />
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary sm:h-10 sm:w-10">
            <span className="h-3 w-3 rounded-[3px] bg-background" />
          </span>
        </div>
      </div>

      <span className="sr-only">
        Octhera gaming ecosystem: {ECOSYSTEM_NODES.map((n) => n.label).join(", ")}
      </span>
    </div>
  );
}
