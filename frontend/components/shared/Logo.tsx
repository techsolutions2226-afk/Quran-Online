import Image from "next/image";
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
      className={cn("inline-flex items-center", className)}
      aria-label="Quran Online home"
    >
      <Image
        src="/logo/logo-horizontal.svg"
        alt="Quran Online"
        width={220}
        height={77}
        priority
        unoptimized
        className={cn(
          "h-11 w-auto md:h-12",
          variant === "light" && "brightness-0 invert",
        )}
      />
    </Link>
  );
}
