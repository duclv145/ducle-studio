"use client";

import { motion } from "framer-motion";
import { useRef, useState, useCallback } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

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

function ScrambleWord({
  text,
  i,
  className = "",
}: {
  text: string;
  i: number;
  className?: string;
}) {
  const [display, setDisplay] = useState(text);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const iterRef = useRef(0);

  const onEnter = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    iterRef.current = 0;

    intervalRef.current = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, idx) => {
            if (idx < iterRef.current) return text[idx]; // đã resolve
            return CHARS[Math.floor(Math.random() * CHARS.length)]; // đang scramble
          })
          .join("")
      );

      iterRef.current += 0.5;

      if (iterRef.current >= text.length) {
        setDisplay(text);
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, 28);
  }, [text]);

  return (
    <span
      className={`inline-block overflow-hidden align-bottom cursor-default ${className}`}
      onMouseEnter={onEnter}
    >
      <motion.span
        className="inline-block transition-colors duration-200 hover:text-ink/60"
        variants={lineUp}
        custom={i}
        initial="hidden"
        animate="show"
      >
        {display}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-svh px-5 md:px-8 pt-24 md:pt-32 pb-16 md:pb-20"
      style={{
        backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.18) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      <div className="mx-auto max-w-[1480px]">

        {/* big headline */}
        <h1 className="mt-0 font-display font-medium tracking-[-0.045em] leading-[0.92] text-[clamp(72px,14vw,220px)]">
          <span className="block">
            <ScrambleWord text="Graphic" i={0} /> <ScrambleWord text="Design" i={1} />
          </span>
          <span className="block">
            {/* Dấu — chỉ đổi màu vàng khi hover */}
            <span className="inline-block overflow-hidden align-bottom">
              <motion.span
                className="inline-block transition-colors duration-300 hover:text-yellow cursor-default"
                variants={lineUp}
                custom={2}
                initial="hidden"
                animate="show"
              >
                —
              </motion.span>
            </span>{" "}
            <ScrambleWord text="Generative" i={3} />
          </span>
          <span>
            <ScrambleWord text="AI" i={4} /> <ScrambleWord text="Design" i={5} /><span className="text-yellow">.</span>
          </span>
        </h1>

        {/* bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 md:mt-16 flex items-end justify-between gap-6"
        >
          <p className="font-mono text-[11px] md:text-[12px] uppercase tracking-[0.16em] text-muted leading-[1.6]">
            Senior Graphic Designer<br className="hidden sm:block" />
            <span className="sm:hidden"> — </span>Hanoi, Vietnam
          </p>
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-ink text-bg pl-4 pr-2 py-2 text-[11px] md:text-[12px] font-mono uppercase tracking-[0.14em] transition-all hover:gap-3 whitespace-nowrap shrink-0"
          >
            See selected work
            <span className="grid place-items-center size-6 md:size-7 rounded-full bg-yellow text-ink transition-transform group-hover:rotate-45">
              <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 11L11 3M11 3H4M11 3v7"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="square"
                />
              </svg>
            </span>
          </a>
        </motion.div>
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
