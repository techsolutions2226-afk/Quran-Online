import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { IconQuote } from "@/components/shared/Icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { testimonialsData } from "@/lib/data/about";

export const metadata: Metadata = {
  title: "Testimonials | Quran Online",
  description:
    "Read what students and families say about learning Quran online with us.",
};

export default function TestimonialsPage() {
  return (
    <main>
      <PageHero
        label="Student Experiences"
        title={
          <>
            What Our <span className="text-teal">Students Say</span>
          </>
        }
        description="Real experiences from families and learners building a steady relationship with the Quran."
      />

      <section className="pb-16 md:pb-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonialsData.map((item) => (
              <article
                key={item.name}
                className="card-surface flex h-full flex-col p-7"
              >
                <IconQuote className="text-teal/70" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-text-muted">
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

          <div className="mt-12 rounded-[1.5rem] border border-border bg-aqua-soft px-6 py-10 text-center md:px-10">
            <h2 className="font-display text-3xl font-semibold text-navy">
              Start your own learning story
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-text-muted">
              Book a free trial and experience personal Quran classes designed
              around your pace and schedule.
            </p>
            <div className="mt-6 flex justify-center">
              <Button href="/book-trial">Book Free Trial</Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
