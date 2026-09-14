import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { IconArrowRight } from "@/components/shared/Icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { coursesData } from "@/lib/data/courses";

export const metadata: Metadata = {
  title: "Courses | Quran Online",
  description:
    "Explore Qaida, Tajweed, Hifz, and Arabic courses with one-on-one online teachers.",
};

export default function CoursesPage() {
  return (
    <main>
      <PageHero
        label="Our Courses"
        title={
          <>
            Learn at Your <span className="text-teal">Own Pace</span>
          </>
        }
        description="Choose a path that matches your level — from first letters to confident memorization and Arabic understanding."
      />

      <section className="pb-16 md:pb-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {coursesData.map((course) => {
              const Icon = course.icon;
              return (
                <article
                  key={course.slug}
                  id={course.slug}
                  className="card-surface flex h-full flex-col p-7 md:p-8"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-aqua text-navy">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold tracking-wider text-text-soft">
                      {course.number}
                    </span>
                  </div>

                  <h2 className="mt-5 font-display text-2xl font-semibold text-navy">
                    {course.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {course.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-aqua-soft px-3 py-1 text-xs font-medium text-navy">
                      {course.level}
                    </span>
                    <span className="rounded-full bg-aqua-soft px-3 py-1 text-xs font-medium text-navy">
                      {course.format}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-2.5">
                    {course.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-text-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7">
                    <Link
                      href="/book-trial"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-teal"
                    >
                      Book a free trial
                      <IconArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 rounded-[1.5rem] border border-border bg-aqua-soft px-6 py-10 text-center md:px-10">
            <h2 className="font-display text-3xl font-semibold text-navy">
              Not sure which course to choose?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-text-muted">
              Book a free trial and we will help you find the right starting
              point based on your level and goals.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button href="/book-trial">Book Free Trial</Button>
              <Button href="/contact" variant="secondary">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
