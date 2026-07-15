"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowDown, ArrowUpRight, Code2, Mail, MapPin, Network } from "lucide-react";
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

const nameLetter: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.86, filter: "blur(9px)" },
  show: (index: number) => {
    const revealStart = 0.05 + index * 0.035;
    const revealEnd = revealStart + 0.045;

    return {
      opacity: [0, 0, 1, 1, 0],
      y: [22, 22, 0, 0, -8],
      scale: [0.86, 0.86, 1, 1, 0.98],
      filter: ["blur(9px)", "blur(9px)", "blur(0px)", "blur(0px)", "blur(5px)"],
      transition: {
        duration: 6.5,
        times: [0, revealStart, revealEnd, 0.84, 0.92],
        repeat: Infinity,
        ease: "easeInOut"
      }
    };
  }
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8"
    >
      <motion.div
        className="theme-hero-glow-primary absolute left-[8%] top-32 h-72 w-72 rounded-full blur-3xl"
        animate={{ y: [0, 34, 0], x: [0, 18, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="theme-hero-glow-secondary absolute right-[8%] top-40 h-80 w-80 rounded-full blur-3xl"
        animate={{ y: [0, -28, 0], x: [0, -26, 0], scale: [1, 1.18, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex w-full max-w-7xl flex-col items-center text-center"
      >
        <motion.div variants={item} className="profile-portrait relative mb-8">
          <div className="profile-portrait-glow" />
          <div className="profile-portrait-frame">
            <div className="profile-photo-wrap">
              <img
                src="/shubham-portfolio.jpeg"
                alt="Shubham Vishwakarma"
                className="profile-photo"
              />
              <div className="profile-photo-shine" />
            </div>
          </div>
          <span className="profile-code-chip" aria-hidden="true">&lt;/&gt;</span>
        </motion.div>

        <motion.div variants={item} className="theme-accent-surface mb-5 inline-flex items-center gap-3 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.2em]">
          Available for new opportunities
        </motion.div>

        <motion.h1
          variants={item}
          aria-label="Shubham Vishwakarma"
          className="hero-name text-[clamp(2.75rem,10vw,8.8rem)] font-black uppercase leading-[0.78] tracking-[-0.075em] text-white"
        >
          <motion.span className="block whitespace-nowrap" aria-hidden="true">
            {Array.from("Shubham").map((letter, index) => (
              <motion.span key={`${letter}-${index}`} custom={index} variants={nameLetter} className="name-letter">
                {letter}
              </motion.span>
            ))}
          </motion.span>
          <motion.span
            className="hero-name-outline block whitespace-nowrap"
            aria-hidden="true"
          >
            {Array.from("Vishwakarma").map((letter, index) => (
              <motion.span key={`${letter}-${index}`} custom={index + 7} variants={nameLetter} className="name-letter">
                {letter}
              </motion.span>
            ))}
          </motion.span>
        </motion.h1>

        <motion.p variants={item} className="mt-8 text-lg font-semibold text-white sm:text-2xl">
          {owner.role}
        </motion.p>
        <motion.p variants={item} className="mt-4 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
          I design and build fast, dependable web products for SaaS, healthcare, realtime systems,
          and teams that care about a sharp user experience.
        </motion.p>

        <motion.div variants={item} className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
          <motion.a
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#projects"
            className="primary-button inline-flex flex-1 items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white"
          >
            View projects
            <ArrowDown size={17} />
          </motion.a>
          <motion.a
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={owner.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/[0.08]"
          >
            Résumé
            <ArrowUpRight size={17} />
          </motion.a>
        </motion.div>

        <motion.div variants={item} className="mt-12 grid w-full overflow-hidden rounded-2xl border border-white/10 bg-black/20 sm:grid-cols-[1fr_auto_1fr]">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="px-3 py-5 sm:px-5">
                <p className="text-xl font-black text-white sm:text-2xl">{stat.value}</p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-500 sm:text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="hidden w-px bg-white/10 sm:block" />
          <div className="flex flex-wrap items-center justify-center gap-5 border-t border-white/10 px-5 py-5 sm:border-t-0">
            {[
              { href: owner.github, label: "GitHub", icon: Code2 },
              { href: owner.linkedin, label: "LinkedIn", icon: Network },
              { href: `mailto:${owner.email}`, label: "Email", icon: Mail },
              { href: "#contact", label: "Bangalore", icon: MapPin }
            ].map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
                >
                  <Icon size={16} />
                  {link.label}
                </a>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
