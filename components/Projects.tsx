import { Section } from "./Section";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/lib/projects";

export function Projects() {
  return (
    <Section
      id="projects"
      num="02"
      title="Projects"
      subtitle="Hover a card to preview. Click through for live demos & source."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
