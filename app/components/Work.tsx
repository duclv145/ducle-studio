"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const projects = [
  {
    n: "01",
    client: "Kindred Coffee",
    title: "A morning ritual, redrawn.",
    discipline: "Brand · Web",
    year: "2025",
    accent: "#ffd60a",
    bg: "#0a0a0a",
    txt: "#f4f1ec",
  },
  {
    n: "02",
    client: "Northbeat",
    title: "Sound systems for the streets.",
    discipline: "Identity · Motion",
    year: "2025",
    accent: "#0a0a0a",
    bg: "#ffd60a",
    txt: "#0a0a0a",
  },
  {
    n: "03",
    client: "Form Atelier",
    title: "Furniture, slowly.",
    discipline: "Editorial · Web",
    year: "2024",
    accent: "#0a0a0a",
    bg: "#ece7df",
    txt: "#0a0a0a",
  },
  {
    n: "04",
    client: "Voyager Labs",
    title: "An OS for tiny rockets.",
    discipline: "Product · UI",
    year: "2024",
    accent: "#ffd60a",
    bg: "#15151a",
    txt: "#f4f1ec",
  },
];

export default function Work() {
  return (
    <section id="work" className="px-5 md:px-8 py-24 md:py-36">
      <div className="mx-auto max-w-[1480px]">
        <SectionLabel
          index="03"
          title="Selected work"
          subtitle="A small, opinionated reel — full archive on request."
        />

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {projects.map((p, i) => (
            <motion.li
              key={p.n}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.85,
                delay: (i % 2) * 0.08,
                ease: [0.65, 0, 0.35, 1],
              }}
              data-cursor="view"
              className={`group relative overflow-hidden rounded-[24px] md:rounded-[28px] aspect-[5/4] cursor-pointer ${
                i % 3 === 0 ? "lg:translate-y-10" : ""
              }`}
              style={{ background: p.bg, color: p.txt }}
            >
              {/* abstract artwork */}
              <ProjectArt index={i} accent={p.accent} txt={p.txt} />

              {/* readability gradients */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-24"
                style={{
                  background: `linear-gradient(to bottom, ${p.bg}cc, transparent)`,
                }}
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-44"
                style={{
                  background: `linear-gradient(to top, ${p.bg}f0, transparent)`,
                }}
              />

              {/* meta */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <div className="flex items-start justify-between gap-3 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.16em] opacity-80">
                  <span className="truncate">
                    {p.n} / {p.discipline}
                  </span>
                  <span className="shrink-0">{p.year}</span>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] opacity-70 mb-3">
                    {p.client}
                  </p>
                  <h3 className="font-display tracking-[-0.03em] text-[clamp(26px,3.2vw,44px)] leading-[1.02] max-w-[18ch]">
                    {p.title}
                  </h3>
                </div>
              </div>

              {/* hover arrow */}
              <span
                className="absolute right-6 top-6 md:right-8 md:top-8 grid place-items-center size-10 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
                style={{ background: p.accent, color: p.bg }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 11L11 3M11 3H4M11 3v7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="square"
                  />
                </svg>
              </span>
            </motion.li>
          ))}
        </ul>

        <div className="mt-14 flex justify-center">
          <a
            href="#contact"
            className="link-underline font-mono text-[12px] uppercase tracking-[0.18em] text-muted hover:text-ink"
          >
            View full archive →
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectArt({
  index,
  accent,
  txt,
}: {
  index: number;
  accent: string;
  txt: string;
}) {
  if (index === 0)
    return (
      <svg
        viewBox="0 0 500 400"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="250" cy="220" r="120" fill={accent} />
        <circle cx="250" cy="220" r="60" fill="none" stroke={txt} strokeWidth="1.5" />
        <text
          x="250"
          y="226"
          textAnchor="middle"
          fontFamily="serif"
          fontSize="64"
          fontStyle="italic"
          fill={txt}
        >
          k
        </text>
      </svg>
    );
  if (index === 1)
    return (
      <svg
        viewBox="0 0 500 400"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {[...Array(14)].map((_, k) => {
          const baseY = 160;
          const h = 80 + Math.abs(Math.sin(k * 0.7) * 60) + Math.abs(Math.cos(k) * 30);
          return (
            <rect
              key={k}
              x={56 + k * 28}
              y={baseY - h / 2}
              width="12"
              height={h}
              fill={accent}
              rx="2"
            />
          );
        })}
      </svg>
    );
  if (index === 2)
    return (
      <svg
        viewBox="0 0 500 400"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect x="120" y="120" width="260" height="180" fill="none" stroke={accent} strokeWidth="1.5" />
        <rect x="160" y="160" width="180" height="100" fill={accent} fillOpacity="0.15" stroke={accent} strokeWidth="1.5" />
        <line x1="120" y1="210" x2="380" y2="210" stroke={accent} strokeWidth="1" strokeDasharray="4 4" />
        <line x1="250" y1="120" x2="250" y2="300" stroke={accent} strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    );
  return (
    <svg
      viewBox="0 0 500 400"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="vLabs" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.95" />
          <stop offset="60%" stopColor={accent} stopOpacity="0.05" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="250" cy="180" r="130" fill="url(#vLabs)" />
      <circle cx="250" cy="180" r="80" fill="none" stroke={accent} strokeWidth="1" strokeDasharray="2 6" />
      <circle cx="250" cy="180" r="130" fill="none" stroke={accent} strokeWidth="1" strokeDasharray="2 6" />
      <circle cx="250" cy="180" r="5" fill={accent} />
    </svg>
  );
}
