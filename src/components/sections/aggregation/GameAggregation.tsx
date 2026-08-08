import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { GlowOrb } from "@/components/ui/GridBackground";
import { AggregationFlow } from "@/components/sections/aggregation/AggregationFlow";
import { AGGREGATION_FEATURES } from "@/data/aggregation";

export function GameAggregation() {
  return (
    <section id="aggregation" className="relative overflow-x-clip py-24 sm:py-32">
      <GlowOrb color="secondary" className="left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2" />
      <Container className="relative flex flex-col gap-16">
        <SectionHeading
          align="center"
          kicker="Game Aggregation"
          title={
            <>
              One Integration.
              <br />
              <span className="text-gradient-accent">A World of Gaming Content.</span>
            </>
          }
          description="Connect once through Octhera's API and reach a growing library of gaming content — without managing every provider relationship yourself."
          className="mx-auto max-w-3xl"
        />

        <Reveal delay={0.1}>
          <AggregationFlow />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AGGREGATION_FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 0.08}>
              <div className="flex items-start gap-3.5 rounded-xl border border-border bg-white/[0.02] p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-white/[0.03] text-primary-soft">
                  <feature.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold text-text">{feature.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{feature.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="flex justify-center">
          <Button href="#contact" variant="primary">
            Explore Game Aggregation
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
