"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const quotes = [
  {
    body: "DucLe treats type and code with the same obsession. They turned a fuzzy brief into a brand the whole company actually uses.",
    name: "Linh Nguyen",
    role: "Co-founder, Kindred",
  },
  {
    body: "Most studios deliver a deck. They delivered a working website and a brand system on the same day. Wild.",
    name: "Marcus Hale",
    role: "CEO, Northbeat",
  },
  {
    body: "Sharp, fast, and zero pretense. The motion work alone made our launch.",
    name: "Sara Adib",
    role: "Head of Product, Voyager",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % quotes.length), 6000);
    return () => clearInterval(t);
  }, []);

  const q = quotes[i];

  return (
    <section className="px-5 md:px-8 py-24 md:py-36 border-t border-ink/15">
      <div className="mx-auto max-w-[1480px] grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-2">
          <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-muted">
            [ 05 ] Words
          </span>
        </div>

        <div className="md:col-span-8 relative min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
            >
              <p className="font-display tracking-[-0.025em] text-[clamp(26px,3.4vw,52px)] leading-[1.18] text-ink">
                <span className="text-yellow mr-1">“</span>
                {q.body}
                <span className="text-yellow ml-1">”</span>
              </p>
              <footer className="mt-8 flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.18em] text-muted">
                <span className="size-1.5 rounded-full bg-yellow" />
                {q.name} — {q.role}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="md:col-span-2 flex md:justify-end gap-2">
          {quotes.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Quote ${k + 1}`}
              className={`h-1 rounded-full transition-all ${
                k === i ? "w-10 bg-ink" : "w-5 bg-ink/25 hover:bg-ink/45"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
