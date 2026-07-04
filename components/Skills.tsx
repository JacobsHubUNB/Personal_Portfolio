import { Section } from "./Section";
import { Reveal } from "./Reveal";

const GROUPS: { title: string; items: string[] }[] = [
  {
    title: "Languages",
    items: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "C",
      "SQL",
      "PostgreSQL",
       "HTML & CSS",
      "MIPS Assembly",
      "Racket",
      "Octave",
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "React",
      "Next.js",
      "FastAPI",
      "Vite",
      "Node.js",
      "D3.js",
      "NetworkX",
      "NumPy",
      "JavaFX",
      ".NET / ASP.NET",
      "Pydantic",
      "JUnit",
      "Playwright",
      "Tailwind",
      "SimpleKit"
    ],
  },
  {
    title: "Infra & Tools",
    items: [
      "Git & GitHub",
      "AWS (Boto3)",
      "MySQL",
      "SQLite",
      "VS Code",
      "UML",
      "Tailwind CSS",
      "Superbase",
      "Microsoft Tools"
    ],
  },
  {
    title: "Agentic AI Tooling",
    items: [
      "Claude Code",
      "Claude API",
      "IDE-integrated assistants",
      "LLM-driven code review",
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills" num="03" title="Skills">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {GROUPS.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.05}>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.06em] text-brand">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
