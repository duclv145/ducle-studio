"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import Logo from "./Logo";

const links = [
  { label: "About", href: "#about" },
  { label: "Selected work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
      className="fixed top-0 inset-x-0 z-50 px-5 md:px-8 pt-4"
    >
      <div
        className={`mx-auto flex items-center justify-between rounded-full border px-4 md:px-6 py-2.5 transition-all duration-500 ${
          scrolled
            ? "bg-bg-2/85 border-line backdrop-blur-md shadow-[0_2px_30px_rgba(0,0,0,0.05)]"
            : "bg-transparent border-transparent"
        }`}
      >
        <a href="#top" className="shrink-0">
          <Logo size={28} />
        </a>

        <nav className="hidden md:flex items-center gap-8 font-mono text-[12px] uppercase tracking-[0.14em]">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link-underline">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-ink text-bg px-4 py-2 text-[12px] font-mono uppercase tracking-[0.14em] transition-colors hover:bg-yellow hover:text-ink"
        >
          <span className="size-1.5 rounded-full bg-yellow group-hover:bg-ink transition-colors" />
          Let&apos;s talk
        </a>
      </div>
    </motion.header>
  );
}
