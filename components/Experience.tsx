"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { experience } from "@/lib/data";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  return (
    <section id="experience" className="section-shell relative z-10 px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Experience"
          title="A timeline of shipped product work"
          description="Roles across frontend and full stack development, with focus on production interfaces and business workflows."
        />

        <div className="relative border-y border-white/10">
          <div>
            {experience.map((job, index) => (
              <motion.article
                key={`${job.company}-${job.period}`}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative border-b border-white/10 last:border-b-0"
              >
                <motion.div
                  whileHover={{ x: 5 }}
                  className="grid gap-5 py-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">{job.role}</h3>
                      <p className="theme-accent-text mt-1 text-lg font-semibold">{job.company}</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-sm font-semibold text-slate-200">
                        {job.period}
                      </p>
                      <p className="mt-3 inline-flex items-center gap-2 text-sm text-slate-400">
                        <MapPin size={15} />
                        {job.location}
                      </p>
                    </div>
                  </div>
                  <p className="leading-7 text-slate-400 md:pt-1">{job.description}</p>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
