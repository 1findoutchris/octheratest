import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WhyOctheraDiagram } from "@/components/sections/why/WhyOctheraDiagram";
import { ADVANTAGES } from "@/data/why-octhera";

export function WhyOcthera() {
  return (
    <section id="why-octhera" className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          align="center"
          kicker="Why Octhera"
          title={
            <>
              Built for Operators.
              <br />
              <span className="text-gradient-accent">Engineered to Scale.</span>
            </>
          }
          description="Every part of Octhera's technology is built around what operators actually need to run and grow a gaming business."
          className="mx-auto max-w-3xl"
        />

        <WhyOctheraDiagram />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:hidden">
          {ADVANTAGES.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 0.06}>
              <div className="flex flex-col items-center gap-2.5 rounded-xl border border-ink-soft bg-white/[0.02] p-5 text-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-soft bg-white/[0.03] text-cyan-soft">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <span className="text-xs font-medium text-frost/90">{item.title}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
