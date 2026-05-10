"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const stats = [
  { k: "07", v: "Years in the field" },
  { k: "60+", v: "Brands shipped" },
  { k: "12", v: "Awards & features" },
  { k: "100%", v: "Independent" },
];

export default function About() {
  return (
    <section id="about" className="px-5 md:px-8 py-24 md:py-36">
      <div className="mx-auto max-w-[1480px]">
        <SectionLabel index="04" title="The studio" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
            className="md:col-span-7"
          >
            <p className="font-display tracking-[-0.025em] text-[clamp(26px,3vw,44px)] leading-[1.15] text-ink-2">
              DucLe is a tight crew of designers and engineers based in
              <span className="text-ink"> Hanoi</span>. We partner with founders
              and in-house teams to make brands and websites that
              <span className="relative inline-block isolate px-2 mx-1">
                <span className="relative z-10">feel inevitable</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 inset-y-[10%] -z-10 rounded-md bg-yellow"
                />
              </span>
              — clear, opinionated, and built to last.
            </p>
            <p className="mt-8 max-w-xl text-[15px] md:text-[16px] text-muted leading-[1.65]">
              Every project starts with a question, not a deck. We work in small
              squads, ship in tight loops, and treat the production work — type,
              motion, code — as the design. No ghost writers, no offshoring, no
              templates dressed up as strategy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.65, 0, 0.35, 1] }}
            className="md:col-span-5 md:col-start-9 grid grid-cols-2 gap-6 md:gap-8"
          >
            {stats.map((s) => (
              <div key={s.k} className="border-t border-ink/20 pt-4">
                <div className="font-display text-[clamp(40px,5vw,72px)] tracking-[-0.04em] leading-none">
                  {s.k}
                </div>
                <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                  {s.v}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
