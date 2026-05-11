"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="about" className="px-5 md:px-8 py-24 md:py-36">
      <div className="mx-auto max-w-[1480px]">
        <SectionLabel index="01" title="About" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
            className="md:col-span-7"
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.65, 0, 0.35, 1] }}
            className="md:col-span-5 md:col-start-9 space-y-6"
          >
            <div className="w-full h-auto rounded-2xl overflow-hidden">
              <Image
                src="/avatar.png"
                alt="DucLe Studio"
                width={400}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left space-y-1">
              <h4 className="font-display text-[24px] font-medium text-ink">
                Duc Le
              </h4>
              <p className="text-[14px] text-muted">May 14, 1993</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
