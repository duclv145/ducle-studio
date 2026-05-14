"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-ink text-bg rounded-t-[40px] md:rounded-t-[60px] mt-12 overflow-hidden"
    >
      <div className="px-5 md:px-8 pt-24 md:pt-36">
        <div className="mx-auto max-w-[1480px]">
          <SectionLabel index="04" title="Contact" />

          {/* Big CTA headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
            className="mt-10 md:mt-14"
          >
            <h2 className="font-display font-medium tracking-[-0.04em] leading-[0.92] text-[clamp(52px,10vw,160px)] text-bg">
              Let&apos;s create<br />
              <span className="text-bg/30">something</span><br />
              great<span className="text-yellow">.</span>
            </h2>
          </motion.div>

          {/* Email CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.65, 0, 0.35, 1] }}
            className="mt-12 md:mt-16"
          >
            <a
              href="mailto:duclv145@gmail.com"
              className="group inline-flex items-center gap-4 md:gap-6"
            >
              <span className="font-display font-medium tracking-[-0.025em] text-[clamp(20px,3.5vw,52px)] text-bg/50 group-hover:text-bg transition-colors duration-300">
                duclv145@gmail.com
              </span>
              <span className="grid place-items-center size-10 md:size-14 rounded-full bg-yellow text-ink shrink-0 transition-transform duration-500 group-hover:rotate-45">
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4M11 3v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square"/>
                </svg>
              </span>
            </a>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
            className="mt-16 md:mt-24 h-px bg-bg/15 origin-left"
          />

          {/* Info row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
            className="mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 pb-16 md:pb-24"
          >
            {/* Phone */}
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bg/35 mb-3">Phone</p>
              <a href="tel:+84961893268" className="text-[15px] md:text-[16px] text-bg/70 hover:text-bg transition-colors duration-200">
                0961 893 268
              </a>
            </div>

            {/* Email */}
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bg/35 mb-3">Email</p>
              <a href="mailto:duclv145@gmail.com" className="text-[15px] md:text-[16px] text-bg/70 hover:text-bg transition-colors duration-200 break-all">
                duclv145@gmail.com
              </a>
            </div>

            {/* Location */}
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bg/35 mb-3">Location</p>
              <p className="text-[15px] md:text-[16px] text-bg/70 leading-[1.55]">
                Kim Ma, Ba Dinh<br />Hanoi, Vietnam
              </p>
            </div>

            {/* Social */}
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bg/35 mb-3">Follow</p>
              <ul className="space-y-2">
                <li>
                  <a href="http://facebook.com/duclee145" target="_blank" rel="noopener noreferrer"
                    className="text-[15px] md:text-[16px] text-bg/70 hover:text-yellow transition-colors duration-200">
                    Facebook ↗
                  </a>
                </li>
                <li>
                  <a href="http://linkedin.com/in/duclv145" target="_blank" rel="noopener noreferrer"
                    className="text-[15px] md:text-[16px] text-bg/70 hover:text-yellow transition-colors duration-200">
                    LinkedIn ↗
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* footer strip */}
      <div className="border-t border-bg/15">
        <div className="mx-auto max-w-[1480px] px-5 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-bg/40">
          <span>© 2026 Duc Le · All rights reserved</span>
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-yellow animate-pulse" />
            Vibe Coding
          </span>
          <a href="#top" className="hover:text-bg transition-colors duration-200">
            Back to top ↑
          </a>
        </div>
      </div>

      {/* huge wordmark */}
      <div className="px-5 md:px-8 pb-6 md:pb-10">
        <div className="mx-auto max-w-[1480px]">
          <div className="font-display font-medium tracking-[-0.06em] leading-[0.85] text-[clamp(72px,21vw,340px)] text-bg/[0.06] select-none whitespace-nowrap overflow-hidden">
            THANK YO<span className="text-yellow/20">U</span>!
          </div>
        </div>
      </div>
    </section>
  );
}
