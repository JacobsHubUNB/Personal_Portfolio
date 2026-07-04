export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-10 border-t border-neutral-800 px-7 py-8 text-center font-mono text-xs text-neutral-500">
      © {year} Sinethemba Mdluli · Built with Next.js, Tailwind &amp; Framer Motion
    </footer>
  );
}
