"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowDown, Code2, Mail, MapPin, Network, Phone, Send } from "lucide-react";
import { owner, stats } from "@/lib/data";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: easeOutExpo } }
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8"
    >
      <motion.div
        className="absolute left-[8%] top-28 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl"
        animate={{ y: [0, 34, 0], x: [0, 18, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[8%] top-32 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl"
        animate={{ y: [0, -28, 0], x: [0, -26, 0], scale: [1, 1.18, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-1/2 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl"
        animate={{ y: [0, 24, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
        <motion.div variants={container} initial="hidden" animate="show" className="relative">
          <motion.div
            variants={item}
            className="mb-5 inline-flex items-center gap-2 rounded-lg border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100"
          >
            <MapPin size={16} />
            {owner.location}
          </motion.div>

          <motion.h1
            variants={item}
            className="max-w-5xl text-5xl font-black leading-[1.03] text-white sm:text-6xl lg:text-7xl"
          >
            {owner.name}
          </motion.h1>

          <motion.p variants={item} className="mt-5 text-2xl font-semibold sm:text-3xl">
            <span className="gradient-text">{owner.role}</span>
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I build polished web products with React.js, Next.js, TypeScript, Redux, real-time
            systems, and clean API integrations for SaaS dashboards and high-utility applications.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <motion.a
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-glow transition hover:bg-cyan-300"
            >
              View Projects
              <ArrowDown size={18} />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`mailto:${owner.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
            >
              Let&apos;s Connect
              <Send size={18} />
            </motion.a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            {[
              { href: owner.github, label: "GitHub", icon: Code2 },
              { href: owner.linkedin, label: "LinkedIn", icon: Network },
              { href: `mailto:${owner.email}`, label: "Email", icon: Mail },
              { href: `tel:${owner.phone.replaceAll(" ", "")}`, label: "Phone", icon: Phone }
            ].map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white"
                >
                  <Icon size={17} />
                  {link.label}
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotateX: 8 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="glass-card relative overflow-hidden rounded-2xl p-6">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Availability</p>
                <p className="mt-1 text-xl font-bold text-white">Open to frontend and full stack roles</p>
              </div>
              <motion.span
                animate={{ scale: [1, 1.12, 1], opacity: [0.75, 1, 0.75] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_22px_rgba(52,211,153,0.9)]"
              />
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-3xl font-black text-white">{stat.value}</p>
                  <p className="mt-2 text-sm leading-5 text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-slate-950/45 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Current focus
              </p>
              <div className="mt-4 space-y-3">
                {["High-performance Next.js interfaces", "Realtime product workflows", "SaaS dashboards that teams can scan fast"].map(
                  (text, index) => (
                    <motion.div
                      key={text}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.9, delay: 0.5 + index * 0.15 }}
                      className="overflow-hidden rounded-lg bg-white/[0.06] px-4 py-3 text-sm text-slate-200"
                    >
                      {text}
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
