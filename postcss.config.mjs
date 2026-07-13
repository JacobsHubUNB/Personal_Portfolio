import path from "path";
import { fileURLToPath } from "url";

// Anchor the Tailwind config to this file so it resolves no matter
// which directory the dev server is started from
const here = path.dirname(fileURLToPath(import.meta.url));

const config = {
  plugins: {
    tailwindcss: { config: path.join(here, "tailwind.config.ts") },
    autoprefixer: {},
  },
};

export default config;
