import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { Mail, Linkedin, Github, FileDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Card = {
  href: string;
  label: string;
  value: string;
  icon: LucideIcon;
  download?: boolean;
  external?: boolean;
};

const CARDS: Card[] = [
  {
    href: "mailto:sinethembamdluli7274@gmail.com",
    label: "Email",
    value: "sinethembamdluli7274@gmail.com",
    icon: Mail,
  },
  {
    href: "https://linkedin.com/in/Sinethemba-Mdluli",
    label: "LinkedIn",
    value: "linkedin.com/in/Sinethemba-Mdluli",
    icon: Linkedin,
    external: true,
  },
  {
    href: "https://github.com/JacobsHubUNB",
    label: "GitHub",
    value: "github.com/JacobsHubUNB",
    icon: Github,
    external: true,
  },
  {
    href: "/S26Resumev3.pdf",
    label: "Résumé",
    value: "Download PDF →",
    icon: FileDown,
    download: true,
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      num="05"
      title="Get in touch"
      subtitle="Open to co-op and full-time roles. Fastest by email."
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {CARDS.map((card, i) => {
          const Icon = card.icon;
          return (
            <Reveal key={card.label} delay={i * 0.05}>
              <a
                href={card.href}
                {...(card.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                {...(card.download ? { download: true } : {})}
                className="group flex items-start gap-4 rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 transition hover:-translate-y-0.5 hover:border-brand hover:bg-neutral-900"
              >
                <Icon className="mt-0.5 h-5 w-5 text-brand" />
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-xs uppercase tracking-[0.06em] text-brand">
                    {card.label}
                  </div>
                  <div className="mt-1 break-all text-sm text-neutral-100">
                    {card.value}
                  </div>
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
