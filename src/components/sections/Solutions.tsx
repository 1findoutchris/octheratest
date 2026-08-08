import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlowCard } from "@/components/ui/GlowCard";
import { SOLUTIONS } from "@/data/solutions";

export function Solutions() {
  return (
    <section id="solutions" className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          kicker="Solutions"
          title={
            <>
              One Platform.
              <br />
              <span className="text-gradient-accent">Multiple Possibilities.</span>
            </>
          }
          description="Whichever path fits your business, Octhera's technology adapts to how you want to launch and operate."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {SOLUTIONS.map((solution, i) => (
            <Reveal key={solution.title} delay={(i % 3) * 0.08}>
              <GlowCard>
                <div className="flex flex-col gap-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-white/[0.03] text-primary-soft transition-colors duration-300 group-hover:border-primary/40 group-hover:text-primary">
                    <solution.icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-xl font-bold text-text">
                      {solution.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">{solution.description}</p>
                  </div>
                  <a
                    href="#contact"
                    className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-soft transition-colors hover:text-primary"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
