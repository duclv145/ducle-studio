"use client";

import { motion } from "framer-motion";

const lineUp = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: {
      duration: 0.95,
      delay: 0.1 + i * 0.08,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  }),
};

const Word = ({
  children,
  i,
  className = "",
}: {
  children: React.ReactNode;
  i: number;
  className?: string;
}) => (
  <span className={`inline-block overflow-hidden align-bottom ${className}`}>
    <motion.span
      className="inline-block"
      variants={lineUp}
      custom={i}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.span>
  </span>
);

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-svh px-5 md:px-8 pt-32 md:pt-40 pb-16 md:pb-20"
    >
      <div className="mx-auto max-w-[1480px]">
        {/* meta row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center justify-between font-mono text-[11px] md:text-[12px] uppercase tracking-[0.18em] text-muted"
        >
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-yellow animate-pulse" />
            Available · 2026
          </span>
          <span className="hidden sm:block">Hanoi · Worldwide</span>
          <span>(D-001 / 2026)</span>
        </motion.div>

        {/* big headline */}
        <h1 className="mt-10 md:mt-16 font-display font-medium tracking-[-0.045em] leading-[0.92] text-[clamp(58px,11.5vw,200px)]">
          <span className="block">
            <Word i={0}>We</Word> <Word i={1}>design</Word>{" "}
            <Word i={2}>&amp;</Word>{" "}
            <Word i={3} className="text-muted">
              build
            </Word>
          </span>
          <span className="block">
            <Word i={4}>digital</Word>{" "}
            <Word i={5} className="relative">
              <span className="relative z-10">brands</span>
              <span
                aria-hidden
                className="absolute inset-x-[-6%] inset-y-[14%] -z-0 rounded-[18px] bg-yellow"
              />
            </Word>{" "}
            <Word i={6}>that</Word>
          </span>
          <span className="block">
            <Word i={7}>refuse</Word> <Word i={8}>to</Word>{" "}
            <Word i={9}>blend</Word>
            <Word i={10} className="text-yellow">
              .
            </Word>
          </span>
        </h1>

        {/* lower row */}
        <div className="mt-14 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.8 }}
            className="md:col-span-5 md:col-start-1 max-w-md text-[17px] md:text-[19px] leading-[1.55] text-ink-2"
          >
            DucLe is an independent studio shaping bold identities, websites
            and digital products for founders who care about the details — and
            the bigger picture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="md:col-span-5 md:col-start-8 flex flex-col items-start md:items-end gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full bg-ink text-bg pl-5 pr-2 py-2 text-[13px] font-mono uppercase tracking-[0.16em] transition-all hover:gap-4 whitespace-nowrap"
            >
              See selected work
              <span className="grid place-items-center size-9 rounded-full bg-yellow text-ink transition-transform group-hover:rotate-45">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 11L11 3M11 3H4M11 3v7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="square"
                  />
                </svg>
              </span>
            </a>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              ↓ Scroll · 09 projects
            </span>
          </motion.div>
        </div>
      </div>

      {/* corner decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute right-5 md:right-8 top-32 md:top-40 hidden lg:block"
      >
        <div className="relative size-24 md:size-28">
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 spin-slow text-ink"
          >
            <defs>
              <path
                id="circle-text"
                d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
              />
            </defs>
            <text className="font-mono fill-current" fontSize="9.5">
              <textPath href="#circle-text">
                DUCLE · STUDIO · DUCLE · STUDIO ·{" "}
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 grid place-items-center">
            <span className="size-3 rounded-full bg-yellow" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
