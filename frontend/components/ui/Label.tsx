import { cn } from "@/lib/utils/cn";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export function Label({ className, children, ...props }: LabelProps) {
  return (
    <label
      className={cn(
        "mb-1.5 block text-sm font-medium text-navy",
        className,
      )}
      {...props}
    >
      {children}
    </label>
  );
}
