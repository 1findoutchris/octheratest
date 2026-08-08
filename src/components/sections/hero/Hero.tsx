"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionKicker } from "@/components/ui/SectionHeading";
import { GridBackground, GlowOrb } from "@/components/ui/GridBackground";
import { HeroVisual } from "@/components/sections/hero/HeroVisual";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      <GridBackground />
      <GlowOrb color="primary" className="-left-40 top-10 h-[420px] w-[420px]" />
      <GlowOrb color="secondary" className="-right-32 top-1/3 h-[480px] w-[480px]" />

      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div className="flex flex-col items-start gap-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionKicker>B2B Gaming Technology</SectionKicker>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance font-display text-5xl font-extrabold leading-[1.03] tracking-tight text-text sm:text-6xl lg:text-7xl"
          >
            Powering the
            <br />
            <span className="text-gradient">Future of Gaming</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
          >
            Build, launch and scale powerful gaming brands with flexible technology,
            premium content and infrastructure designed for modern operators.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Button href="#solutions" variant="primary">
              Explore Solutions
            </Button>
            <Button href="#contact" variant="secondary" showArrow={false}>
              Contact Us
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroVisual />
        </motion.div>
      </Container>

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"
      />
    </section>
  );
}
