import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionKicker } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IntroVisual } from "@/components/sections/IntroVisual";
import { INTRO_FEATURES } from "@/data/intro-features";

export function Introduction() {
  return (
    <section className="relative overflow-x-clip py-24 sm:py-32">
      <Container className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col items-start gap-6">
          <Reveal>
            <SectionKicker>Why Octhera</SectionKicker>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight text-frost sm:text-5xl">
              Build Your Gaming Business with Octhera
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-mist sm:text-lg">
              Octhera provides the technology and infrastructure companies need to build
              their own gaming brands — from platform architecture to content access,
              designed to move fast without compromising on control.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="grid w-full grid-cols-2 gap-3 pt-2 sm:grid-cols-3">
            {INTRO_FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="flex items-center gap-2.5 rounded-xl border border-ink-soft bg-white/[0.02] px-3.5 py-3"
              >
                <feature.icon className="h-4 w-4 shrink-0 text-cyan-soft" aria-hidden />
                <span className="text-sm text-frost/90">{feature.title}</span>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.28} className="pt-2">
            <Button href="#solutions" variant="secondary">
              Discover Octhera
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.1} y={32}>
          <IntroVisual />
        </Reveal>
      </Container>
    </section>
  );
}
