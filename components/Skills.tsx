import { skillCategories } from "@/data/skills";
import Badge from "./ui/Badge";
import Card from "./ui/Card";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="02. Skills" title="Skills & Technologies">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <Reveal key={category.title} delay={index * 80} className="h-full">
            <Card className="h-full p-6">
              <h3 className="flex items-center gap-2.5 font-semibold text-zinc-100">
                <span
                  aria-hidden
                  className={`h-2 w-2 shrink-0 rounded-full ${
                    index % 2 === 0 ? "bg-violet-400" : "bg-cyan-400"
                  }`}
                />
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    tone={index % 2 === 0 ? "violet" : "cyan"}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
