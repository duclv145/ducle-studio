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

function Avatar3D() {
  return (
    <div className="shrink-0 w-[88px] md:w-[112px]">
      {/* Outer frame — static, clips inner rotation */}
      <div
        className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-ink/10"
        style={{
          transform: "rotate(-6deg)",
          perspective: "400px",
          boxShadow:
            "0 20px 40px rgba(0,0,0,0.22), 0 6px 12px rgba(0,0,0,0.14), 0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        {/* Inner image — 3D rotation, oversized to hide edges */}
        <motion.div
          animate={{
            rotateX: [3, 10, 3, -4, 3],
            rotateY: [-8, 5, 14, 5, -8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute"
          style={{
            inset: "-8%",
            width: "116%",
            height: "116%",
            transformStyle: "preserve-3d",
          }}
        >
          <Image
            src="/avatar.png"
            alt="Duc Le"
            fill
            className="object-cover"
            sizes="130px"
            priority
          />
        </motion.div>

        {/* Shine overlay — stays fixed on frame */}
        <div
          className="absolute inset-0 pointer-events-none z-10 rounded-xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 55%)",
          }}
        />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-svh px-5 md:px-8 pt-24 md:pt-28 pb-12 md:pb-16 flex flex-col"
    >
      <div className="mx-auto w-full max-w-[1480px] flex flex-col flex-1">

        {/* ── Spacer ── */}
        <div className="flex-1" />

        {/* ── Photo + Greeting ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
          className="flex items-center gap-4 md:gap-5 mb-8 md:mb-12"
        >
          <Avatar3D />

          <div className="leading-[1.35]">
            <p className="font-mono text-[16px] md:text-[20px] text-muted tracking-normal">Greeting,</p>
            <p className="font-mono text-[20px] md:text-[28px] font-medium text-ink tracking-normal">I&apos;m Duc Le</p>
          </div>
        </motion.div>

        {/* ── Big Headline ── */}
        <h1 className="font-display font-medium tracking-[-0.045em] leading-[0.88]">
          <span className="block overflow-hidden text-[clamp(58px,9.8vw,154px)]">
            <motion.span className="block" variants={lineUp} custom={0} initial="hidden" animate="show">
              Graphic Designer &amp;
            </motion.span>
          </span>
          <span className="block overflow-hidden text-[clamp(58px,9.8vw,154px)]">
            <motion.span className="block" variants={lineUp} custom={1} initial="hidden" animate="show">
              Generative AI Designer<span className="text-yellow">.</span>
            </motion.span>
          </span>
        </h1>

      </div>

      {/* corner spinning badge */}
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
