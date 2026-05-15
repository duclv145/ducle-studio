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
      className="relative min-h-svh px-5 md:px-8 pt-24 md:pt-28"
    >
      <div className="mx-auto max-w-[1480px] flex items-end gap-8 md:gap-14 min-h-[calc(100svh-6rem)] pb-16 md:pb-20">

        {/* Photo 3:4 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.65, 0, 0.35, 1] }}
          className="hidden md:block shrink-0 w-[200px] lg:w-[256px] aspect-[3/4] rounded-2xl overflow-hidden bg-ink/10 relative"
        >
          <Image
            src="/avatar.png"
            alt="Duc Le — Graphic Designer"
            fill
            className="object-cover"
            sizes="300px"
            priority
          />
        </motion.div>

        {/* Headline */}
        <div className="flex-1 min-w-0">
          <h1 className="font-display font-medium tracking-[-0.04em] leading-[0.93]">

            {/* Greeting — small */}
            <span className="block overflow-hidden mb-2">
              <motion.span
                className="block italic font-normal text-muted text-[clamp(14px,1.2vw,20px)]"
                variants={lineUp}
                custom={0}
                initial="hidden"
                animate="show"
              >
                Hi,
              </motion.span>
            </span>

            {/* Name */}
            <span className="block overflow-hidden text-[clamp(44px,7vw,116px)]">
              <motion.span className="block" variants={lineUp} custom={1} initial="hidden" animate="show">
                I&apos;m Duc Le
              </motion.span>
            </span>

            {/* Role line 1 */}
            <span className="block overflow-hidden text-[clamp(44px,7vw,116px)]">
              <motion.span className="block" variants={lineUp} custom={2} initial="hidden" animate="show">
                Graphic Designer &amp;
              </motion.span>
            </span>

            {/* Role line 2 */}
            <span className="block overflow-hidden text-[clamp(44px,7vw,116px)]">
              <motion.span className="block" variants={lineUp} custom={3} initial="hidden" animate="show">
                Generative AI Designer<span className="text-yellow">.</span>
              </motion.span>
            </span>

          </h1>
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
