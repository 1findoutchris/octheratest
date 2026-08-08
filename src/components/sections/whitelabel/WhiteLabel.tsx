import { Check, Plus, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionKicker } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { WhiteLabelVisual } from "@/components/sections/whitelabel/WhiteLabelVisual";
import { WHITE_LABEL_FEATURES } from "@/data/white-label";

function EquationChip({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span
      className={
        accent
          ? "rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 text-xs font-bold uppercase tracking-wide text-background"
          : "rounded-full border border-border bg-white/[0.03] px-4 py-2 text-xs font-bold uppercase tracking-wide text-text"
      }
    >
      {children}
    </span>
  );
}

export function WhiteLabel() {
  return (
    <section id="white-label" className="relative overflow-x-clip py-24 sm:py-32">
      <Container className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col items-start gap-6">
          <Reveal>
            <SectionKicker>White Label &amp; Turnkey</SectionKicker>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight text-text sm:text-5xl">
              Your Brand.
              <br />
              <span className="text-gradient-accent">Our Technology.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
              Launch a gaming platform under your own brand while Octhera provides the
              technology behind the experience.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-wrap items-center gap-2.5">
              <EquationChip>Octhera Technology</EquationChip>
              <Plus className="h-4 w-4 text-muted" aria-hidden />
              <EquationChip>Your Brand</EquationChip>
              <ArrowRight className="h-4 w-4 text-muted" aria-hidden />
              <EquationChip accent>Your Gaming Platform</EquationChip>
            </div>
          </Reveal>

          <Reveal delay={0.26} className="grid w-full grid-cols-2 gap-x-4 gap-y-2.5 pt-2 sm:grid-cols-2">
            {WHITE_LABEL_FEATURES.map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-sm text-text/85">
                <Check className="h-4 w-4 shrink-0 text-primary-soft" aria-hidden />
                {feature}
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.32} className="pt-2">
            <Button href="#contact" variant="primary">
              Launch Your Brand
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.12} y={32}>
          <WhiteLabelVisual />
        </Reveal>
      </Container>
    </section>
  );
}
