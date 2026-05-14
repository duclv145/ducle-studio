"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-ink text-bg rounded-t-[40px] md:rounded-t-[60px] mt-12 overflow-hidden"
    >
      <div className="px-5 md:px-8 pt-20 md:pt-32">
        <div className="mx-auto max-w-[1480px]">

          {/* Top row: label + availability badge */}
          <div className="flex items-start justify-between">
            <SectionLabel index="04" title="Contact" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden md:flex items-center gap-2 border border-bg/20 rounded-full px-4 py-2 mt-1"
            >
              <span className="size-2 rounded-full bg-yellow animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-bg/60">
                Available for work
              </span>
            </motion.div>
          </div>

          {/* Full-width email CTA */}
          <motion.a
            href="mailto:duclv145@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.65, 0, 0.35, 1] }}
            className="group mt-14 md:mt-20 flex items-center justify-between border-t border-b border-bg/15 py-8 md:py-10 gap-4"
          >
            <span className="font-display font-medium tracking-[-0.035em] text-[clamp(22px,4.5vw,72px)] text-bg group-hover:text-yellow transition-colors duration-500 leading-none">
              duclv145@gmail.com
            </span>
            <span className="shrink-0 grid place-items-center size-12 md:size-16 rounded-full border border-bg/30 group-hover:bg-yellow group-hover:border-yellow group-hover:text-ink transition-all duration-500">
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                <path d="M3 11L11 3M11 3H4M11 3v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square"/>
              </svg>
            </span>
          </motion.a>

          {/* Contact info grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.65, 0, 0.35, 1] }}
            className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 pb-20 md:pb-32"
          >
            <div className="space-y-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-bg/30">Phone</p>
              <a href="tel:+84961893268" className="block text-[15px] md:text-[16px] text-bg/65 hover:text-bg transition-colors duration-200">
                +84 961 893 268
              </a>
            </div>

            <div className="space-y-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-bg/30">Email</p>
              <a href="mailto:duclv145@gmail.com" className="block text-[15px] md:text-[16px] text-bg/65 hover:text-bg transition-colors duration-200">
                duclv145@gmail.com
              </a>
            </div>

            <div className="space-y-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-bg/30">Location</p>
              <p className="text-[15px] md:text-[16px] text-bg/65 leading-[1.6]">
                Kim Ma, Ba Dinh<br />Hanoi, Vietnam
              </p>
            </div>

            <div className="space-y-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-bg/30">Social</p>
              <ul className="space-y-2">
                <li>
                  <a href="http://facebook.com/duclee145" target="_blank" rel="noopener noreferrer"
                    className="text-[15px] md:text-[16px] text-bg/65 hover:text-yellow transition-colors duration-200 inline-flex items-center gap-1.5">
                    Facebook
                    <svg width="10" height="10" viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H4M11 3v7" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/></svg>
                  </a>
                </li>
                <li>
                  <a href="http://linkedin.com/in/duclv145" target="_blank" rel="noopener noreferrer"
                    className="text-[15px] md:text-[16px] text-bg/65 hover:text-yellow transition-colors duration-200 inline-flex items-center gap-1.5">
                    LinkedIn
                    <svg width="10" height="10" viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H4M11 3v7" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/></svg>
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* footer strip */}
      <div className="border-t border-bg/10">
        <div className="mx-auto max-w-[1480px] px-5 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-bg/35">
          <span>© 2026 Duc Le · All rights reserved</span>
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-yellow animate-pulse" />
            Vibe Coding
          </span>
          <a href="#top" className="hover:text-bg/70 transition-colors duration-200">
            Back to top ↑
          </a>
        </div>
      </div>

      {/* huge wordmark */}
      <div className="px-5 md:px-8 pb-4 md:pb-8 overflow-hidden">
        <div className="mx-auto max-w-[1480px]">
          <div className="font-display font-medium tracking-[-0.06em] leading-[0.85] text-[clamp(72px,21vw,340px)] text-bg/[0.05] select-none whitespace-nowrap">
            THANK YO<span className="text-yellow/15">U</span>
          </div>
        </div>
      </div>
    </section>
  );
}
