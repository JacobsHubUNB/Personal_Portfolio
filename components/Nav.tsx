import Link from "next/link";

const LINKS = [
  { href: "#mission", label: "Mission" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center gap-6 border-b border-neutral-800 bg-neutral-950/70 px-7 py-4 backdrop-blur-md">
      <Link
        href="#top"
        className="font-mono text-lg font-semibold tracking-[0.05em] text-neutral-100"
      >
        SM<span className="text-brand">.</span>
      </Link>
      <ul className="hidden flex-1 justify-center gap-6 md:flex">
        {LINKS.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="text-sm text-neutral-400 transition hover:text-neutral-100"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="/S26Resumev3.pdf"
        download
        className="btn-accent btn-sm ml-auto md:ml-0"
      >
        Download CV
      </a>
    </nav>
  );
}
