import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "icon";
type Size = "md" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400";

const variants: Record<Variant, string> = {
  primary:
    "bg-violet-600 text-white hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-950/60 active:scale-[0.98]",
  outline:
    "border border-zinc-700 text-zinc-200 hover:border-violet-500/60 hover:bg-violet-500/10 active:scale-[0.98]",
  icon: "border border-zinc-700 p-2.5 text-zinc-300 hover:border-violet-500/60 hover:text-white",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  sm: "px-3.5 py-2 text-xs",
};

export function buttonClasses(
  variant: Variant = "primary",
  size: Size = "md",
  extra = ""
) {
  return [
    base,
    variants[variant],
    variant === "icon" ? "" : sizes[size],
    extra,
  ]
    .filter(Boolean)
    .join(" ");
}

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  disabledReason?: string;
  newTab?: boolean;
  className?: string;
  ariaLabel?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  disabled = false,
  disabledReason,
  newTab = false,
  className = "",
  ariaLabel,
}: ButtonProps) {
  if (disabled) {
    return (
      <button
        type="button"
        disabled
        title={disabledReason ?? "Not available yet"}
        aria-label={ariaLabel}
        className={buttonClasses(variant, size, `pointer-events-none cursor-not-allowed opacity-50 ${className}`)}
      >
        {children}
      </button>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        className={buttonClasses(variant, size, className)}
      >
        {children}
      </a>
    );
  }
  return (
    <button type="button" aria-label={ariaLabel} className={buttonClasses(variant, size, className)}>
      {children}
    </button>
  );
}
