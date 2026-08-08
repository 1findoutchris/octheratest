"use client";

import { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

function formatValue(value: number, decimals: number) {
  return decimals > 0
    ? value.toFixed(decimals)
    : Math.round(value).toLocaleString("en-US");
}

export function AnimatedNumber({
  value,
  decimals = 0,
}: {
  value: number;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const shouldReduceMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1800, bounce: 0 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(shouldReduceMotion ? value : value);
    }
  }, [isInView, motionValue, shouldReduceMotion, value]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = formatValue(latest, decimals);
      }
    });
    return unsubscribe;
  }, [spring, decimals]);

  return (
    <span ref={ref} aria-label={formatValue(value, decimals)}>
      0
    </span>
  );
}
