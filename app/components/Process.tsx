"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const steps = [
  {
    n: "01",
    title: "Discover",
    body: "We dig in: stakeholder interviews, audits, market reads. We come back with sharp questions, not pretty slides.",
    duration: "Week 1–2",
  },
  {
    n: "02",
    title: "Define",
    body: "Positioning, narrative, success metrics. Everyone signs off on the brief before we touch a pixel.",
    duration: "Week 2–3",
  },
  {
    n: "03",
    title: "Design",
    body: "Concepts, type systems, wireframes, motion studies. Tight feedback loops, no surprises at the end.",
    duration: "Week 3–6",
  },
  {
    n: "04",
    title: "Build",
    body: "Hand-built Next.js, headless CMS, smooth motion. Production-ready, not a Figma export.",
    duration: "Week 5–9",
  },
  {
    n: "05",
    title: "Launch & evolve",
    body: "Go live, measure, iterate. We stay on retainer for the launches that matter.",
    duration: "Week 10+",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="px-5 md:px-8 py-24 md:py-36 border-t border-ink/15"
    >
      <div className="mx-auto max-w-[1480px]">
        <SectionLabel
          index="02"
          title="How we work"
          subtitle="Five honest stages. No black-box, no scope creep."
        />

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.65, 0, 0.35, 1],
              }}
              className="group relative bg-bg-2 rounded-3xl p-6 md:p-7 min-h-[280px] md:min-h-[340px] flex flex-col justify-between border border-ink/8 transition-colors hover:bg-ink hover:text-bg"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[12px] tracking-[0.18em] uppercase opacity-60">
                  {s.n}
                </span>
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase opacity-50">
                  {s.duration}
                </span>
              </div>

              <div>
                <h3 className="font-display tracking-[-0.025em] text-[clamp(28px,2.4vw,40px)] leading-[1.05] mb-3">
                  {s.title}
                </h3>
                <p className="text-[14px] md:text-[15px] leading-[1.55] opacity-80">
                  {s.body}
                </p>
              </div>

              {/* tiny indicator dot that pulses on hover */}
              <span className="absolute right-5 bottom-5 size-2 rounded-full bg-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
