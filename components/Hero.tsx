"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  return (
    <motion.header
      className="py-24 md:py-28"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.p
        variants={item}
        className="mb-5 font-mono text-xs uppercase tracking-[0.08em] text-brand"
      >
        Software engineer · CS co-op @ UNB
      </motion.p>
      <motion.h1
        variants={item}
        className="mb-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
      >
        Sinethemba <span className="text-brand">Mdluli</span>
      </motion.h1>
      <motion.p
        variants={item}
        className="mb-9 max-w-2xl text-lg leading-relaxed text-neutral-400 md:text-2xl"
      >
        I build full-stack tools that turn manual, complex work into something
        fast and clear.
      </motion.p>
      <motion.div variants={item} className="flex flex-wrap gap-3">
        <a href="#projects" className="btn-accent">
          View projects
        </a>
        <a href="/S26Resumev3.pdf" download className="btn">
          Download CV
        </a>
        <a href="mailto:sinethembamdluli7274@gmail.com" className="btn">
          Email me
        </a>
      </motion.div>
    </motion.header>
  );
}
