import Link from "next/link";
import {
  IconArrowRight,
  IconMeet,
  IconWhatsApp,
  IconZoom,
} from "@/components/shared/Icons";
import { Container } from "@/components/ui/Container";

const platforms = [
  {
    name: "Zoom",
    description:
      "Join structured live sessions with screen sharing and clear audio for focused learning.",
    icon: IconZoom,
  },
  {
    name: "WhatsApp",
    description:
      "Take convenient video classes and stay connected with lesson reminders and support.",
    icon: IconWhatsApp,
  },
  {
    name: "Google Meet",
    description:
      "Learn through simple, browser-friendly meetings that work on any device.",
    icon: IconMeet,
  },
];

export function PlatformsSection() {
  return (
    <section className="bg-navy section-pad">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold leading-[1.15] text-balance text-white md:text-4xl lg:text-[2.75rem]">
            Classes on the platforms you{" "}
            <span className="text-teal">already use</span>
          </h2>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-white/65 md:text-base">
            Choose the tool that feels most comfortable — we meet students where
            they already learn and communicate.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {platforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <article
                key={platform.name}
                className="rounded-[var(--radius-card)] border border-white/10 bg-navy-soft p-7 transition-colors duration-200 hover:border-white/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-aqua">
                  <Icon />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-white">
                  {platform.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {platform.description}
                </p>
                <Link
                  href="/book-trial"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-aqua transition-colors hover:text-white"
                >
                  Book a class
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
