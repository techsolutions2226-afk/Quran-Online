import { cn } from "@/lib/utils/cn";
import { Container } from "@/components/ui/Container";

type PageHeroProps = {
  label: string;
  title: React.ReactNode;
  description: string;
  className?: string;
};

export function PageHero({
  label,
  title,
  description,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden pt-12 pb-8 md:pt-16 md:pb-10", className)}>
      <div className="pointer-events-none absolute inset-0 pattern-geo opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg via-bg/90 to-bg" />
      <Container className="relative max-w-3xl text-center">
        <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-teal">
          {label}
        </p>
        <h1 className="font-display text-4xl font-semibold leading-[1.12] text-balance text-navy md:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-muted">
          {description}
        </p>
      </Container>
    </section>
  );
}
