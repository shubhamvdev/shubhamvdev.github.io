"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { experience } from "@/lib/data";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="Experience"
          title="A timeline of shipped product work"
          description="Roles across frontend and full stack development, with focus on production interfaces and business workflows."
        />

        <div className="relative">
          <div className="absolute bottom-8 left-4 top-8 hidden w-px bg-gradient-to-b from-cyan-300 via-violet-300 to-transparent sm:block" />
          <div className="space-y-6">
            {experience.map((job, index) => (
              <motion.article
                key={`${job.company}-${job.period}`}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative sm:pl-12"
              >
                <span className="absolute left-0 top-7 hidden h-8 w-8 rounded-full border border-cyan-300/40 bg-slate-950 shadow-glow sm:grid sm:place-items-center">
                  <Briefcase size={15} className="text-cyan-200" />
                </span>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-card rounded-2xl p-6 sm:p-7"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">{job.role}</h3>
                      <p className="mt-1 text-lg font-semibold text-cyan-200">{job.company}</p>
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
                  <p className="mt-5 leading-7 text-slate-300">{job.description}</p>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
