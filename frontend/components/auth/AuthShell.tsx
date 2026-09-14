import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { Container } from "@/components/ui/Container";

type AuthShellProps = {
  label: string;
  title: React.ReactNode;
  description: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export function AuthShell({
  label,
  title,
  description,
  children,
  footer,
}: AuthShellProps) {
  return (
    <section className="relative overflow-hidden section-pad">
      <div className="pointer-events-none absolute inset-0 pattern-geo opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg via-bg/92 to-bg" />

      <Container className="relative">
        <div className="mx-auto max-w-lg">
          <div className="mb-8 text-center">
            <div className="mb-5 flex justify-center">
              <Logo />
            </div>
            <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-teal">
              {label}
            </p>
            <h1 className="font-display text-3xl font-semibold text-navy md:text-4xl">
              {title}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-text-muted md:text-base">
              {description}
            </p>
          </div>

          <div className="card-surface p-6 md:p-8">{children}</div>

          {footer ? (
            <div className="mt-6 text-center text-sm text-text-muted">
              {footer}
            </div>
          ) : (
            <p className="mt-6 text-center text-sm text-text-muted">
              <Link href="/" className="font-medium text-navy hover:text-teal">
                Back to Home
              </Link>
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
