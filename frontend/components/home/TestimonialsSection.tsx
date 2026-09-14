import { IconQuote } from "@/components/shared/Icons";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Container } from "@/components/ui/Container";
import { testimonialsData } from "@/lib/data/about";

export function TestimonialsSection() {
  const featured = testimonialsData.slice(0, 3);

  return (
    <section className="section-pad">
      <Container>
        <SectionHeading
          label="Student Experiences"
          title={
            <>
              What Our <span className="text-teal">Students Say</span>
            </>
          }
          description="Real experiences from families and learners building a steady relationship with the Quran."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {featured.map((item) => (
            <article
              key={item.name}
              className="card-surface flex h-full flex-col p-7 transition-shadow duration-200 hover:shadow-[var(--shadow-card-hover)]"
            >
              <IconQuote className="text-teal/70" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-text-muted md:text-[0.95rem]">
                “{item.quote}”
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-border-soft pt-5">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-aqua text-sm font-semibold text-navy"
                  aria-hidden
                >
                  {item.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">{item.name}</p>
                  <p className="text-xs text-text-muted">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
