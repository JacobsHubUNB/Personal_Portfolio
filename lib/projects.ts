export type Project = {
  slug: string;
  name: string;
  description: string;
  tech: string[];
  github: string | null;
  demo: string | null;
  preview: string | null;
  poster: string | null;
  private?: boolean;
};

export const projects: Project[] = [
  {
    slug: "engineering-drawing-review",
    name: "Engineering Drawing Review System",
    description:
      "AI-integrated CAD reviewer using Claude Vision to detect missing design flaws such as dimensions, geometry errors, and unclear tolerances — rendering bounding-box pins directly on uploaded drawings. Multi-user collaboration with per-run analysis history.",
    tech: ["React", "FastAPI", "Python", "Claude Vision", "SQLite", "JWT"],
    github: "https://github.com/JacobsHubUNB/Engineer-Drawing-Analyzer",
    demo: null,
    preview: "/assets/previews/engineering-drawing- reviewer.mp4",
    poster: "/assets/posters/Engineering Drawing Reviewer.png",
  },
  {
    slug: "Claims-Copilot",
    name: "Claims Filing Copilot",
    description:
      "AI-integrated insurance claims filing system using an agent parse, draft insurance claims from clients while requirning a human respresentitive to approve and submit the claim.",
    tech: ["React", "FastAPI", "Python", "Claude Vision", "SQLite", "JWT"],
    github: "https://github.com/JacobsHubUNB/Engineer-Drawing-Analyzer",
    demo: null,
    preview: "/assets/previews/Claims Agent.mp4",
    poster: "/assets/posters/Claims Agent.png",
  },
  {
    slug: "aws-risk-visualizer",
    name: "AWS Risk Visualizer",
    description:
      "Interactive cloud-security auditor that pulls live IAM roles and policies from AWS and renders a D3 force-directed graph of identity → policy → resource relationships. Per-statement risk classification across 500+ ARNs collapsed into readable service nodes.",
    tech: ["Python", "JavaScript", "D3.js", "AWS Boto3", "NetworkX"],
    github: "https://github.com/JacobsHubUNB/IAM-User-Analyzer",
    demo: null,
    preview: "/assets/previews/aws-risk-visualizer.mp4",
    poster: "/assets/posters/aws risk visualizer.png",
  },
  {
    slug: "airport-management-system",
    name: "Airport Management System",
    description:
      "Multi-view airport management application with encrypted login authentication and role-based access control. Built on MVC architecture for modularity and separation of concerns.",
    tech: ["TypeScript", "SimpleKit", "Vite", "MVC"],
    github: null,
    demo: null,
    preview: "/assets/previews/airport-management.mp4",
    poster: "/assets/posters/Airport management system.png",
    private: true,
  },
];
