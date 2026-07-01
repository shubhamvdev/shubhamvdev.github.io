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
    <section id="skills" className="relative z-10 px-4 py-24 sm:px-6 lg:px-8">
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
          className="glass-card flex flex-wrap justify-center gap-3 rounded-2xl p-5 sm:p-8"
        >
          {skills.map((skill) => (
            <motion.span
              key={skill}
              variants={badgeVariants}
              transition={{ duration: 0.45, ease: "easeOut" }}
              whileHover={{ y: -5, scale: 1.04 }}
              className="rounded-lg border border-white/10 bg-white/[0.07] px-4 py-3 text-sm font-semibold text-slate-100 shadow-lg shadow-slate-950/20 transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
