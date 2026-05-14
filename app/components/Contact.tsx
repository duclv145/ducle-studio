"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const marqueeItems = [
  "Get in touch",
  "Available for work",
  "Hanoi, Vietnam",
  "Graphic Designer",
  "AI Design",
  "Brand Identity",
  "Open to collaborate",
];

const Dot = () => (
  <span className="inline-block size-2 rounded-full bg-yellow mx-8 md:mx-12 shrink-0 align-middle" />
);

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-ink text-bg rounded-t-[40px] md:rounded-t-[60px] mt-12 overflow-hidden"
    >
      {/* Background decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 size-[600px] rounded-full bg-yellow/5 blur-[120px]" />
        <div className="absolute bottom-60 -left-20 size-[400px] rounded-full bg-yellow/3 blur-[100px]" />
      </div>

      <div className="relative px-5 md:px-8 pt-20 md:pt-32">
        <div className="mx-auto max-w-[1480px]">

          {/* Top row: label + availability badge */}
          <div className="flex items-start justify-between">
            <SectionLabel index="04" title="Contact" />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden md:flex items-center gap-2 border border-bg/20 rounded-full px-4 py-2 mt-1"
            >
              <span className="size-2 rounded-full bg-yellow animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-bg/60">
                Available for work
              </span>
            </motion.div>
          </div>

          {/* Rotating badges — email + phone side by side */}
          <div className="mt-10 md:mt-14 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex flex-col items-center gap-6"
            >
              <div className="shrink-0 relative size-28">
                <svg viewBox="0 0 100 100" className="absolute inset-0 spin-slow text-bg/40" style={{ animationDirection: 'reverse' }}>
                  <defs>
                    <path id="phone-circle" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
                  </defs>
                  <text className="font-mono fill-current" fontSize="9">
                    <textPath href="#phone-circle">
                      CALL ME · 0961 893 268 · HANOI · VN ·{" "}
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 grid place-items-center">
                  <motion.svg
                    width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                    className="text-yellow"
                    animate={{ rotate: [0, 15, -10, 15, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 011 1.27 2 2 0 013 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
                  </motion.svg>
                </div>
              </div>
              <a
                href="tel:+84961893268"
                className="font-display font-medium tracking-[-0.03em] leading-none text-[clamp(20px,3.5vw,56px)] text-bg/70 hover:text-yellow transition-colors duration-500"
              >
                +84 961 893 268
              </a>
            </motion.div>

          {/* Email */}
          <div className="flex flex-col items-center gap-6">
            {/* Rotating circle badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="shrink-0 relative size-28"
            >
              <svg viewBox="0 0 100 100" className="absolute inset-0 spin-slow text-bg/40">
                <defs>
                  <path id="contact-circle" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
                </defs>
                <text className="font-mono fill-current" fontSize="9">
                  <textPath href="#contact-circle">
                    SEND A MESSAGE · DUCLE STUDIO · LET'S TALK ·{" "}
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 grid place-items-center">
                <motion.svg
                  width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                  className="text-yellow"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </motion.svg>
              </div>
            </motion.div>

            {/* Email */}
            <a
              href="mailto:duclv145@gmail.com"
              className="font-display font-medium tracking-[-0.03em] leading-none text-[clamp(20px,3.5vw,56px)] text-bg/70 hover:text-yellow transition-colors duration-500"
            >
              duclv145@gmail.com
            </a>
          </div>

          </div>
        </div>
      </div>

      {/* Scrolling marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative mt-12 md:mt-16 border-y border-bg/10 py-4 md:py-5 overflow-hidden"
      >
        <div className="flex w-max marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center shrink-0">
              <span className="font-mono text-[11px] md:text-[13px] uppercase tracking-[0.2em] text-bg/50 whitespace-nowrap">
                {item}
              </span>
              <Dot />
            </span>
          ))}
        </div>
      </motion.div>

      <div className="relative px-5 md:px-8">
        <div className="mx-auto max-w-[1480px]">
          {/* Info grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-12 md:mt-16 mx-auto max-w-[640px] grid grid-cols-2 gap-y-10 gap-x-16 pb-20 md:pb-28"
          >
            {/* Location */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-yellow">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-bg/30">Location</p>
              </div>
              <p className="text-[15px] text-bg/65 leading-[1.6]">
                Kim Ma, Ba Dinh<br />Hanoi, Vietnam
              </p>
            </div>

            {/* Social */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-yellow">
                  <path d="M22 2L11 13M22 2l-7 20-5-9-9-5 20-7z"/>
                </svg>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-bg/30">Social</p>
              </div>
              <ul className="space-y-2">
                <li>
                  <a href="http://facebook.com/duclee145" target="_blank" rel="noopener noreferrer"
                    className="text-[15px] text-bg/65 hover:text-yellow transition-colors duration-200 inline-flex items-center gap-1.5">
                    Facebook
                    <svg width="9" height="9" viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H4M11 3v7" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/></svg>
                  </a>
                </li>
                <li>
                  <a href="http://linkedin.com/in/duclv145" target="_blank" rel="noopener noreferrer"
                    className="text-[15px] text-bg/65 hover:text-yellow transition-colors duration-200 inline-flex items-center gap-1.5">
                    LinkedIn
                    <svg width="9" height="9" viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H4M11 3v7" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/></svg>
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* footer strip */}
      <div className="border-t border-bg/10">
        <div className="mx-auto max-w-[1480px] px-5 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-bg/30">
          <span>© 2026 Duc Le · All rights reserved</span>
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-yellow animate-pulse" />
            Vibe Coding
          </span>
          <a href="#top" className="hover:text-bg/60 transition-colors duration-200">Back to top ↑</a>
        </div>
      </div>

      {/* Huge wordmark */}
      <div className="px-5 md:px-8 pb-4 md:pb-8 overflow-hidden">
        <div className="mx-auto max-w-[1480px]">
          <div className="font-display font-medium tracking-[-0.06em] leading-[0.85] text-[clamp(72px,21vw,340px)] text-bg/[0.05] select-none whitespace-nowrap">
            THANK YO<span className="text-yellow/10">U</span>
          </div>
        </div>
      </div>
    </section>
  );
}
