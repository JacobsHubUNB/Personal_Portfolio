import { Section } from "./Section";
import { Reveal } from "./Reveal";

type Item = {
  when: string;
  where: string;
  role: string;
  org: string;
  body: string;
};

const ITEMS: Item[] = [
  {
    when: "Jun 2026 — Present",
    where: "Fredericton, NB",
    role: "Software Development Intern",
    org: "Steed Motors Inc",
    body: "Paid multi-month retainer designing, developing, and maintaining bespoke software for a dealership — data visualizations, internal automation tools, and website maintenance. Integrating agentic AI tooling end-to-end across design, implementation, debugging, and refactoring. First deliverable: automated web testing with Python and Playwright.",
  },
  {
    when: "Sep 2023 — Present",
    where: "Fredericton, NB",
    role: "Bachelor of Computer Science",
    org: "University of New Brunswick",
    body: "Coursework in UI design (responsiveness, accessibility), information security (access control, encryption), software engineering (AGILE, OOP Design, Design principles), database management, Net-Centric Computing, Data Structures and Algorithms, Computer Architecture, Operating Systems.",
  },
];

export function Experience() {
  return (
    <Section id="experience" num="02" title="Experience">
      <ol className="flex flex-col gap-7">
        {ITEMS.map((item, i) => (
          <Reveal key={item.role} delay={i * 0.06}>
            <li className="grid grid-cols-1 gap-4 border-b border-neutral-800 pb-7 last:border-b-0 last:pb-0 md:grid-cols-[200px_1fr] md:gap-8">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs text-brand">{item.when}</span>
                <span className="text-xs text-neutral-500">{item.where}</span>
              </div>
              <div>
                <h3 className="mb-1.5 text-lg font-semibold">
                  {item.role}{" "}
                  <span className="font-normal text-neutral-400">
                    · {item.org}
                  </span>
                </h3>
                <p className="text-[15px] leading-relaxed text-neutral-400">
                  {item.body}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
