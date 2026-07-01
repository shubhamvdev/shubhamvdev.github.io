"use client";

import { motion } from "framer-motion";
import { focusAreas } from "@/lib/data";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="relative z-10 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="About"
          title="Product-minded engineering for fast, usable web apps"
          description="Three years of hands-on experience turning complex workflows into responsive, reliable interfaces."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="glass-card rounded-2xl p-6 sm:p-8"
          >
            <p className="text-lg leading-8 text-slate-300">
              I am a Frontend / Full Stack Developer with 3 years of experience building
              React.js and Next.js applications using TypeScript, Redux, and modern component
              systems. My work spans SaaS dashboards, healthcare platforms, CRM and HRM modules,
              real-time applications, payment flows, and clean API integrations.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              I enjoy shaping interfaces that feel quick, structured, and dependable, from data-heavy
              admin screens to live collaboration features backed by Socket.IO, Firebase, and
              production-ready REST integrations.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="glass-card rounded-2xl p-6"
                >
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-cyan-300/10 text-cyan-200 ring-1 ring-cyan-300/20">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{area.label}</h3>
                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${76 + index * 6}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: 0.2 }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-300"
                    />
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
