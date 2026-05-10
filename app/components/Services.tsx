"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const services = [
  {
    n: "01",
    title: "Brand identity",
    body: "Logos, type systems and visual languages built to outlast trends.",
    tags: ["Logo", "Guidelines", "Type"],
  },
  {
    n: "02",
    title: "Web design",
    body: "Story-driven marketing sites that turn attention into intent.",
    tags: ["UX", "UI", "Art direction"],
  },
  {
    n: "03",
    title: "Development",
    body: "Hand-built Next.js sites with smooth motion and obsessive detail.",
    tags: ["Next.js", "WebGL", "CMS"],
  },
  {
    n: "04",
    title: "Motion",
    body: "Interaction, scroll choreography and brand films that breathe.",
    tags: ["After Effects", "Lottie", "GSAP"],
  },
  {
    n: "05",
    title: "Strategy",
    body: "Positioning, messaging and naming for founders who play long.",
    tags: ["Research", "Naming", "Messaging"],
  },
];

export default function Services() {
  return (
    <section id="services" className="px-5 md:px-8 py-24 md:py-36">
      <div className="mx-auto max-w-[1480px]">
        <SectionLabel
          index="01"
          title="Services"
          subtitle="Five things we do well, and a thousand we politely decline."
        />

        <ul className="border-t border-ink/15">
          {services.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.05,
                ease: [0.65, 0, 0.35, 1],
              }}
              className="group relative border-b border-ink/15 py-7 md:py-9"
            >
              <span className="pointer-events-none absolute inset-0 bg-yellow origin-bottom scale-y-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100 group-hover:origin-top -z-0" />
              <div className="relative z-10 grid grid-cols-12 gap-4 md:gap-6 items-start">
                <span className="col-span-2 md:col-span-1 font-mono text-[12px] tracking-[0.18em] text-muted group-hover:text-ink/70 pt-2">
                  {s.n}
                </span>
                <h3 className="col-span-10 md:col-span-4 font-display font-medium tracking-[-0.03em] text-[clamp(28px,3.6vw,52px)] leading-[1]">
                  {s.title}
                </h3>
                <p className="col-span-12 md:col-span-4 text-[15px] md:text-[16px] text-ink-2 leading-[1.55]">
                  {s.body}
                </p>
                <div className="col-span-12 md:col-span-3 flex flex-wrap gap-2 md:justify-end pt-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] uppercase tracking-[0.14em] border border-ink/25 rounded-full px-3 py-1 group-hover:border-ink/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
