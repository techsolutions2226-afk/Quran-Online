import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  IconBook,
  IconCalendar,
  IconVideo,
} from "@/components/shared/Icons";
import { Container } from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Choose Your Course",
    description:
      "Select the program that matches your level — from Qaida to Hifz and Arabic.",
    icon: IconBook,
  },
  {
    number: "02",
    title: "Book Your Free Trial",
    description:
      "Schedule a complimentary session so we can understand your goals and pace.",
    icon: IconCalendar,
  },
  {
    number: "03",
    title: "Start Learning Online",
    description:
      "Join live one-on-one classes on Zoom, WhatsApp, or Google Meet.",
    icon: IconVideo,
  },
];

export function ThreeStepsSection() {
  return (
    <section className="section-pad pt-2">
      <Container>
        <SectionHeading
          label="Simply to Begin"
          title={
            <>
              Start Learning in <span className="text-teal">3 Steps</span>
            </>
          }
          description="A clear onboarding path — no complicated setup, just a calm start."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.title}
                className="card-surface flex h-full flex-col items-start p-7 transition-shadow duration-200 hover:shadow-[var(--shadow-card-hover)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="mt-5 text-xs font-semibold tracking-wider text-text-soft">
                  Step {step.number}
                </span>
                <h3 className="mt-2 font-display text-2xl font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
