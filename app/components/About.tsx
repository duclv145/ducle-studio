"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="about" className="px-5 md:px-8 py-16 md:py-20">
      <div className="mx-auto max-w-[1480px]">
        <SectionLabel index="01" title="About" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
            className="md:col-span-10"
          >
            <p className="font-display tracking-[-0.025em] text-[clamp(26px,3vw,44px)] leading-[1.15] text-ink-2">
              With nearly a decade of experience since 2015, I've worked across
              <span className="text-ink"> technology, advertising, and design</span> at companies in
              <span className="relative inline-block isolate px-2 mx-1">
                <span className="relative z-10">Hanoi and HCMC</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 inset-y-[10%] -z-10 rounded-md bg-yellow"
                />
              </span>
              — crafting digital experiences that balance aesthetics with strategy.
            </p>
            <p className="mt-8 max-w-xl text-[15px] md:text-[16px] text-muted leading-[1.65]">
              From startups to established corporations, I've collaborated with diverse teams
              to deliver design solutions across branding, web design, and digital products.
              Every project reflects a commitment to thoughtful design, attention to detail,
              and creating work that lasts beyond trends.
            </p>
            {/* Skills tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {["Brand Identity", "UI/UX Design", "Motion Graphics", "Editorial", "Art Direction", "AI-Assisted Design"].map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-[11px] uppercase tracking-[0.12em] px-3 py-1.5 rounded-full border border-ink/20 text-ink/60"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
