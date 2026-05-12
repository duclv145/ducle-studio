"use client";

import { motion } from "framer-motion";
import { useRef, useCallback } from "react";

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
  const turbulenceRef = useRef<SVGFETurbulenceElement>(null);
  const rafRef = useRef<number>(0);
  const freqRef = useRef(0);
  const dirRef = useRef(1);

  const startDistort = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    dirRef.current = 1;

    const tick = () => {
      freqRef.current += 0.0018 * dirRef.current;

      if (freqRef.current >= 0.035) {
        dirRef.current = -1;
      }
      if (freqRef.current <= 0) {
        freqRef.current = 0;
        turbulenceRef.current?.setAttribute("baseFrequency", "0 0");
        return;
      }

      const bx = freqRef.current;
      const by = freqRef.current * 0.6;
      turbulenceRef.current?.setAttribute("baseFrequency", `${bx.toFixed(4)} ${by.toFixed(4)}`);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const stopDistort = useCallback(() => {
    dirRef.current = -1;
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-svh px-5 md:px-8 pt-24 md:pt-32 pb-16 md:pb-20"
    >
      {/* SVG distortion filter */}
      <svg className="absolute" style={{ width: 0, height: 0, overflow: "hidden" }} aria-hidden>
        <defs>
          <filter id="hero-distort" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              ref={turbulenceRef}
              type="turbulence"
              baseFrequency="0 0"
              numOctaves="3"
              seed="5"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="30"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <div className="mx-auto max-w-[1480px]">

        {/* big headline */}
        <h1
          className="mt-0 font-display font-medium tracking-[-0.045em] leading-[0.92] text-[clamp(72px,14vw,220px)] cursor-default select-none"
          onMouseEnter={startDistort}
          onMouseLeave={stopDistort}
          style={{ filter: "url(#hero-distort)" }}
        >
          <span className="block">
            <Word i={0}>Graphic</Word> <Word i={1}>Design</Word>
          </span>
          <span className="block">
            <Word i={2}>—</Word>{" "}
            <Word i={3}>Generative</Word>
          </span>
          <span>
            <Word i={4}>AI</Word> <Word i={5}>Design</Word><span className="text-yellow">.</span>
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
