import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { PLATFORM_STATS } from "@/data/stats";

export function PlatformStats() {
  return (
    <section className="relative border-y border-border/60 bg-surface/40">
      <Container>
        <div className="grid grid-cols-2 divide-x divide-y divide-border/60 lg:grid-cols-4 lg:divide-y-0">
          {PLATFORM_STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} y={16}>
              <div className="flex flex-col items-center gap-2 px-4 py-10 text-center sm:py-12">
                <p className="font-display text-4xl font-bold text-gradient-accent sm:text-5xl">
                  <AnimatedNumber value={stat.value} decimals={stat.value % 1 !== 0 ? 1 : 0} />
                  {stat.suffix}
                </p>
                <p className="max-w-[16ch] text-sm text-muted">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
