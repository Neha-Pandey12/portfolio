import { profile } from "@/data/profile";
import Card from "./ui/Card";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";

const focusAreas = [
  "Agentic AI",
  "Generative AI",
  "Large Language Models (LLMs)",
  "MCP",
  "Machine Learning",
  "Modern Web Technologies",
];

export default function About() {
  return (
    <Section id="about" eyebrow="01. About Me" title="About Me">
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Reveal>
          <Card className="h-full p-6 sm:p-8">
            <p className="text-lg font-medium leading-relaxed text-zinc-200">
              {profile.heroIntro}
            </p>
            <div className="mt-6 space-y-4 leading-relaxed text-zinc-400">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Card>
        </Reveal>
        <Reveal delay={120}>
          <Card className="h-full p-6 sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-violet-300">
              Currently
            </h3>
            <p className="mt-3 font-medium text-zinc-100">
              AI Product Engineer Intern
            </p>
            <p className="mt-0.5 text-sm text-zinc-400">
              Nexalaris Tech Pvt. Ltd.
            </p>
            <div className="my-6 h-px bg-white/10" />
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
              Focus Areas
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-400">
              {focusAreas.map((area) => (
                <li key={area} className="flex items-center gap-2.5">
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400"
                  />
                  {area}
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
