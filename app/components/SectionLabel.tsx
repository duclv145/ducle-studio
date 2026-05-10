"use client";

import { motion } from "framer-motion";

export default function SectionLabel({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
      className="flex items-end justify-between gap-6 mb-10 md:mb-16"
    >
      <div className="flex items-baseline gap-4 md:gap-6">
        <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-muted">
          [ {index} ]
        </span>
        <h2 className="font-display tracking-[-0.035em] leading-[0.95] text-[clamp(38px,6.4vw,92px)] font-medium">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="hidden md:block max-w-xs text-[14px] text-muted leading-snug">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
