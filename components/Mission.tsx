import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Mission() {
  return (
    <Section id="mission" num="01" title="Mission">
      <Reveal delay={0.05} className="max-w-3xl space-y-4">
        <p className="text-lg leading-relaxed text-neutral-400">
          I'm a Computer Science student at the University of New Brunswick
          building software that transforms manual, complex work into solutions 
          that are fast, intuitive, and reliable. I strive to use my growing
          skills to create meaningful value for both myself and others.
        </p>
        <p className="text-lg leading-relaxed text-neutral-400">
           I believe AI integrated programming will be at the core of how the next 
           generation of software gets built. Thus, I embrace AI-augmented development as a means of accelerating productivity and safety,
          rather than a means to replace engineering judgment. This allows me to build and scale systems faster while maintaining higher standards of quality. My mission is simple — 
          help shape the future of software engineering to the benefit of the people.
        </p>
      </Reveal>
    </Section>
  );
}
