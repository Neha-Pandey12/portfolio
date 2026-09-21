import { experiences } from "@/data/experience";
import Card from "./ui/Card";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="04. Experience" title="Experience">
      <div className="relative ml-2 border-l border-white/10 pl-8 sm:ml-3 sm:pl-10">
        <div className="space-y-8 sm:space-y-10">
          {experiences.map((exp, index) => (
            <Reveal
              key={`${exp.company}-${exp.role}`}
              delay={index * 100}
              className="relative"
            >
              <span
                aria-hidden
                className="absolute -left-[41px] top-8 sm:-left-[49px]"
              >
                <span
                  className={`block h-3.5 w-3.5 rounded-full border-2 border-zinc-950 ${
                    exp.current ? "pulse-ring relative bg-violet-400" : "bg-zinc-600"
                  }`}
                />
              </span>
              <Card className="p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-100">
                      {exp.role}
                    </h3>
                    <p className="mt-1 font-medium text-violet-300">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-2 sm:items-end">
                    <span className="font-mono text-xs text-zinc-400">
                      {exp.duration}
                    </span>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-1 text-xs font-medium text-violet-300">
                        <span
                          aria-hidden
                          className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400"
                        />
                        Present
                      </span>
                    )}
                  </div>
                </div>
                <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-zinc-400">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2.5">
                      <span
                        aria-hidden
                        className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-cyan-400/70"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
