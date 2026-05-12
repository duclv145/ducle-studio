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

        {/* big headline */}
        <h1 className="mt-10 md:mt-16 font-display font-medium tracking-[-0.045em] leading-[0.92] text-[clamp(58px,11.5vw,200px)]">
          <span className="block">
            <Word i={0}>Graphic</Word> <Word i={1}>Design</Word>
          </span>
          <span className="block">
            <Word i={2}>-</Word>{" "}
            <Word i={3}>Generative</Word>
          </span>
          <span className="block">
            <Word i={4} className="relative">
              <span className="relative z-10">AI</span>
              <span
                aria-hidden
                className="absolute inset-x-[-6%] inset-y-[14%] -z-0 rounded-[18px] bg-yellow"
              />
            </Word>{" "}
            <Word i={5} className="relative">
              <span className="relative z-10">Design</span>
              <span
                aria-hidden
                className="absolute inset-x-[-6%] inset-y-[14%] -z-0 rounded-[18px] bg-yellow"
              />
            </Word>
          </span>
        </h1>

        {/* lower row */}
        <div className="mt-14 md:mt-24 flex justify-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col items-start md:items-end gap-4"
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
                AI ··· DUCLE ··· DESIGN · AI · DESIGN ·{" "}
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
