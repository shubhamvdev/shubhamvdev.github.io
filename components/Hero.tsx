"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
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
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.48,
      delay: 0.12 + index * 0.085,
      ease: easeOutExpo
    }
  })
};

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(pointerY, { stiffness: 120, damping: 18, mass: 0.45 });
  const rotateY = useSpring(pointerX, { stiffness: 120, damping: 18, mass: 0.45 });
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 70]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 125]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.82], [1, 0.28]);

  const handlePortraitMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch" || reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    pointerX.set(x * 8);
    pointerY.set(y * -8);
  };

  const resetPortrait = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative z-10 flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pt-24"
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

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
        <motion.div variants={container} initial="hidden" animate="show" style={{ y: contentY, opacity: heroOpacity }} className="text-center lg:text-left">
          <motion.div variants={item} className="theme-accent-surface mb-7 inline-flex items-center gap-3 rounded-full border px-4 py-2 text-xs font-medium text-slate-300">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_12px_rgba(var(--accent-rgb),0.9)]" />
            Available for new opportunities
          </motion.div>

          <motion.p variants={item} className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)] sm:text-sm">
            Hello, I&apos;m{" "}
            <span aria-label={owner.name}>
              {Array.from(owner.name).map((letter, index) => (
                <motion.span key={`${letter}-${index}`} custom={index} variants={nameLetter} className="name-letter">
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </span>
          </motion.p>

          <motion.h1 variants={item} className="max-w-3xl text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-white sm:text-6xl lg:text-[5.35rem]">
            I build reliable
            <span className="hero-gradient-word block">frontend systems.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Frontend / Full Stack Developer with 3+ years of experience building scalable SaaS
            dashboards, healthcare platforms, realtime applications, and reliable integrations.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <motion.a whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} href="#projects" className="primary-button inline-flex items-center justify-center gap-3 rounded-lg px-6 py-4 text-sm font-bold text-white">
              Explore my work
              <ArrowRight size={17} />
            </motion.a>
            <motion.a whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} href={owner.resume} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.025] px-6 py-4 text-sm font-bold text-white transition hover:bg-white/[0.07]">
              View resume
              <ArrowUpRight size={17} />
            </motion.a>
            <motion.a whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} href={`mailto:${owner.email}`} className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.015] px-6 py-4 text-sm font-bold text-slate-200 transition hover:border-white/20 hover:text-white">
              Get in touch
              <Mail size={16} />
            </motion.a>
          </motion.div>

          <motion.div variants={item} className="mt-12 grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-6 sm:max-w-xl">
            {stats.map((stat) => (
              <div key={stat.label} className="px-3 first:pl-0 sm:px-7 sm:first:pl-0">
                <p className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
                <p className="mt-2 text-[10px] leading-4 text-slate-500 sm:text-xs">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.25, ease: easeOutExpo }}
          onPointerMove={handlePortraitMove}
          onPointerLeave={resetPortrait}
          style={{ y: portraitY, opacity: heroOpacity, rotateX, rotateY, transformPerspective: 1100 }}
          className="relative mx-auto w-full max-w-[520px] transform-gpu"
        >
          <div className="hero-orbit-stage">
            <div className="hero-orbit-ring hero-orbit-ring-one" />
            <div className="hero-orbit-ring hero-orbit-ring-two" />
            <div className="hero-orbit-grid" />
            <div className="hero-orbit-photo">
              <img src="/shubham-portfolio.jpeg" alt="Shubham Vishwakarma" />
              <div className="hero-orbit-overlay" />
            </div>
            <motion.span className="hero-skill-badge hero-skill-react" animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>React.js</motion.span>
            <motion.span className="hero-skill-badge hero-skill-api" animate={{ y: [0, 8, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>APIs</motion.span>
            <motion.span className="hero-skill-badge hero-skill-next" animate={{ x: [0, 6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>Next.js</motion.span>
            <div className="hero-code-card"><span>01</span> const developer = &quot;interface architect&quot;;</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
