"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import SectionTitle from "./SectionTitle";

const badgeVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.92 },
  show: { opacity: 1, y: 0, scale: 1 }
};

export default function Skills() {
  return (
    <section id="skills" className="section-shell relative z-10 px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Skills"
          title="A practical stack for modern product teams"
          description="Frontend depth, full stack fluency, UI libraries, payments, storage, realtime tooling, and version control."
        />

        <motion.div
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.045 } }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-wrap gap-3"
        >
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              variants={badgeVariants}
              transition={{ duration: 0.45, ease: "easeOut" }}
              whileHover={{ y: -5, scale: 1.04 }}
              className="theme-hover group inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.025] px-5 py-3 text-sm font-semibold text-slate-300 transition hover:text-white"
            >
              <span>{skill}</span>
              <span className="text-[9px] font-bold text-slate-600 transition group-hover:text-white">{String(index + 1).padStart(2, "0")}</span>
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
