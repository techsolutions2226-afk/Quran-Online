import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
};

export function Logo({ className, variant = "dark" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex shrink-0 items-center overflow-visible",
        className,
      )}
      aria-label="Quran Online home"
    >
      {/* Native img avoids Next/Image wrapper clipping */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo/logo-horizontal.svg"
        alt="Quran Online"
        width={220}
        height={75}
        className={cn(
          "h-10 w-auto max-w-[13rem] object-contain object-left md:h-11",
          variant === "light" && "brightness-0 invert",
        )}
        style={{ overflow: "visible" }}
        decoding="async"
      />
    </Link>
  );
}
