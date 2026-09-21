import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, eyebrow, title, children }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className="scroll-mt-16 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          {eyebrow && (
            <p className="font-mono text-sm text-cyan-400">{eyebrow}</p>
          )}
          <h2
            id={headingId}
            className="mt-2 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl"
          >
            {title}
          </h2>
          <div
            aria-hidden
            className="mt-4 h-px w-24 bg-gradient-to-r from-violet-500 to-cyan-500"
          />
        </Reveal>
        <div className="mt-10 sm:mt-12">{children}</div>
      </div>
    </section>
  );
}
