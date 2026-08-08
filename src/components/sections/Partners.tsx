import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PARTNERS } from "@/data/partners";

export function Partners() {
  const loop = [...PARTNERS, ...PARTNERS];

  return (
    <section id="partners" className="relative overflow-hidden py-24 sm:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          align="center"
          kicker="Partners &amp; Providers"
          title="Trusted Technology Connections"
          description="Octhera works alongside a network of technology and content partners. Provider logos shown below are placeholders pending confirmed branding."
          className="mx-auto max-w-3xl"
        />
      </Container>

      <Reveal>
        <div className="mask-fade-x relative">
          <div className="flex w-max animate-marquee gap-4 py-2 hover:[animation-play-state:paused]">
            {loop.map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="flex h-20 w-48 shrink-0 items-center justify-center rounded-xl border border-ink-soft bg-white/[0.02] text-sm font-semibold uppercase tracking-wider text-mist"
              >
                {partner.name}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
