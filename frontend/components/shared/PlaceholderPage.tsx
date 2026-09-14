import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type PlaceholderPageProps = {
  title: string;
  description: string;
};

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <section className="section-pad">
      <Container className="max-w-2xl text-center">
        <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-teal">
          Coming soon
        </p>
        <h1 className="font-display text-4xl font-semibold text-navy md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-text-muted">
          {description}
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/">Back to Home</Button>
        </div>
      </Container>
    </section>
  );
}
