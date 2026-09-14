"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { IconClose, IconMenu } from "@/components/shared/Icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils/cn";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-soft/80 bg-bg/90 backdrop-blur-md">
      <Container className="flex h-[4.75rem] items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.9rem] font-medium text-text-muted transition-colors duration-200 hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/login"
            className="text-[0.9rem] font-medium text-text-muted transition-colors duration-200 hover:text-navy"
          >
            Log in
          </Link>
          <Button href="/book-trial" size="sm">
            Book Free Trial
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex cursor-pointer items-center justify-center rounded-lg p-2 text-navy lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </Container>

      <div
        className={cn(
          "border-t border-border-soft bg-bg lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-text-muted transition-colors hover:bg-aqua-soft hover:text-navy"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-2" onClick={() => setOpen(false)}>
            <Link
              href="/login"
              className="rounded-lg px-3 py-2.5 text-center text-sm font-medium text-text-muted transition-colors hover:bg-aqua-soft hover:text-navy"
            >
              Log in
            </Link>
            <Button href="/book-trial" className="w-full">
              Book Free Trial
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
