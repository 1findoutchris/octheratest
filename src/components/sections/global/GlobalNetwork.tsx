"use client";

import { motion } from "framer-motion";
import { NETWORK_POINTS } from "@/data/global-infrastructure";

const MERIDIANS = [100, 70, 40, 15];
const CONNECTIONS: [number, number][] = [
  [0, 2],
  [1, 4],
  [2, 5],
  [3, 6],
  [5, 7],
  [4, 8],
  [6, 9],
];

export function GlobalNetwork() {
  return (
    <div className="relative mx-auto aspect-[16/10] w-full max-w-4xl">
      <div
        aria-hidden
        className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-cyan/[0.06] to-violet/[0.06]"
      />
      <svg viewBox="0 0 400 240" className="relative h-full w-full overflow-visible" aria-hidden>
        {/* wireframe globe */}
        <ellipse cx={200} cy={120} rx={170} ry={100} fill="none" stroke="var(--color-ink-soft)" strokeWidth={1} />
        {MERIDIANS.map((rx) => (
          <ellipse key={rx} cx={200} cy={120} rx={rx} ry={100} fill="none" stroke="var(--color-ink-soft)" strokeWidth={1} />
        ))}
        {[-70, -35, 0, 35, 70].map((offsetY) => {
          const ry = 100;
          const rx = 170 * Math.cos((offsetY / ry) * (Math.PI / 2.4));
          return (
            <ellipse
              key={offsetY}
              cx={200}
              cy={120 + offsetY}
              rx={rx}
              ry={6}
              fill="none"
              stroke="var(--color-ink-soft)"
              strokeWidth={0.6}
              opacity={0.5}
            />
          );
        })}

        {/* connections between network points */}
        {CONNECTIONS.map(([a, b], i) => {
          const p1 = NETWORK_POINTS[a];
          const p2 = NETWORK_POINTS[b];
          if (!p1 || !p2) return null;
          return (
            <motion.line
              key={i}
              x1={(p1.x / 100) * 400}
              y1={(p1.y / 100) * 240}
              x2={(p2.x / 100) * 400}
              y2={(p2.y / 100) * 240}
              stroke="url(#globe-line)"
              strokeWidth={1}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            />
          );
        })}
        <defs>
          <linearGradient id="globe-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-cyan)" />
            <stop offset="100%" stopColor="var(--color-violet)" />
          </linearGradient>
        </defs>

        {NETWORK_POINTS.map((point, i) => (
          <g key={i} transform={`translate(${(point.x / 100) * 400} ${(point.y / 100) * 240})`}>
            <circle r={6} fill="var(--color-cyan)" opacity={0.15}>
              <animate attributeName="r" values="6;14;6" dur="3.2s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
              <animate attributeName="opacity" values="0.25;0;0.25" dur="3.2s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
            </circle>
            <circle r={2.6} fill="var(--color-cyan-soft)" />
          </g>
        ))}
      </svg>
    </div>
  );
}
