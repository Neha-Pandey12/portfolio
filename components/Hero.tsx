import { profile } from "@/data/profile";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import { ArrowRightIcon, GitHubIcon, LinkedInIcon } from "./ui/icons";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden"
    >
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_65%_at_50%_35%,black_25%,transparent_75%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[44rem] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 right-[-6rem] h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <p className="font-mono text-sm text-cyan-400">
              {"// Hi, I am Neha"}
            </p>
            <h1
              id="hero-heading"
              className="mt-4 text-4xl font-bold tracking-tight text-zinc-50 sm:text-6xl lg:text-7xl"
            >
              Neha Kumari Pandey
            </h1>
            <p className="mt-4 text-2xl font-semibold text-zinc-200 sm:text-3xl">
              AI Developer
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Building intelligent applications with{" "}
              <span className="text-zinc-200">Agentic AI</span>,{" "}
              <span className="text-zinc-200">Generative AI</span>,{" "}
              <span className="text-zinc-200">MCP</span>, and modern web
              technologies.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge tone="violet">Agentic AI</Badge>
              <Badge tone="cyan">Generative AI</Badge>
              <Badge tone="violet">LLMs</Badge>
              <Badge tone="cyan">MCP</Badge>
              <Badge tone="violet">Machine Learning</Badge>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="#projects" variant="primary">
                View My Projects
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
              <Button href="#contact" variant="outline">
                Contact Me
              </Button>
              <Button
                href={profile.github}
                newTab
                variant="icon"
                ariaLabel="GitHub profile"
              >
                <GitHubIcon className="h-5 w-5" />
              </Button>
              <Button
                href={profile.linkedin}
                newTab
                variant="icon"
                ariaLabel="LinkedIn profile"
              >
                <LinkedInIcon className="h-5 w-5" />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
