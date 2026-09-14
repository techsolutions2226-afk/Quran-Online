import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { aboutContent } from "@/lib/data/about";

export const metadata: Metadata = {
  title: "About | Quran Online",
  description:
    "Learn about Quran Online — our mission, values, and approach to calm one-on-one Quran learning.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        label="About Us"
        title={
          <>
            A calmer way to <span className="text-teal">learn Quran</span>
          </>
        }
        description={aboutContent.mission}
      />

      <section className="pb-16 md:pb-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-teal">
                Our Story
              </p>
              <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl">
                Built for real families and real schedules
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-text-muted md:text-base">
                {aboutContent.story.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[var(--radius-image)] shadow-[0_20px_50px_rgb(26_53_80/0.12)]">
              <Image
                src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1200&q=80"
                alt="Student reading the Quran during a peaceful learning session"
                width={1200}
                height={900}
                className="aspect-[5/4] w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aboutContent.stats.map((stat) => (
              <div
                key={stat.label}
                className="card-surface px-5 py-6 text-center"
              >
                <p className="font-display text-3xl font-semibold text-navy">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-teal">
                Our Values
              </p>
              <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl">
                What guides every class
              </h2>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {aboutContent.values.map((value) => (
                <article key={value.title} className="card-surface p-6">
                  <h3 className="font-display text-xl font-semibold text-navy">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-16 rounded-[1.5rem] border border-border bg-aqua-soft px-6 py-10 text-center md:px-10">
            <h2 className="font-display text-3xl font-semibold text-navy">
              Ready to begin with us?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-text-muted">
              Start with a free trial class and experience personal Quran
              learning designed around your pace.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button href="/book-trial">Book Free Trial</Button>
              <Button href="/courses" variant="secondary">
                View Courses
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
