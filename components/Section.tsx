import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  num,
  title,
  subtitle,
  children,
}: {
  id: string;
  num: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-neutral-800 py-16 md:py-20">
      <Reveal className="mb-8 md:mb-10">
        <h2 className="inline-block text-3xl font-bold tracking-tight md:text-4xl">
          <span className="mr-3 align-middle font-mono text-xs text-brand">
            {num}
          </span>
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-sm text-neutral-400">{subtitle}</p>
        )}
      </Reveal>
      {children}
    </section>
  );
}
