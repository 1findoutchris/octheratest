import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Octhera handles data across its website and B2B gaming technology services.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1 pt-32 pb-24">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl font-bold text-text">Privacy Policy</h1>
        <p className="mt-6 text-sm leading-relaxed text-muted">
          This page is a placeholder. Octhera&rsquo;s full privacy policy, describing how
          data is collected, used and protected across our website and B2B services, will
          be published here.
        </p>
      </Container>
    </main>
  );
}
