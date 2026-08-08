import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionKicker } from "@/components/ui/SectionHeading";
import { GridBackground, GlowOrb } from "@/components/ui/GridBackground";
import { CONTACT_EMAIL } from "@/lib/site-config";

export function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-36">
      <GridBackground className="opacity-40" />
      <GlowOrb color="cyan" className="left-1/4 top-0 h-[440px] w-[440px]" />
      <GlowOrb color="violet" className="right-1/4 bottom-0 h-[440px] w-[440px]" />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink-soft/60"
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[45vmin] w-[45vmin] -translate-x-1/2 -translate-y-1/2 animate-pulse-soft rounded-full border border-cyan/20"
      />

      <Container className="relative flex flex-col items-center gap-8 text-center">
        <Reveal>
          <SectionKicker>Let&rsquo;s Build Together</SectionKicker>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="max-w-3xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-frost sm:text-6xl">
            Ready to Build
            <br />
            <span className="text-gradient-accent">Your Gaming Brand?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-mist sm:text-lg">
            Talk to Octhera about the technology behind your next gaming platform.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button href={`mailto:${CONTACT_EMAIL}`} variant="primary">
              Start a Conversation
            </Button>
            <Button href="#solutions" variant="secondary" showArrow={false}>
              Explore Solutions
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
