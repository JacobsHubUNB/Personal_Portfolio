# Personal Portfolio — Sinethemba Mdluli

Recruiter-facing portfolio site. **Next.js 14 (App Router) · Tailwind CSS · Framer Motion · TypeScript · Vercel.**

## Structure

```
app/
  layout.tsx           Root layout, fonts, metadata
  page.tsx             Composes all sections
  globals.css          Tailwind + design tokens
components/
  Nav.tsx              Sticky top nav
  Hero.tsx             Animated hero with staggered reveal
  Section.tsx          Reusable numbered section wrapper
  Reveal.tsx           Framer Motion scroll-reveal helper
  Mission.tsx          Two-paragraph mission
  Projects.tsx         Grid container
  ProjectCard.tsx      Card with hover-video + Framer Motion entry
  Skills.tsx           Chip groups
  Experience.tsx       Timeline
  Contact.tsx          Email / LinkedIn / GitHub / CV
  Footer.tsx           Colophon
lib/
  projects.ts          Curated project data (typed)
public/
  S26Resumev3.pdf      Downloadable CV
  assets/
    previews/          MP4 hover-preview videos (drop your files here)
    posters/           JPG poster images (drop your files here)
.claude/
  skills/
    frontend-design/
      SKILL.md         Design system rules — read this before touching UI
```

## Local development

```bash
npm install
npm run dev
```

Site runs at `http://localhost:3000`.

## Adding a new project

Add an entry to `lib/projects.ts`:

```ts
{
  slug: "my-project",
  name: "Project Name",
  description: "One short paragraph for recruiters.",
  tech: ["React", "Node.js"],
  github: "https://github.com/JacobsHubUNB/my-project",
  demo: "https://my-project.vercel.app",
  preview: "/assets/previews/my-project.mp4",
  poster: "/assets/posters/my-project.jpg",
}
```

Set `private: true` and `github: null` for private repos — the card renders a "Private" badge.

## Recording hover-preview videos

1. Record a 5–10 second silent screencast of the tool's wow-moment (OBS Studio, Loom, Clipchamp)
2. Trim to the best 8 seconds
3. Compress:
   ```
   ffmpeg -i raw.mp4 -vf scale=720:-2 -c:v libx264 -crf 28 -an -movflags +faststart preview.mp4
   ```
4. Save as `public/assets/previews/<slug>.mp4` (~400KB target)
5. Grab a still frame → `public/assets/posters/<slug>.jpg`

## Deploy

Push to `main` → Vercel auto-deploys (auto-detects Next.js, no config needed).

## Design system

See `.claude/skills/frontend-design/SKILL.md` before touching visuals. Enforces the dark + amber techy aesthetic (type scale, spacing grid, color tokens, motion principles, anti-patterns).
