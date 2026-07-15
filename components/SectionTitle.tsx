"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="section-heading mb-12 grid gap-5 lg:grid-cols-[0.32fr_1fr] lg:items-end"
    >
      <div className="flex items-center gap-3 lg:self-start">
        <span className="theme-gradient-bar h-px w-10" />
        <p className="theme-accent-text text-xs font-bold uppercase tracking-[0.28em]">{eyebrow}</p>
      </div>
      <div>
        <h2 className="max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[3.35rem]">{title}</h2>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">{description}</p>
        ) : null}
      </div>
    </motion.div>
  );
}
