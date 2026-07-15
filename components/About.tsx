"use client";

import { motion } from "framer-motion";
import { focusAreas } from "@/lib/data";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="section-shell relative z-10 px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="About"
          title="Product-minded engineering for fast, usable web apps"
          description="Three years of hands-on experience turning complex workflows into responsive, reliable interfaces."
        />

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="studio-panel relative overflow-hidden rounded-[2rem] p-7 sm:p-10"
          >
            <span className="absolute -right-2 -top-10 text-[10rem] font-black leading-none text-white/[0.025]">03</span>
            <p className="relative max-w-3xl text-xl leading-9 text-slate-200 sm:text-2xl sm:leading-10">
              I am a Frontend / Full Stack Developer with 3 years of experience building
              React.js and Next.js applications using TypeScript, Redux, and modern component
              systems. My work spans SaaS dashboards, healthcare platforms, CRM and HRM modules,
              real-time applications, payment flows, and clean API integrations.
            </p>
            <p className="theme-accent-border relative mt-7 max-w-3xl border-l pl-5 text-base leading-8 text-slate-400">
              I enjoy shaping interfaces that feel quick, structured, and dependable, from data-heavy
              admin screens to live collaboration features backed by Socket.IO, Firebase, and
              production-ready REST integrations.
            </p>
          </motion.div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  whileHover={{ x: 6 }}
                  className="group flex items-center gap-5 py-5"
                >
                  <div className="theme-accent-surface grid h-11 w-11 shrink-0 place-items-center rounded-full border transition group-hover:bg-white group-hover:text-slate-950">
                    <Icon size={22} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold text-white">{area.label}</h3>
                    <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${76 + index * 6}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: 0.2 }}
                      className="theme-gradient-bar h-full rounded-full"
                    />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
