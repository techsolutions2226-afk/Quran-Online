import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  IconClock,
  IconOneOnOne,
  IconTeacher,
} from "@/components/shared/Icons";

const features = [
  {
    title: "Qualified Teachers",
    description: "Learn with experienced instructors who guide every student with care.",
    icon: IconTeacher,
  },
  {
    title: "One-on-One Classes",
    description: "Private sessions tailored to your level, pace, and learning goals.",
    icon: IconOneOnOne,
  },
  {
    title: "Flexible Timing",
    description: "Choose class times that fit your routine — mornings, evenings, or weekends.",
    icon: IconClock,
  },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 pattern-geo opacity-[0.55]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg via-bg/90 to-bg" />

      <Container className="relative pt-12 pb-8 md:pt-16 md:pb-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-teal">
              Online Quran Learning
            </p>
            <h1 className="font-display text-[2.6rem] font-semibold leading-[1.08] text-navy text-balance md:text-5xl lg:text-[3.35rem]">
              Making Quran Learning{" "}
              <span className="text-teal">Easy</span> for Everyone
            </h1>
            <p className="mt-5 max-w-lg text-[0.98rem] leading-relaxed text-text-muted md:text-base">
              Structured one-on-one Quran classes for kids and adults — with
              qualified teachers, flexible schedules, and a calm path from your
              first lesson to confident recitation.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/book-trial">Start Now</Button>
              <Button href="/courses" variant="secondary">
                Explore Courses
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[var(--radius-image)] shadow-[0_20px_50px_rgb(26_53_80/0.12)]">
              <Image
                src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1200&q=80"
                alt="Student reading the Quran during a calm learning session"
                width={1200}
                height={900}
                className="aspect-[5/4] w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:mt-16">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="card-surface flex gap-4 p-5 transition-shadow duration-200 hover:shadow-[var(--shadow-card-hover)]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-aqua text-navy">
                  <Icon className="h-[1.15rem] w-[1.15rem]" />
                </div>
                <div>
                  <h3 className="text-[0.95rem] font-semibold text-navy">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-muted">
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
