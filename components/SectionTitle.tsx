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
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
