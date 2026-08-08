"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { PLATFORM_MODULES } from "@/data/platform-modules";

const CHART_POINTS = "0,70 15,55 30,60 45,35 60,42 75,20 90,28 100,10";

const TABLE_ROWS = [
  { id: "TX-8841", type: "Deposit", status: "Completed" },
  { id: "TX-8840", type: "Casino Bet", status: "Completed" },
  { id: "TX-8839", type: "Withdrawal", status: "Pending" },
  { id: "TX-8838", type: "Sportsbook", status: "Completed" },
];

const STATUS_STYLES: Record<string, string> = {
  Completed: "text-cyan-soft bg-cyan/10 border-cyan/30",
  Pending: "text-amber bg-amber/10 border-amber/30",
};

export function DashboardMockup() {
  return (
    <div className="glass-panel relative overflow-hidden rounded-2xl shadow-2xl">
      <div className="flex flex-col lg:flex-row">
        {/* sidebar */}
        <aside className="flex shrink-0 gap-2 overflow-x-auto border-b border-white/[0.06] p-4 lg:w-56 lg:flex-col lg:overflow-visible lg:border-b-0 lg:border-r lg:p-5">
          {PLATFORM_MODULES.map((mod, i) => (
            <div
              key={mod.label}
              className={`flex shrink-0 items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium whitespace-nowrap lg:whitespace-normal ${
                i === 0
                  ? "bg-white/[0.06] text-frost"
                  : "text-mist hover:text-frost"
              }`}
            >
              <mod.icon className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
              {mod.label}
            </div>
          ))}
        </aside>

        {/* main */}
        <div className="flex-1 p-5 sm:p-7">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-display text-lg font-bold text-frost">Overview</p>
              <p className="text-xs text-mist">Sample operator dashboard — illustrative data</p>
            </div>
            <span className="rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan-soft">
              Live preview
            </span>
          </div>

          <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Active players", value: "—" },
              { label: "GGR (sample)", value: "—" },
              { label: "Bet volume", value: "—" },
              { label: "Conversion", value: "—" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-ink-soft bg-white/[0.02] p-3.5">
                <p className="font-display text-xl font-bold text-frost">{stat.value}</p>
                <p className="mt-1 text-[11px] text-mist">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mb-5 rounded-xl border border-ink-soft bg-white/[0.02] p-4 sm:p-5">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-wider text-mist">
                Platform performance
              </p>
              <span className="flex items-center gap-1 text-xs text-cyan-soft">
                <TrendingUp className="h-3.5 w-3.5" aria-hidden />
                Sample trend
              </span>
            </div>
            <svg viewBox="0 0 100 80" className="h-28 w-full sm:h-36" preserveAspectRatio="none">
              <motion.polyline
                points={CHART_POINTS}
                fill="none"
                stroke="url(#dashboard-line)"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              />
              <defs>
                <linearGradient id="dashboard-line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--color-cyan)" />
                  <stop offset="100%" stopColor="var(--color-violet)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="overflow-hidden rounded-xl border border-ink-soft">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-ink-soft bg-white/[0.02] text-mist">
                  <th className="px-4 py-2.5 font-medium">Transaction</th>
                  <th className="px-4 py-2.5 font-medium">Type</th>
                  <th className="px-4 py-2.5 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map((row) => (
                  <tr key={row.id} className="border-b border-ink-soft/60 last:border-0">
                    <td className="px-4 py-2.5 font-mono text-frost/80">{row.id}</td>
                    <td className="px-4 py-2.5 text-frost/80">{row.type}</td>
                    <td className="px-4 py-2.5">
                      <span
                        className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${STATUS_STYLES[row.status]}`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
