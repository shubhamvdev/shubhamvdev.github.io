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
    <section id="contact" className="section-shell relative z-10 px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
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
          className="contact-stage overflow-hidden rounded-[2.5rem]"
        >
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative overflow-hidden border-b border-white/10 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <span className="absolute -bottom-16 -left-8 text-[12rem] font-black leading-none text-white/[0.025]">HI</span>
              <p className="theme-accent-text relative text-sm font-semibold uppercase tracking-[0.22em]">
                Reach out
              </p>
              <h3 className="relative mt-5 max-w-xl text-4xl font-black leading-tight text-white sm:text-5xl">Have a product idea or a role in mind?</h3>
              <p className="relative mt-5 max-w-xl text-lg leading-8 text-slate-400">
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
                      className="theme-hover inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-300 transition hover:text-white"
                    >
                      <Icon size={17} />
                      {item.label}
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="bg-black/10 p-7 sm:p-10 lg:p-12">
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
                      className="theme-contact-row flex items-center gap-4 border-b border-white/10 py-5 transition"
                    >
                      <span className="theme-accent-surface grid h-11 w-11 place-items-center rounded-full border">
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
                className="primary-button mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-black text-white"
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
