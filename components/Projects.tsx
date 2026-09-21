import Image from "next/image";
import { projects } from "@/data/projects";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import Card from "./ui/Card";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";
import { FolderIcon, GitHubIcon } from "./ui/icons";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="03. Projects" title="Projects">
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 100} className="h-full">
            <Card className="flex h-full flex-col p-6 sm:p-8">
              {project.image && (
                <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-900">
                  <Image
                    src={project.image}
                    alt={`${project.title} landing page`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-zinc-100">
                  {project.title}
                </h3>
                <FolderIcon className="mt-0.5 h-6 w-6 shrink-0 text-violet-400/70" />
              </div>
              <p className="mt-3 leading-relaxed text-zinc-400">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} tone="neutral">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3 pt-2 lg:mt-auto">
                <Button
                  href={project.githubUrl}
                  newTab
                  variant="outline"
                  size="sm"
                  disabled={!project.githubUrl}
                  disabledReason="GitHub repository link is not available yet"
                >
                  <GitHubIcon className="h-4 w-4" />
                  GitHub
                </Button>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
