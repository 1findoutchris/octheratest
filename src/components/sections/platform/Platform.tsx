import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { DashboardMockup } from "@/components/sections/platform/DashboardMockup";

export function Platform() {
  return (
    <section id="platform" className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          align="center"
          kicker="Operator Platform"
          title="Control Your Entire Operation"
          description="A centralized back office designed to give operators visibility and control across players, content, transactions and performance."
          className="mx-auto max-w-3xl"
        />
        <Reveal delay={0.1}>
          <DashboardMockup />
        </Reveal>
      </Container>
    </section>
  );
}
