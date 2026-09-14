import { cn } from "@/lib/utils/cn";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export function Input({ className, error, id, ...props }: InputProps) {
  return (
    <div className="w-full">
      <input
        id={id}
        className={cn(
          "w-full rounded-[var(--radius-button)] border border-border bg-surface px-3.5 py-2.5 text-sm text-text",
          "placeholder:text-text-soft transition-colors duration-200",
          "hover:border-navy/20 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20",
          error && "border-red-400 focus:border-red-400 focus:ring-red-200",
          className,
        )}
        aria-invalid={Boolean(error)}
        aria-describedby={error && id ? `${id}-error` : undefined}
        {...props}
      />
      {error ? (
        <p id={id ? `${id}-error` : undefined} className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}
