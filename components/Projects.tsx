"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section id="projects" className="section-shell relative z-10 px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Projects"
          title="Systems built around real business operations"
          description="SaaS platforms, healthcare tools, lab operations, tenant management, and real-time debate workflows."
        />

        <div className="overflow-hidden border-y border-white/10">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="project-row group relative grid gap-5 border-b border-white/10 py-8 last:border-b-0 md:grid-cols-[72px_0.55fr_1fr_auto] md:items-center md:gap-8"
              >
                {project.url ? (
                  <a
                    aria-label={`Open ${project.title}`}
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute inset-0 z-10"
                  />
                ) : null}
                <div className="flex items-center gap-4 md:block">
                  <span className="text-xs font-bold tracking-[0.2em] text-white/25">{String(index + 1).padStart(2, "0")}</span>
                  <div className="theme-accent-surface mt-0 grid h-11 w-11 place-items-center rounded-full border md:mt-4">
                    <Icon size={20} />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white transition group-hover:opacity-80 sm:text-3xl">{project.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-semibold uppercase tracking-wider text-slate-500">{tag}</span>
                    ))}
                  </div>
                </div>

                <p className="max-w-2xl leading-7 text-slate-400">{project.description}</p>

                <ArrowUpRight
                  size={24}
                  className={`hidden transition md:block ${project.url ? "text-slate-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" : "text-slate-800"}`}
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
