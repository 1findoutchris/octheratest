"use client";

import { motion } from "framer-motion";
import { Bell, CreditCard, Trophy, Users } from "lucide-react";

export function WhiteLabelVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-secondary/15 via-transparent to-primary/15 blur-3xl"
      />

      {/* laptop */}
      <div className="glass-panel relative overflow-hidden rounded-2xl shadow-2xl">
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-5 py-3.5">
          <span className="h-2.5 w-2.5 rounded-full bg-muted-dim/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-dim/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-dim/50" />
          <span className="ml-3 flex items-center gap-1.5 rounded-full bg-white/[0.04] px-3 py-1 text-[10px] text-muted">
            yourbrand.com
          </span>
        </div>
        <div className="flex items-center justify-between p-6 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary" />
            <span className="font-display text-sm font-bold text-text">YOUR BRAND</span>
          </div>
          <div className="hidden gap-4 text-xs text-muted sm:flex">
            <span>Sports</span>
            <span>Casino</span>
            <span>Live</span>
            <span>Promotions</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 px-6 pb-6">
          {[Trophy, Users, CreditCard].map((Icon, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-white/[0.02] py-6"
            >
              <Icon className="h-5 w-5 text-primary-soft" strokeWidth={1.6} aria-hidden />
            </div>
          ))}
        </div>
      </div>

      {/* laptop base */}
      <div className="mx-auto h-3 w-[92%] rounded-b-2xl bg-gradient-to-b from-surface-strong to-surface-1 border border-t-0 border-border" />
      <div className="mx-auto h-1 w-[40%] rounded-b-full bg-border" />

      {/* floating phone */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="glass-panel absolute -bottom-10 -right-6 w-32 rounded-2xl p-3 shadow-2xl sm:-right-10 sm:w-36"
      >
        <div className="mb-2 flex items-center justify-between">
          <span className="h-5 w-5 rounded-md bg-gradient-to-br from-primary to-secondary" />
          <Bell className="h-3.5 w-3.5 text-muted" aria-hidden />
        </div>
        <div className="space-y-1.5">
          <div className="h-2 w-full rounded-full bg-white/[0.06]" />
          <div className="h-2 w-3/4 rounded-full bg-white/[0.06]" />
          <div className="mt-2 h-8 w-full rounded-lg bg-gradient-to-r from-primary/30 to-secondary/30" />
        </div>
      </motion.div>
    </div>
  );
}
