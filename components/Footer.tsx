import { profile } from "@/data/profile";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./ui/icons";

const footerLinks = [
  {
    label: "GitHub",
    href: profile.github,
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: LinkedInIcon,
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: MailIcon,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 py-10 sm:px-6 md:flex-row md:justify-between lg:px-8">
        <div className="text-center md:text-left">
          <p className="font-semibold text-zinc-100">{profile.name}</p>
          <p className="mt-1 text-sm text-zinc-500">{profile.tagline}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex items-center gap-2">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={link.label}
                  className="rounded-md p-2 text-zinc-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/5 py-5 text-center text-xs text-zinc-500">
        © 2026 {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
