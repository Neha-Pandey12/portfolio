import type { ReactNode } from "react";

const tones = {
  violet: "border-violet-500/25 bg-violet-500/10 text-violet-200",
  cyan: "border-cyan-500/25 bg-cyan-500/10 text-cyan-200",
  neutral: "border-white/10 bg-white/5 text-zinc-300",
} as const;

interface BadgeProps {
  children: ReactNode;
  tone?: keyof typeof tones;
}

export default function Badge({ children, tone = "violet" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
