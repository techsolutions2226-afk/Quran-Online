import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/constants/site";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Blogs", href: "/blogs" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
  { label: "Book Free Trial", href: "/book-trial" },
];

const courseLinks = [
  { label: "Qaida & Nazra", href: "/courses" },
  { label: "Quran Reading & Tajweed", href: "/courses" },
  { label: "Hifz & Quran Memorization", href: "/courses" },
  { label: "Arabic Language", href: "/courses" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <Container className="section-pad !pb-10 !pt-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="max-w-xs">
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              A calm, structured way to learn the Quran online with qualified
              teachers — at your pace, from home.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">
              Courses
            </h3>
            <ul className="mt-4 space-y-2.5">
              {courseLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/65">
              <li>
                <a
                  href={siteConfig.whatsapp}
                  className="transition-colors hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="pt-1 leading-relaxed">
                Classes available on Zoom, WhatsApp &amp; Google Meet
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Quran Online. All rights reserved.</p>
          <p>Learn with clarity, consistency, and care.</p>
        </div>
      </Container>
    </footer>
  );
}
