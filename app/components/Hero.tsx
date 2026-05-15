"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-svh px-5 md:px-8 flex flex-col justify-between pt-24 md:pt-28 pb-14 md:pb-20"
    >
      <div className="mx-auto w-full max-w-[1480px] flex flex-col justify-between flex-1 gap-12">

        {/* ── TOP: photo + greeting ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.65, 0, 0.35, 1] }}
          className="flex items-center gap-4 md:gap-5"
        >
          {/* small 3:4 photo */}
          <div className="shrink-0 w-[64px] md:w-[80px] aspect-[3/4] rounded-xl overflow-hidden bg-ink/10 relative">
            <Image
              src="/avatar.png"
              alt="Duc Le"
              fill
              className="object-cover"
              sizes="100px"
              priority
            />
          </div>

          {/* greeting text */}
          <div className="font-sans leading-[1.3]">
            <p className="text-[14px] md:text-[16px] text-muted">Greeting,</p>
            <p className="text-[16px] md:text-[20px] font-medium text-ink">I&apos;m Duc Le</p>
          </div>
        </motion.div>

        {/* ── BOTTOM: big headline ── */}
        <h1 className="font-display font-medium tracking-[-0.045em] leading-[0.9] text-[clamp(52px,8.5vw,142px)]">
          <span className="block overflow-hidden">
            <motion.span className="block" variants={lineUp} custom={0} initial="hidden" animate="show">
              Graphic Designer
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span className="block" variants={lineUp} custom={1} initial="hidden" animate="show">
              &amp; Generative AI
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span className="block" variants={lineUp} custom={2} initial="hidden" animate="show">
              Designer<span className="text-yellow">.</span>
            </motion.span>
          </span>
        </h1>

      </div>

      {/* corner decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute right-5 md:right-8 top-32 md:top-40 hidden lg:block"
      >
        <div className="relative size-24 md:size-28">
          <svg viewBox="0 0 100 100" className="absolute inset-0 spin-slow text-ink">
            <defs>
              <path id="circle-text" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
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
