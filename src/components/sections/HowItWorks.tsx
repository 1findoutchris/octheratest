import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PROCESS_STEPS } from "@/data/process";

export function HowItWorks() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          align="center"
          kicker="How It Works"
          title="From Vision to Launch"
          description="A clear, guided path from first conversation to a live, scaling gaming platform."
          className="mx-auto max-w-3xl"
        />

        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
          />
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.index} delay={i * 0.12}>
              <div className="relative flex flex-col gap-4">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-surface font-display text-sm font-bold text-primary-soft shadow-[0_0_30px_-8px_rgb(from_var(--octhera-primary)_r_g_b/0.5)]">
                  {step.index}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-text">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
