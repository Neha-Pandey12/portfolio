import {
  certifications,
  type CertificationType,
} from "@/data/certifications";
import Badge from "./ui/Badge";
import Card from "./ui/Card";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";
import { AwardIcon } from "./ui/icons";

const typeTones: Record<CertificationType, "violet" | "cyan"> = {
  Certification: "violet",
  Hackathon: "cyan",
  Workshop: "violet",
};

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="06. Certifications"
      title="Certifications & Activities"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {certifications.map((cert, index) => (
          <Reveal key={cert.title} delay={index * 80} className="h-full">
            <Card className="h-full p-6">
              <div className="flex items-center justify-between gap-3">
                <Badge tone={typeTones[cert.type]}>{cert.type}</Badge>
                <AwardIcon className="h-5 w-5 text-zinc-600" />
              </div>
              <h3 className="mt-4 font-semibold leading-snug text-zinc-100">
                {cert.title}
              </h3>
              {cert.organization && (
                <p className="mt-1.5 text-sm text-zinc-400">
                  {cert.organization}
                </p>
              )}
              {cert.description && (
                <p className="mt-3 text-sm text-zinc-400">{cert.description}</p>
              )}
              {cert.skillsGained && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {cert.skillsGained.map((skill) => (
                    <Badge key={skill} tone="neutral">
                      {skill}
                    </Badge>
                  ))}
                </div>
              )}
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
