import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICES } from "@/data/services";

export function Services() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          kicker="Services"
          title="Support Built Around Your Operation"
          description="Beyond core technology, Octhera's service layer keeps day-to-day operations running smoothly."
        />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 4) * 0.06}>
              <div className="group relative flex h-full flex-col gap-4 bg-surface p-7 transition-colors duration-300 hover:bg-surface-strong">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white/[0.03] text-primary-soft transition-colors duration-300 group-hover:border-primary/40">
                  <service.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-text">{service.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{service.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
