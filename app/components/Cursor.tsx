"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [variant, setVariant] = useState<"default" | "hover" | "view">(
    "default"
  );
  const [hidden, setHidden] = useState(true);
  const hiddenRef = useRef(true);
  const [enabled, setEnabled] = useState(false);

  // springs for smooth follow
  const springConfig = { stiffness: 380, damping: 28, mass: 0.6 };
  const sx = useSpring(x, springConfig);
  const sy = useSpring(y, springConfig);

  useEffect(() => {
    // skip on touch devices
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (hiddenRef.current) { hiddenRef.current = false; setHidden(false); }
    };
    const onLeave = () => { hiddenRef.current = true; setHidden(true); };
    const onEnter = () => { hiddenRef.current = false; setHidden(false); };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    // hover-state delegation
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!t || !t.closest) return;
      if (t.closest("[data-cursor='view']")) {
        setVariant("view");
      } else if (
        t.closest("a, button, [role='button'], [data-cursor='hover']")
      ) {
        setVariant("hover");
      } else {
        setVariant("default");
      }
    };
    document.addEventListener("mouseover", onOver);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseover", onOver);
    };
  }, [x, y]); // hiddenRef avoids re-registering listeners on every hide/show

  if (!enabled) return null;

  const isView = variant === "view";
  const isHover = variant === "hover";

  return (
    <>
      {/* hide native cursor on interactive */}
      <style jsx global>{`
        @media (pointer: fine) {
          html,
          body,
          a,
          button {
            cursor: none !important;
          }
        }
      `}</style>

      {/* outer ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[100] mix-blend-difference"
        style={{ x: sx, y: sy }}
      >
        <motion.div
          animate={{
            width: isView ? 96 : isHover ? 56 : 28,
            height: isView ? 96 : isHover ? 56 : 28,
            opacity: hidden ? 0 : 1,
            backgroundColor: isView
              ? "rgba(255,214,10,1)"
              : "rgba(255,214,10,0)",
            borderColor: isView ? "#ffd60a" : "#f4f1ec",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 26,
            mass: 0.5,
          }}
          className="rounded-full border flex items-center justify-center -translate-x-1/2 -translate-y-1/2 font-mono uppercase tracking-[0.16em]"
          style={{ borderWidth: 1 }}
        >
          {isView && (
            <span className="text-[10px] text-ink">VIEW</span>
          )}
        </motion.div>
      </motion.div>

      {/* inner dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[101]"
        style={{ x, y }}
      >
        <motion.div
          animate={{
            width: isHover || isView ? 0 : 6,
            height: isHover || isView ? 0 : 6,
            opacity: hidden ? 0 : 1,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="rounded-full bg-yellow -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>
    </>
  );
}
