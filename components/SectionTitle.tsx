"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  const sectionNumbers: Record<string, string> = {
    About: "01",
    Skills: "02",
    Experience: "03",
    Projects: "04",
    Education: "05",
    Contact: "06"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="section-heading mb-12 grid gap-5 lg:grid-cols-[0.32fr_1fr] lg:items-end"
    >
      <div className="flex items-center gap-4 lg:self-start">
        <span className="section-number text-4xl font-black leading-none sm:text-5xl">{sectionNumbers[eyebrow] ?? "•"}</span>
        <div>
          <span className="theme-gradient-bar mb-3 block h-px w-10" />
          <p className="theme-accent-text text-xs font-bold uppercase tracking-[0.28em]">{eyebrow}</p>
        </div>
      </div>
      <div>
        <h2 className="max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[3.35rem]">{title}</h2>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">{description}</p>
        ) : null}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="section-title-rule mt-7 h-px origin-left"
        />
      </div>
    </motion.div>
  );
}
