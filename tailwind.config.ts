import type { Config } from "tailwindcss";

// Anchor content globs to this file so they resolve no matter
// which directory the dev server is started from
const here = __dirname.replace(/\\/g, "/");

const config: Config = {
  content: [
    `${here}/app/**/*.{ts,tsx}`,
    `${here}/components/**/*.{ts,tsx}`,
    `${here}/lib/**/*.{ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SF Mono", "Menlo", "monospace"],
      },
      colors: {
        brand: {
          DEFAULT: "#f59e0b",
          soft: "rgba(245, 158, 11, 0.12)",
          glow: "rgba(245, 158, 11, 0.35)",
        },
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(1200px 600px at 80% -10%, rgba(245,158,11,0.14), transparent 60%), radial-gradient(800px 400px at -10% 10%, rgba(245,158,11,0.05), transparent 60%)",
        "media-grid":
          "repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(255,255,255,0.015) 12px, rgba(255,255,255,0.015) 13px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
