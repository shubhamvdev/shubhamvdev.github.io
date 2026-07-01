"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";
import SectionTitle from "./SectionTitle";

export default function Education() {
  return (
    <section id="education" className="relative z-10 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Education"
          title="Academic foundation"
          description="Computer applications, software development fundamentals, and consistent technical progression."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {education.map((item, index) => (
            <motion.article
              key={`${item.degree}-${item.period}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-violet-300/10 text-violet-100 ring-1 ring-violet-300/20">
                  <GraduationCap size={23} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                  <p className="mt-1 text-slate-300">{item.institution}</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-lg bg-cyan-300/10 px-3 py-2 text-sm font-semibold text-cyan-100 ring-1 ring-cyan-300/20">
                  {item.score}
                </span>
                <span className="rounded-lg bg-white/[0.06] px-3 py-2 text-sm font-semibold text-slate-200 ring-1 ring-white/10">
                  {item.period}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
