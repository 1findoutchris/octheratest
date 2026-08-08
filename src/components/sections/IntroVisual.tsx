"use client";

import { motion } from "framer-motion";
import { Activity, Gamepad2, Globe2, ShieldCheck } from "lucide-react";

const BARS = [42, 68, 54, 88, 62, 95, 74];

export function IntroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-cyan/15 via-transparent to-violet/15 blur-3xl"
      />

      <div className="glass-panel relative overflow-hidden rounded-2xl shadow-2xl">
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-5 py-3.5">
          <span className="h-2.5 w-2.5 rounded-full bg-mist-dim/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-mist-dim/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-mist-dim/50" />
          <span className="ml-3 h-5 flex-1 max-w-56 rounded-full bg-white/[0.04]" />
        </div>

        <div className="grid grid-cols-3 gap-4 p-6">
          <div className="col-span-2 rounded-xl border border-ink-soft bg-white/[0.02] p-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-wider text-mist">
                Platform activity
              </span>
              <Activity className="h-4 w-4 text-cyan-soft" aria-hidden />
            </div>
            <div className="flex h-28 items-end gap-2">
              {BARS.map((h, i) => (
                <motion.span
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-cyan/70 to-violet/70"
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-ink-soft bg-white/[0.02] p-4">
              <Globe2 className="mb-3 h-4 w-4 text-violet-soft" aria-hidden />
              <p className="font-display text-lg font-bold text-frost">Multi-region</p>
              <p className="text-xs text-mist">Ready architecture</p>
            </div>
            <div className="rounded-xl border border-ink-soft bg-white/[0.02] p-4">
              <ShieldCheck className="mb-3 h-4 w-4 text-cyan-soft" aria-hidden />
              <p className="font-display text-lg font-bold text-frost">Operator</p>
              <p className="text-xs text-mist">Full control</p>
            </div>
          </div>

          <div className="col-span-3 flex items-center justify-between rounded-xl border border-ink-soft bg-white/[0.02] p-4">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan to-violet">
                <Gamepad2 className="h-4 w-4 text-void" aria-hidden />
              </span>
              <div>
                <p className="text-sm font-semibold text-frost">Content library</p>
                <p className="text-xs text-mist">Aggregated &amp; ready</p>
              </div>
            </div>
            <span className="rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan-soft">
              Live
            </span>
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="glass-panel absolute -right-6 -top-6 hidden rounded-xl px-4 py-3 shadow-xl sm:block"
      >
        <p className="text-[10px] uppercase tracking-wider text-mist">API status</p>
        <p className="flex items-center gap-1.5 text-sm font-semibold text-frost">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_8px_2px_rgba(46,230,200,0.7)]" />
          Connected
        </p>
      </motion.div>
    </div>
  );
}
