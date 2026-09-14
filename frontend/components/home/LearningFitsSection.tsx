import Image from "next/image";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  IconCalendar,
  IconCheck,
  IconHome,
  IconOneOnOne,
  IconTeacher,
  IconVideo,
} from "@/components/shared/Icons";
import { Container } from "@/components/ui/Container";

const benefits = [
  {
    title: "Learn from home",
    description: "Comfortable classes without travel or waiting rooms.",
    icon: IconHome,
  },
  {
    title: "Personal attention",
    description: "One teacher focused on your progress every session.",
    icon: IconOneOnOne,
  },
  {
    title: "Flexible schedule",
    description: "Book times around school, work, and family life.",
    icon: IconCalendar,
  },
  {
    title: "Expert guidance",
    description: "Clear corrections and encouragement at every step.",
    icon: IconTeacher,
  },
  {
    title: "Live online classes",
    description: "Interactive lessons on the platforms you already use.",
    icon: IconVideo,
  },
  {
    title: "Steady progress",
    description: "A calm structure that builds confidence over time.",
    icon: IconCheck,
  },
];

export function LearningFitsSection() {
  return (
    <section className="section-pad pt-0 md:pt-0">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              label="Why Quran Online"
              title={
                <>
                  Learning That{" "}
                  <span className="text-teal">Fits Your Life</span>
                </>
              }
              description="Whether you are starting as a beginner or returning to refine your recitation, our approach stays simple, personal, and consistent."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="flex gap-3">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-aqua text-teal">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-navy">
                        {benefit.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-text-muted">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="overflow-hidden rounded-[var(--radius-image)] shadow-[0_20px_50px_rgb(26_53_80/0.12)]">
            <Image
              src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=1200&q=80"
              alt="Student learning the Quran online through a one-on-one video class"
              width={1200}
              height={900}
              className="aspect-[5/4] w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
