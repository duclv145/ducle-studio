"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";

export default function Loader() {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // counter from 0 → 100
    const start = performance.now();
    const total = 1700; // total duration ms
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / total);
      // ease-out
      const eased = 1 - Math.pow(1 - p, 2);
      setCount(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 320);
    };
    raf = requestAnimationFrame(tick);

    // lock scroll while loading
    document.documentElement.style.overflow = "hidden";

    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (done) document.documentElement.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          aria-hidden
          initial={{ y: 0 }}
          exit={{
            y: "-101%",
            transition: { duration: 0.95, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[200] bg-ink text-bg flex flex-col"
        >
          {/* meta top */}
          <div className="px-5 md:px-8 pt-6 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-bg/55">
            <span className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-yellow animate-pulse" />
              Booting · DucLe
            </span>
            <span>v1.0 / 2026</span>
          </div>

          {/* center */}
          <div className="flex-1 grid place-items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  ease: [0.76, 0, 0.24, 1],
                },
              }}
              className="relative"
            >
              <Image
                src={logo}
                alt=""
                width={120}
                height={90}
                priority
                style={{ width: 120, height: "auto" }}
              />
            </motion.div>
          </div>

          {/* bottom counter */}
          <div className="px-5 md:px-8 pb-7 flex items-end justify-between gap-6">
            <span className="font-display text-[clamp(64px,12vw,160px)] tracking-[-0.045em] leading-[0.85] tabular-nums">
              {String(count).padStart(3, "0")}
            </span>
            <div className="flex flex-col items-end gap-3 pb-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-bg/55">
                Loading assets
              </span>
              <div className="h-px w-40 md:w-72 bg-bg/15 overflow-hidden">
                <motion.div
                  className="h-full bg-yellow"
                  style={{ width: `${count}%` }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
