"use client";

import { motion } from "framer-motion";
import { ADVANTAGES } from "@/data/why-octhera";

const RADIUS = 37;

export function WhyOctheraDiagram() {
  const nodes = ADVANTAGES.map((item, i) => {
    const angle = (2 * Math.PI * i) / ADVANTAGES.length - Math.PI / 2;
    return {
      ...item,
      x: 50 + RADIUS * Math.cos(angle),
      y: 50 + RADIUS * Math.sin(angle),
    };
  });

  return (
    <div className="relative mx-auto hidden aspect-square w-full max-w-xl lg:block">
      <svg aria-hidden className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 100 100">
        {nodes.map((node, i) => (
          <motion.line
            key={i}
            x1={50}
            y1={50}
            x2={node.x}
            y2={node.y}
            stroke="url(#why-line-gradient)"
            strokeWidth={0.3}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
        <defs>
          <linearGradient id="why-line-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--color-cyan)" stopOpacity={0.8} />
            <stop offset="100%" stopColor="var(--color-violet)" stopOpacity={0.1} />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan/30 bg-obsidian-2/90 shadow-[0_0_60px_-10px_rgba(46,230,200,0.5)]">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan to-violet">
          <span className="h-3 w-3 rounded-[3px] bg-void" />
        </span>
      </div>

      {nodes.map((node, i) => (
        <motion.div
          key={node.title}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="absolute flex w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 text-center"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-soft bg-obsidian-2 text-cyan-soft">
            <node.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
          </span>
          <span className="text-xs font-medium text-frost/90">{node.title}</span>
        </motion.div>
      ))}
    </div>
  );
}
