import { education } from "@/data/education";
import Card from "./ui/Card";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";
import { GraduationCapIcon } from "./ui/icons";

export default function Education() {
  return (
    <Section id="education" eyebrow="05. Education" title="Education">
      <div className="max-w-3xl">
        {education.map((item) => (
          <Reveal key={item.school}>
            <Card className="p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
                <div className="flex gap-4">
                  <GraduationCapIcon className="mt-1 h-8 w-8 shrink-0 text-violet-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-100">
                      {item.degree}
                    </h3>
                    <p className="mt-1 font-medium text-zinc-300">
                      {item.school}
                    </p>
                    <p className="mt-0.5 text-sm text-zinc-500">
                      {item.location}
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs text-cyan-300">
                  {item.duration}
                </span>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
