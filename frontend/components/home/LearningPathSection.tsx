import Image from "next/image";
import { Container } from "@/components/ui/Container";

const stages = [
  { number: "01", title: "Assess", description: "Understand your current level and goals." },
  { number: "02", title: "Learn", description: "Follow clear lessons matched to your pace." },
  { number: "03", title: "Correct", description: "Refine pronunciation with teacher guidance." },
  { number: "04", title: "Revise", description: "Strengthen retention through guided review." },
  { number: "05", title: "Advance", description: "Move forward with confidence and clarity." },
];

export function LearningPathSection() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-[1.5rem] border border-border/70 bg-[#e8f2f0] px-6 py-10 md:px-10 md:py-12 lg:px-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              backgroundImage: 'url("/patterns/geo-diamond-light.svg")',
              backgroundSize: "28px 28px",
              backgroundRepeat: "repeat",
            }}
            aria-hidden
          />

          <div className="relative grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:gap-14 xl:gap-16">
            {/* Left: logo + label + description */}
            <div className="max-w-sm">
              <div className="flex h-24 w-24 items-center justify-center overflow-visible md:h-28 md:w-28">
                <Image
                  src="/logo/logo-mark.svg"
                  alt="Quran Online"
                  width={112}
                  height={112}
                  unoptimized
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="mt-6">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-navy">
                  Personal Path to Progress
                </p>
                <span
                  className="mt-2.5 block h-px w-10 bg-navy/35"
                  aria-hidden
                />
              </div>

              <p className="mt-4 max-w-[17rem] text-sm leading-relaxed text-text-muted">
                A simple five-stage journey designed to keep learning calm,
                structured, and measurable from your first class onward.
              </p>
            </div>

            {/* Right: five stages — no cards */}
            <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5 xl:gap-6">
              {stages.map((stage) => (
                <li key={stage.title} className="min-w-0 pt-0">
                  <span
                    className="mb-4 block h-px w-full bg-navy/20"
                    aria-hidden
                  />
                  <span className="text-[0.7rem] font-medium tracking-[0.08em] text-text-muted">
                    {stage.number}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold leading-none text-navy md:text-[1.35rem]">
                    {stage.title}
                  </h3>
                  <p className="mt-2.5 text-[0.8rem] leading-relaxed text-text-muted">
                    {stage.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
