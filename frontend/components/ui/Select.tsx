import { cn } from "@/lib/utils/cn";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  error?: string;
  options: Array<{ value: string; label: string }>;
  placeholder?: string;
};

export function Select({
  className,
  error,
  id,
  options,
  placeholder = "Select an option",
  ...props
}: SelectProps) {
  return (
    <div className="w-full">
      <select
        id={id}
        className={cn(
          "w-full cursor-pointer appearance-none rounded-[var(--radius-button)] border border-border bg-surface px-3.5 py-2.5 text-sm text-text",
          "bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat",
          "hover:border-navy/20 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20",
          error && "border-red-400 focus:border-red-400 focus:ring-red-200",
          className,
        )}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='%236b7685' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
        }}
        aria-invalid={Boolean(error)}
        aria-describedby={error && id ? `${id}-error` : undefined}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? (
        <p id={id ? `${id}-error` : undefined} className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}
