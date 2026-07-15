"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Check, Mail, Menu, Palette, X } from "lucide-react";
import { navItems, owner } from "@/lib/data";

export default function Navbar() {
  const navbarRef = useRef<HTMLElement>(null);
  const themePickerRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("obsidian");

  const themes = [
    { id: "obsidian", label: "Obsidian", colors: ["#38bdf8", "#8b5cf6"] },
    { id: "midnight", label: "Midnight", colors: ["#3b82f6", "#06b6d4"] },
    { id: "aurora", label: "Aurora", colors: ["#a855f7", "#ec4899"] },
    { id: "forest", label: "Forest", colors: ["#14b8a6", "#84cc16"] },
    { id: "ember", label: "Ember", colors: ["#f97316", "#f43f5e"] },
    { id: "ocean", label: "Ocean", colors: ["#06b6d4", "#3b82f6"] },
    { id: "cyber", label: "Cyber", colors: ["#22c55e", "#eab308"] },
    { id: "rose", label: "Rose", colors: ["#f43f5e", "#d946ef"] },
    { id: "solar", label: "Solar", colors: ["#f59e0b", "#ef4444"] },
    { id: "mono", label: "Monochrome", colors: ["#e2e8f0", "#64748b"] }
  ];

  useEffect(() => {
    const updateNavbar = () => setIsScrolled(window.scrollY > 24);

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });
    return () => window.removeEventListener("scroll", updateNavbar);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const initialTheme = themes.some((item) => item.id === savedTheme) ? savedTheme! : "obsidian";
    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  useEffect(() => {
    if (!themeMenuOpen && !mobileMenuOpen) return;

    const closeOnOutsidePress = (event: PointerEvent) => {
      const target = event.target as Node;

      if (themeMenuOpen && !themePickerRef.current?.contains(target)) {
        setThemeMenuOpen(false);
      }

      if (mobileMenuOpen && !navbarRef.current?.contains(target)) {
        setMobileMenuOpen(false);
      }
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setThemeMenuOpen(false);
      setMobileMenuOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsidePress);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePress);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileMenuOpen, themeMenuOpen]);

  const selectTheme = (nextTheme: string) => {
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("portfolio-theme", nextTheme);
    setThemeMenuOpen(false);
  };

  return (
    <motion.header
      ref={navbarRef}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`liquid-nav fixed left-3 right-3 top-3 z-50 rounded-2xl sm:left-5 sm:right-5 lg:mx-auto lg:max-w-6xl ${
        isScrolled ? "liquid-nav-scrolled" : "liquid-nav-top"
      }`}
    >
      <div className="liquid-glass-layer" aria-hidden="true">
        <span className="liquid-blob liquid-blob-cyan" />
        <span className="liquid-blob liquid-blob-violet" />
      </div>
      <nav className="relative z-10 mx-auto flex h-14 items-center justify-between px-3 sm:px-5">
        <a
          href="#home"
          aria-label="Shubham Vishwakarma — home"
          className="group flex items-center rounded-xl transition duration-300 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]"
        >
          <Image
            src="/shubham-logo.svg"
            alt="Shubham"
            width={214}
            height={56}
            priority
            className="h-7 w-auto transition duration-300 group-hover:scale-[1.03] sm:h-8"
          />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div ref={themePickerRef} className="relative">
            <button
              type="button"
              aria-label="Choose color theme"
              aria-expanded={themeMenuOpen}
              onClick={() => {
                setThemeMenuOpen((open) => !open);
                setMobileMenuOpen(false);
              }}
              className="theme-picker-button grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <Palette size={15} />
            </button>

            {themeMenuOpen ? (
              <motion.div
                initial={{ opacity: 0, y: -6, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="theme-menu absolute right-0 top-11 z-50 max-h-[72vh] w-52 overflow-y-auto rounded-2xl border border-white/10 p-2 shadow-2xl"
              >
                <p className="px-3 pb-2 pt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Choose theme</p>
                {themes.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => selectTheme(item.id)}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-xs font-semibold text-slate-300 transition hover:bg-white/[0.07] hover:text-white"
                  >
                    <span
                      className="h-4 w-4 rounded-full"
                      style={{ background: `linear-gradient(135deg, ${item.colors[0]}, ${item.colors[1]})` }}
                    />
                    <span className="flex-1">{item.label}</span>
                    {theme === item.id ? <Check size={14} className="theme-accent-text" /> : null}
                  </button>
                ))}
              </motion.div>
            ) : null}
          </div>

          <a
            aria-label="View resume"
            href={owner.resume}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white sm:inline-flex"
          >
            Resume
            <ArrowUpRight size={16} />
          </a>
          <a
            aria-label="Email"
            href={`mailto:${owner.email}`}
            className="theme-cta hidden h-8 items-center gap-1.5 rounded-full px-3 text-xs font-bold text-slate-950 transition hover:scale-[1.03] sm:inline-flex"
          >
            <Mail size={18} />
            <span className="hidden sm:inline">Let&apos;s talk</span>
          </a>
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => {
              setMobileMenuOpen((open) => !open);
              setThemeMenuOpen(false);
            }}
            className="theme-accent-surface relative z-50 inline-flex h-9 shrink-0 items-center justify-center gap-1.5 rounded-full border px-3 text-xs font-bold text-white shadow-lg transition hover:scale-105 lg:hidden"
          >
            {mobileMenuOpen ? <X size={18} strokeWidth={2.4} /> : <Menu size={18} strokeWidth={2.4} />}
            <span>{mobileMenuOpen ? "Close" : "Menu"}</span>
          </button>
        </div>
      </nav>

      {mobileMenuOpen ? (
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="theme-menu absolute left-0 right-0 top-[4.15rem] z-50 rounded-2xl border border-white/10 p-3 shadow-2xl lg:hidden"
        >
          <div className="grid grid-cols-2 gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.07] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="mt-3 grid gap-2 border-t border-white/10 pt-3 sm:grid-cols-2">
            <a
              href={owner.resume}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-white"
            >
              View resume
              <ArrowUpRight size={16} />
            </a>
            <a
              href={`mailto:${owner.email}`}
              onClick={() => setMobileMenuOpen(false)}
              className="primary-button inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-white"
            >
              Contact me
              <Mail size={16} />
            </a>
          </div>
        </motion.div>
      ) : null}
    </motion.header>
  );
}
