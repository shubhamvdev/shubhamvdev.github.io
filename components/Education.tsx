"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";
import SectionTitle from "./SectionTitle";

export default function Education() {
  return (
    <section id="education" className="section-shell relative z-10 px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Education"
          title="Academic foundation"
          description="Computer applications, software development fundamentals, and consistent technical progression."
        />

        <div className="grid border-y border-white/10 md:grid-cols-2 xl:grid-cols-4">
          {education.map((item, index) => (
            <motion.article
              key={`${item.degree}-${item.period}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              whileHover={{ y: -4 }}
              className="min-h-[235px] border-b border-white/10 p-6 transition hover:bg-white/[0.025] md:border-r xl:border-b-0 xl:last:border-r-0"
            >
              <div className="flex items-start gap-4">
                <div className="theme-accent-surface grid h-12 w-12 shrink-0 place-items-center rounded-full border">
                  <GraduationCap size={23} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                  <p className="mt-1 text-slate-300">{item.institution}</p>
                </div>
              </div>
              <div className="mt-12 flex flex-wrap gap-3">
                <span className="theme-accent-surface rounded-full border px-3 py-2 text-sm font-semibold">
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
