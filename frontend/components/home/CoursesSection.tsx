import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { IconArrowRight } from "@/components/shared/Icons";
import { Container } from "@/components/ui/Container";
import { coursesData } from "@/lib/data/courses";

export function CoursesSection() {
  return (
    <section className="section-pad">
      <Container>
        <SectionHeading
          label="Our Courses"
          title={
            <>
              Learn at Your <span className="text-teal">Own Pace</span>
            </>
          }
          description="Choose a path that matches your level — from first letters to confident memorization."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {coursesData.map((course) => {
            const Icon = course.icon;
            return (
              <article
                key={course.slug}
                className="card-surface flex h-full flex-col p-6 transition-shadow duration-200 hover:shadow-[var(--shadow-card-hover)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-aqua text-navy">
                    <Icon />
                  </div>
                  <span className="text-xs font-semibold tracking-wider text-text-soft">
                    {course.number}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-navy">
                  {course.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-text-muted">
                  {course.shortDescription}
                </p>
                <Link
                  href={`/courses#${course.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-teal"
                >
                  Learn More
                  <IconArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
