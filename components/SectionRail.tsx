"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navItems } from "@/lib/data";

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
      {items.map((item, index) => {
        const id = item.href.slice(1);
        const active = activeSection === id;
        return (
          <a key={item.href} href={item.href} className={`section-rail-link ${active ? "is-active" : ""}`} aria-label={`Go to ${item.label}`}>
            <span className="section-rail-label">{item.label}</span>
            <span className="section-rail-index">{String(index).padStart(2, "0")}</span>
            <span className="section-rail-dot" />
          </a>
        );
      })}
    </motion.aside>
  );
}
