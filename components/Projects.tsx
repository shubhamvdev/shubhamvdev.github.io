"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Projects"
          title="Systems built around real business operations"
          description="SaaS platforms, healthcare tools, lab operations, tenant management, and real-time debate workflows."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                whileHover={{ y: -10, scale: 1.015 }}
                className="glass-card group relative flex min-h-[300px] flex-col rounded-2xl p-6 transition-shadow hover:shadow-card-hover"
              >
                {project.url ? (
                  <a
                    aria-label={`Open ${project.title}`}
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute inset-0 z-10 rounded-2xl"
                  />
                ) : null}
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-cyan-300/20 to-violet-400/20 p-3 text-cyan-100 ring-1 ring-white/10">
                    <Icon size={28} />
                  </div>
                  <ArrowUpRight
                    size={22}
                    className={`transition ${
                      project.url
                        ? "text-slate-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-200"
                        : "text-slate-700"
                    }`}
                  />
                </div>

                <h3 className="mt-6 text-2xl font-black text-white">{project.title}</h3>
                <p className="mt-4 flex-1 leading-7 text-slate-300">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
