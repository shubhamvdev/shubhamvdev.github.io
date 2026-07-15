"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  FolderKanban,
  GraduationCap,
  Home,
  Layers3,
  Send,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { navItems } from "@/lib/data";

const sectionIcons: Record<string, LucideIcon> = {
  home: Home,
  about: UserRound,
  skills: Layers3,
  experience: BriefcaseBusiness,
  projects: FolderKanban,
  education: GraduationCap,
  contact: Send,
};

export default function SectionRail() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = ["home", ...navItems.map((item) => item.href.slice(1))];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-28% 0px -55% 0px", threshold: [0.05, 0.2, 0.45] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const items = [{ label: "Home", href: "#home" }, ...navItems];

  return (
    <motion.aside
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      aria-label="Section navigation"
      className="section-rail"
    >
      {items.map((item) => {
        const id = item.href.slice(1);
        const active = activeSection === id;
        const Icon = sectionIcons[id];
        return (
          <a key={item.href} href={item.href} className={`section-rail-link ${active ? "is-active" : ""}`} aria-label={`Go to ${item.label}`}>
            <span className="section-rail-label">{item.label}</span>
            <Icon className="section-rail-icon" aria-hidden="true" strokeWidth={1.8} />
            <span className="section-rail-dot" />
          </a>
        );
      })}
    </motion.aside>
  );
}
