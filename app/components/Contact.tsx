"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-ink text-bg rounded-t-[40px] md:rounded-t-[60px] mt-12 overflow-hidden"
    >
      <div className="px-5 md:px-8 pt-24 md:pt-36 pb-10 md:pb-14">
        <div className="mx-auto max-w-[1480px]">
          <SectionLabel index="04" title="Contact" />
          <div>
            {/* Text Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.65, 0, 0.35, 1] }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 border-t border-bg/15 pt-8"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-bg/80">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-bg/45">
                    Contact
                  </div>
                </div>
                <div className="space-y-2 text-[15px] text-bg/80">
                  <p>0961 893 268</p>
                  <a href="mailto:duclv145@gmail.com" className="link-underline block">
                    duclv145@gmail.com
                  </a>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-bg/80">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-bg/45">
                    Address
                  </div>
                </div>
                <div className="text-[15px] leading-[1.55] text-bg/80">
                  Kim Ma - Ba Dinh - Hanoi
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-bg/80">
                    <path d="M22 2L11 13M22 2l-7 20-5-9-9-5 20-7z"/>
                  </svg>
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-bg/45">
                    Follow
                  </div>
                </div>
                <ul className="space-y-2 text-[15px] text-bg/80">
                  <li>
                    <a href="http://facebook.com/duclee145" className="link-underline">
                      Facebook ↗
                    </a>
                  </li>
                  <li>
                    <a href="http://linkedin.com/in/duclv145" className="link-underline">
                      LinkedIn ↗
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* footer strip */}
      <div className="border-t border-bg/15 mt-20 md:mt-28">
        <div className="mx-auto max-w-[1480px] px-5 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-bg/55">
          <span>© 2026 DucLe Portfolio · All rights reserved</span>
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-yellow animate-pulse" />
            Vibe Coding
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
            THANK YO<span className="text-yellow">U</span>!
          </div>
        </div>
      </div>
    </section>
  );
}
