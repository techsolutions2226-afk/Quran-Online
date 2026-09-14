import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/constants/site";

const contactDetails = [
  {
    title: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    title: "WhatsApp",
    value: "Chat with our team",
    href: siteConfig.whatsapp,
  },
  {
    title: "Class platforms",
    value: "Zoom, WhatsApp & Google Meet",
    href: null,
  },
  {
    title: "Response time",
    value: "Usually within 24 hours",
    href: null,
  },
];

export const metadata: Metadata = {
  title: "Contact | Quran Online",
  description:
    "Contact Quran Online for course questions, trial bookings, and learning support.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        label="Contact"
        title={
          <>
            We are here to <span className="text-teal">help</span>
          </>
        }
        description="Ask about courses, schedules, or booking a free trial. Our team will guide you with clear next steps."
      />

      <section className="pb-16 md:pb-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
            <div>
              <h2 className="font-display text-3xl font-semibold text-navy">
                Get in touch
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-text-muted md:text-base">
                Prefer messaging us directly? Use the details below, or send a
                note through the form and we will respond as soon as possible.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {contactDetails.map((item) => (
                  <div key={item.title} className="card-surface p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
                      {item.title}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          item.href.startsWith("http") ? "noreferrer" : undefined
                        }
                        className="mt-2 block text-sm font-medium text-navy transition-colors hover:text-teal"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-2 text-sm font-medium text-navy">
                        {item.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>
    </main>
  );
}
