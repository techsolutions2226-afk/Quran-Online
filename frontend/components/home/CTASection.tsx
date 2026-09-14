import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/constants/site";

export function CTASection() {
  return (
    <section className="section-pad pt-4">
      <Container>
        <div className="relative overflow-hidden rounded-[1.5rem] border border-border bg-aqua px-6 py-14 text-center md:px-12 md:py-16">
          <div className="pointer-events-none absolute inset-0 pattern-geo opacity-45" />
          <div className="relative mx-auto max-w-2xl">
            <div className="mb-5 flex justify-center">
              <Logo />
            </div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-teal">
              Begin with confidence
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-[1.15] text-balance text-navy md:text-4xl lg:text-[2.75rem]">
              Ready to Start Your{" "}
              <span className="text-teal">Quran Journey?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-text-muted md:text-base">
              Book a free trial class and experience calm, personal Quran
              learning with a qualified teacher — at a time that suits you.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href="/book-trial">Book Free Trial</Button>
              <Button
                href={siteConfig.whatsapp}
                variant="secondary"
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
