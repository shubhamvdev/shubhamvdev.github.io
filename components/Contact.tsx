"use client";

import { motion } from "framer-motion";
import { Code2, Mail, MapPin, Network, Phone, Send } from "lucide-react";
import { owner } from "@/lib/data";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  const contactItems = [
    { label: "Email", value: owner.email, href: `mailto:${owner.email}`, icon: Mail },
    { label: "Phone", value: owner.phone, href: `tel:${owner.phone.replaceAll(" ", "")}`, icon: Phone },
    { label: "Location", value: owner.location, href: "#home", icon: MapPin }
  ];

  const socialItems = [
    { label: "GitHub", href: owner.github, icon: Code2 },
    { label: "LinkedIn", href: owner.linkedin, icon: Network },
    { label: "Email", href: `mailto:${owner.email}`, icon: Mail }
  ];

  return (
    <section id="contact" className="relative z-10 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Contact"
          title="Let's build something sharp"
          description="Available for frontend and full stack opportunities involving React, Next.js, TypeScript, dashboards, and real-time products."
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="glass-card overflow-hidden rounded-2xl"
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Reach out
              </p>
              <h3 className="mt-4 text-3xl font-black text-white">Shubham Vishwakarma</h3>
              <p className="mt-4 leading-7 text-slate-300">
                Frontend / Full Stack Developer based in Bangalore, focused on thoughtful UI,
                reliable integrations, and fast product delivery.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {socialItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.label}
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.96 }}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white"
                    >
                      <Icon size={17} />
                      {item.label}
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid gap-4">
                {contactItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.label}
                      initial={{ opacity: 0, x: 18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.08 }}
                      whileHover={{ x: 5 }}
                      href={item.href}
                      className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.05] p-4 transition hover:border-cyan-300/30 hover:bg-white/[0.08]"
                    >
                      <span className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-300/10 text-cyan-100 ring-1 ring-cyan-300/20">
                        <Icon size={20} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm text-slate-400">{item.label}</span>
                        <span className="block break-words font-semibold text-white">{item.value}</span>
                      </span>
                    </motion.a>
                  );
                })}
              </div>

              <motion.a
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                href={`mailto:${owner.email}`}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-300 to-violet-300 px-6 py-4 text-sm font-black text-slate-950 shadow-glow"
              >
                Start a Conversation
                <Send size={18} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
