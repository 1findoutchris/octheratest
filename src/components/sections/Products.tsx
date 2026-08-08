import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PRODUCTS } from "@/data/products";
import { cn } from "@/lib/utils";

const SIZE_CLASSES: Record<(typeof PRODUCTS)[number]["size"], string> = {
  lg: "sm:col-span-2 sm:row-span-2 min-h-64",
  md: "sm:col-span-2 min-h-48",
  sm: "min-h-48",
};

export function Products() {
  return (
    <section id="products" className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          kicker="Products"
          title="Everything Your Gaming Brand Needs"
          description="A complete content and product ecosystem, accessible through one relationship with Octhera."
        />

        <div className="grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-4 sm:[grid-auto-flow:dense]">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.title} delay={(i % 4) * 0.06} className={SIZE_CLASSES[product.size]}>
              <div
                className={cn(
                  "group relative flex h-full flex-col justify-end overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-surface-strong to-surface p-6 transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40",
                  product.size === "lg" && "p-8"
                )}
              >
                <div
                  aria-hidden
                  className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br from-secondary/25 to-primary/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <product.icon
                  className={cn(
                    "mb-4 text-muted transition-colors duration-300 group-hover:text-primary-soft",
                    product.size === "lg" ? "h-9 w-9" : "h-7 w-7"
                  )}
                  strokeWidth={1.5}
                  aria-hidden
                />
                <h3
                  className={cn(
                    "font-display font-bold text-text",
                    product.size === "lg" ? "text-2xl sm:text-3xl" : "text-lg"
                  )}
                >
                  {product.title}
                </h3>
                <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-muted opacity-0 transition-all duration-500 group-hover:mt-3 group-hover:max-h-20 group-hover:opacity-100">
                  {product.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
