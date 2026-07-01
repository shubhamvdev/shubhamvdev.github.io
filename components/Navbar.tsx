"use client";

import { motion } from "framer-motion";
import { Code2, Mail, Network } from "lucide-react";
import { navItems, owner } from "@/lib/data";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/55 backdrop-blur-2xl"
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-sm font-black text-white ring-1 ring-white/15 transition group-hover:bg-cyan-400/20">
            SV
          </span>
          <span className="hidden text-sm font-semibold text-white sm:block">
            Shubham Vishwakarma
          </span>
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
