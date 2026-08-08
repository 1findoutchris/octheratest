import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlobalNetwork } from "@/components/sections/global/GlobalNetwork";
import { GLOBAL_CAPABILITIES } from "@/data/global-infrastructure";

export function GlobalInfrastructure() {
  return (
    <section className="relative overflow-hidden bg-surface/40 py-24 sm:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          align="center"
          kicker="Global Infrastructure"
          title="Technology Without Borders"
          description="Octhera's architecture is built to support operators reaching players across regions, currencies and languages."
          className="mx-auto max-w-3xl"
        />

        <Reveal delay={0.1}>
          <GlobalNetwork />
        </Reveal>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {GLOBAL_CAPABILITIES.map((item, i) => (
            <Reveal key={item} delay={0.15 + i * 0.06}>
              <span className="rounded-full border border-border bg-white/[0.02] px-4 py-2 text-sm text-text/85">
                {item}
              </span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
