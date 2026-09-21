import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition duration-300 hover:border-violet-500/40 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-violet-950/50 ${className}`}
    >
      {children}
    </div>
  );
}
