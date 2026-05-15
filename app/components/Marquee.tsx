"use client";

import { motion } from "framer-motion";

const items = [
  "Brand identity",
  "Web design",
  "Development",
  "Motion",
  "Art direction",
  "Strategy",
  "Editorial",
  "Packaging",
];

const Star = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    className="shrink-0 text-ink"
    fill="currentColor"
  >
    <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" />
  </svg>
);

export default function Marquee() {
  const row = (
    <div className="flex items-center gap-8 md:gap-10 px-4 md:px-6 shrink-0">
      {items.map((it) => (
        <span key={it} className="flex items-center gap-8 md:gap-10 shrink-0">
          <span className="font-display text-[clamp(16px,2.6vw,38px)] tracking-[-0.04em] leading-none">
            {it}
          </span>
          <Star />
        </span>
      ))}
    </div>
  );

  return (
    <motion.section
      aria-hidden
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
      className="bg-yellow border-y border-yellow py-3 md:py-5 overflow-hidden"
    >
      <div className="flex w-max marquee-track">
        {row}
        {row}
      </div>
    </motion.section>
  );
}
