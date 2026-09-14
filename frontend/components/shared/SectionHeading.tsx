import { cn } from "@/lib/utils/cn";

type SectionHeadingProps = {
  label?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {label ? (
        <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-teal">
          {label}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl font-semibold leading-[1.15] text-balance text-navy md:text-4xl lg:text-[2.75rem]",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[0.95rem] leading-relaxed text-text-muted md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
