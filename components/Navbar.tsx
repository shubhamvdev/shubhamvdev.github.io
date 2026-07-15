"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Mail, Network } from "lucide-react";
import { navItems, owner } from "@/lib/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateNavbar = () => setIsScrolled(window.scrollY > 24);

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });
    return () => window.removeEventListener("scroll", updateNavbar);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`liquid-nav fixed left-3 right-3 top-3 z-50 rounded-2xl sm:left-5 sm:right-5 lg:mx-auto lg:max-w-7xl ${
        isScrolled ? "liquid-nav-scrolled" : "liquid-nav-top"
      }`}
    >
      <div className="liquid-glass-layer" aria-hidden="true">
        <span className="liquid-blob liquid-blob-cyan" />
        <span className="liquid-blob liquid-blob-violet" />
      </div>
      <nav className="relative z-10 mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
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
            className="h-11 w-auto transition duration-300 group-hover:scale-[1.03]"
          />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            aria-label="GitHub"
            href={owner.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            <Code2 size={18} />
          </a>
          <a
            aria-label="LinkedIn"
            href={owner.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            <Network size={18} />
          </a>
          <a
            aria-label="Email"
            href={`mailto:${owner.email}`}
            className="rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            <Mail size={18} />
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
