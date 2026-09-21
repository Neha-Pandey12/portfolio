"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/data/profile";
import Card from "./ui/Card";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";
import { buttonClasses } from "./ui/Button";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./ui/icons";

const inputClasses =
  "w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition-colors focus-visible:border-violet-500/60 focus-visible:ring-2 focus-visible:ring-violet-500/30";

const contactChannels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: MailIcon,
    external: false,
  },
  {
    label: "GitHub",
    value: "Neha-Pandey12",
    href: profile.github,
    icon: GitHubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "neha-pandey-295492384",
    href: profile.linkedin,
    icon: LinkedInIcon,
    external: true,
  },
];

export default function Contact() {
  const [notice, setNotice] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = `Portfolio message from ${name}`;
    const body = `${message}\n\n— ${name} (${email})`;
    // No backend is used: the visitor's mail client opens with everything prefilled.
    // To connect a backend later, replace this with e.g.:
    //   fetch("/api/contact", { method: "POST", body: JSON.stringify({ name, email, message }) })
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setNotice(
      `Your email client should now be opening with your message prefilled. If not, write to me directly at ${profile.email}.`
    );
    form.reset();
  }

  return (
    <Section id="contact" eyebrow="07. Contact" title="Get in Touch">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <div className="flex h-full flex-col gap-4">
            {contactChannels.map((channel) => (
              <Card key={channel.label} className="p-5">
                <a
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-500/25 bg-violet-500/10 text-violet-300 transition-colors group-hover:border-violet-500/50">
                    <channel.icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-zinc-200">
                      {channel.label}
                    </span>
                    <span className="block truncate text-sm text-zinc-500 transition-colors group-hover:text-zinc-300">
                      {channel.value}
                    </span>
                  </span>
                </a>
              </Card>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <Card className="h-full p-6 sm:p-8">
            <form onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-sm font-medium text-zinc-300"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-sm font-medium text-zinc-300"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-1.5 block text-sm font-medium text-zinc-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your idea, opportunity, or question..."
                    className={`${inputClasses} resize-y`}
                  />
                </div>
                <button type="submit" className={buttonClasses("primary", "md", "w-full sm:w-auto")}>
                  Send Message
                </button>
                <p role="status" aria-live="polite" className="text-sm text-cyan-300">
                  {notice}
                </p>
              </div>
            </form>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
