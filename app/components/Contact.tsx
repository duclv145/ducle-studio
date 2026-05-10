"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-ink text-bg rounded-t-[40px] md:rounded-t-[60px] mt-12 overflow-hidden"
    >
      <div className="px-5 md:px-8 pt-24 md:pt-36 pb-10 md:pb-14">
        <div className="mx-auto max-w-[1480px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
            className="flex items-start justify-between gap-6 mb-10"
          >
            <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-bg/55">
              [ 06 ] Contact
            </span>
            <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-bg/55">
              Booking · Q3 2026
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
            className="font-display font-medium tracking-[-0.045em] leading-[0.92] text-[clamp(64px,13vw,220px)]"
          >
            Got a brief
            <br />
            <span className="inline-flex items-center gap-4 md:gap-8">
              that bites
              <span className="text-yellow inline-block translate-y-[-0.08em]">
                ?
              </span>
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.65, 0, 0.35, 1] }}
            className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-end"
          >
            <a
              href="mailto:hello@ducle.studio"
              className="md:col-span-7 group inline-flex items-center gap-4 font-display tracking-[-0.03em] text-[clamp(28px,4vw,56px)] leading-none"
            >
              <span className="grid place-items-center size-12 md:size-14 rounded-full bg-yellow text-ink transition-transform group-hover:rotate-45 shrink-0">
                <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 11L11 3M11 3H4M11 3v7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="square"
                  />
                </svg>
              </span>
              <span className="link-underline">hello@ducle.studio</span>
            </a>

            <div className="md:col-span-5 grid grid-cols-2 gap-6 text-bg/80">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-bg/45 mb-2">
                  Studio
                </div>
                <div className="text-[15px] leading-[1.55]">
                  44 Lý Quốc Sư
                  <br />
                  Hoàn Kiếm, Hà Nội
                </div>
              </div>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-bg/45 mb-2">
                  Follow
                </div>
                <ul className="space-y-1.5 text-[15px]">
                  <li>
                    <a href="#" className="link-underline">
                      Instagram ↗
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-underline">
                      Are.na ↗
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-underline">
                      Read.cv ↗
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* footer strip */}
      <div className="border-t border-bg/15 mt-20 md:mt-28">
        <div className="mx-auto max-w-[1480px] px-5 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-bg/55">
          <span>© 2026 DucLe Studio · All rights reserved</span>
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-yellow animate-pulse" />
            Vibe-coded in Hanoi
          </span>
          <a href="#top" className="link-underline">
            Back to top ↑
          </a>
        </div>
      </div>

      {/* huge wordmark */}
      <div className="px-5 md:px-8 pb-6 md:pb-10">
        <div className="mx-auto max-w-[1480px]">
          <div className="font-display font-medium tracking-[-0.06em] leading-[0.85] text-[clamp(72px,21vw,340px)] text-bg/8 select-none whitespace-nowrap overflow-hidden">
            DUCLE<span className="text-yellow/70">/</span>STUDIO
          </div>
        </div>
      </div>
    </section>
  );
}
