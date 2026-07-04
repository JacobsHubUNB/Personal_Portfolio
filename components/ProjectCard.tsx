"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Lock } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnter = () => {
    const v = videoRef.current;
    if (!v) return;
    const p = v.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  };

  const handleLeave = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    try {
      v.currentTime = 0;
    } catch {
      /* noop */
    }
  };

  return (
    <motion.article
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: Math.min(index * 0.08, 0.4),
      }}
      className="group flex flex-col overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 transition duration-200 hover:-translate-y-1 hover:border-neutral-700 hover:shadow-2xl hover:shadow-black/50"
    >
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-950">
        <div className="pointer-events-none absolute inset-0 bg-media-grid" />
        {project.poster && (
          <img
            src={project.poster}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
          />
        )}
        {project.preview && (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="none"
            poster={project.poster ?? undefined}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <source src={project.preview} type="video/mp4" />
          </video>
        )}
        {project.private && (
          <span className="absolute right-3 top-3 z-10 inline-flex items-center gap-1.5 rounded border border-neutral-700 bg-black/70 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-neutral-300 backdrop-blur">
            <Lock className="h-3 w-3" /> Private
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold tracking-tight text-neutral-100">
          {project.name}
        </h3>
        <p className="text-sm leading-relaxed text-neutral-400">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent btn-sm"
            >
              Live demo <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm"
            >
              <Github className="h-3.5 w-3.5" /> Code
            </a>
          ) : project.private ? (
            <span className="btn btn-sm cursor-not-allowed opacity-60">
              <Lock className="h-3.5 w-3.5" /> Source private
            </span>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
