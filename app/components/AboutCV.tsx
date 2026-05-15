"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const workExperience = [
  {
    period: "08/2022 – 10/2023",
    company: "Hưng Thái Technology",
    title: "Senior Graphic Designer",
  },
  {
    period: "05/2021 – 01/2022",
    company: "HS Ad Vietnam",
    title: "Senior Graphic Designer",
  },
  {
    period: "03/2020 – 05/2021",
    company: "Yeah1 Group",
    title: "Senior Graphic Designer",
  },
  {
    period: "07/2019 – 12/2019",
    company: "Dolce by Wyndham Golden Lake",
    title: "Graphic Designer",
  },
  {
    period: "11/2017 – 05/2019",
    company: "FPT Online · VnExpress",
    title: "Graphic Designer",
  },
  {
    period: "02/2015 – 11/2017",
    company: "DVH-Bransons",
    title: "Graphic Designer",
  },
];

const tools = [
  {
    name: "Photoshop",
    icon: (
      <svg viewBox="0 0 50 50" className="w-full h-full">
        <rect width="50" height="50" rx="8" fill="#001e36"/>
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle"
          fill="#31A8FF" fontSize="16" fontFamily="Arial, sans-serif" fontWeight="bold">Ps</text>
      </svg>
    ),
  },
  {
    name: "Illustrator",
    icon: (
      <svg viewBox="0 0 50 50" className="w-full h-full">
        <rect width="50" height="50" rx="8" fill="#330000"/>
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle"
          fill="#FF9A00" fontSize="16" fontFamily="Arial, sans-serif" fontWeight="bold">Ai</text>
      </svg>
    ),
  },
  {
    name: "InDesign",
    icon: (
      <svg viewBox="0 0 50 50" className="w-full h-full">
        <rect width="50" height="50" rx="8" fill="#49021f"/>
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle"
          fill="#FF3366" fontSize="16" fontFamily="Arial, sans-serif" fontWeight="bold">Id</text>
      </svg>
    ),
  },
  {
    name: "Premiere Pro",
    icon: (
      <svg viewBox="0 0 50 50" className="w-full h-full">
        <rect width="50" height="50" rx="8" fill="#00005b"/>
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle"
          fill="#9999FF" fontSize="16" fontFamily="Arial, sans-serif" fontWeight="bold">Pr</text>
      </svg>
    ),
  },
  {
    name: "Figma",
    icon: (
      <svg viewBox="0 0 50 50" className="w-full h-full">
        <rect width="50" height="50" rx="8" fill="#1e1e1e"/>
        <g transform="translate(15,7)">
          {/* Figma logo — simplified F shape with brand colors */}
          <rect x="0" y="0" width="10" height="10" rx="5" fill="#F24E1E"/>
          <rect x="10" y="0" width="10" height="10" rx="5" fill="#FF7262"/>
          <rect x="0" y="10" width="10" height="10" rx="5" fill="#A259FF"/>
          <rect x="0" y="20" width="10" height="10" rx="5" fill="#0ACF83"/>
          <circle cx="15" cy="15" r="5" fill="#1ABCFE"/>
        </g>
      </svg>
    ),
  },
  {
    name: "Midjourney",
    icon: (
      <svg viewBox="0 0 50 50" className="w-full h-full">
        <rect width="50" height="50" rx="8" fill="#000"/>
        {/* Midjourney boat/sail icon simplified */}
        <g transform="translate(7,8)" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 4 L6 28 L30 28 Z"/>
          <path d="M18 4 L28 22"/>
          <line x1="4" y1="32" x2="32" y2="32"/>
        </g>
      </svg>
    ),
  },
  {
    name: "Stable Diffusion",
    icon: (
      <svg viewBox="0 0 50 50" className="w-full h-full">
        <rect width="50" height="50" rx="8" fill="#0f0f23"/>
        <defs>
          <linearGradient id="sd-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1"/>
            <stop offset="100%" stopColor="#a855f7"/>
          </linearGradient>
        </defs>
        {/* Diffusion waves */}
        <g stroke="url(#sd-grad)" strokeWidth="2" fill="none" strokeLinecap="round">
          <path d="M10 25 Q17.5 15 25 25 Q32.5 35 40 25"/>
          <path d="M10 19 Q17.5 9 25 19 Q32.5 29 40 19"/>
          <path d="M10 31 Q17.5 21 25 31 Q32.5 41 40 31"/>
        </g>
      </svg>
    ),
  },
  {
    name: "ChatGPT",
    icon: (
      <svg viewBox="0 0 50 50" className="w-full h-full">
        <rect width="50" height="50" rx="8" fill="#0d0d0d"/>
        {/* OpenAI logo simplified */}
        <g transform="translate(9,9)" fill="white">
          <path d="M16 0C8.8 0 3 5.8 3 13c0 3.1 1.1 6 3 8.2L4 28l6.8-2C12.4 26.6 14.1 27 16 27c7.2 0 13-5.8 13-13S23.2 0 16 0zm0 2.5c5.8 0 10.5 4.7 10.5 10.5S21.8 23.5 16 23.5c-1.7 0-3.3-.4-4.7-1.2L10 22l-1.5.5.5-1.7-.4-.5C7 18.9 5.5 17 5.5 13 5.5 7.2 10.2 2.5 16 2.5z"/>
        </g>
      </svg>
    ),
  },
];

const education = [
  {
    school: "FPT Polytechnic",
    items: ["2013 – 2016 · Graphic Design", "2011 – 2013 · Website Design"],
  },
  {
    school: "Brian Tracy International",
    items: ["2016 · Total Business Mastery Mini MBA"],
  },
  {
    school: "FPT Arena",
    items: ["2013 · Design Thinking Workshop"],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.65, 0, 0.35, 1] as [number, number, number, number] },
});

export default function AboutCV() {
  return (
    <section id="about" className="px-5 md:px-8 py-20 md:py-28">
      <div className="mx-auto max-w-[1480px]">
        <SectionLabel index="01" title="About" subtitle="Background, experience & education." />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10 items-start">

          {/* ── LEFT: Intro ── */}
          <motion.div {...fadeUp(0)} className="md:col-span-4">
            <p className="font-display tracking-[-0.03em] text-[clamp(28px,2.8vw,42px)] leading-[1.15] text-ink-2">
              With nearly a decade of experience since 2015, I've worked across{" "}
              <span className="text-ink">technology, advertising, and design</span> at companies in{" "}
              <span className="relative inline-block isolate px-1.5 mx-0.5">
                <span className="relative z-10">Hanoi and HCMC</span>
                <span aria-hidden className="absolute inset-x-0 inset-y-[10%] -z-10 rounded-md bg-yellow" />
              </span>{" "}
              — crafting digital experiences that balance aesthetics with strategy.
            </p>

            <p className="mt-6 text-[14px] md:text-[15px] text-muted leading-[1.7]">
              From startups to established corporations, I've collaborated with diverse teams
              to deliver design solutions across branding, web design, and digital products.
            </p>

          </motion.div>

          {/* ── MIDDLE: Work Experience ── */}
          <div className="md:col-span-4">
            <motion.p {...fadeUp(0.05)} className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted mb-6">
              Experience
            </motion.p>
            <div className="space-y-0 border-t border-ink/10">
              {workExperience.map((job, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(0.08 + i * 0.05)}
                  className="border-b border-ink/10 py-4 md:py-5"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted mb-1.5">
                    {job.period}
                  </p>
                  <p className="font-display font-medium text-[17px] md:text-[19px] leading-[1.25] text-ink">
                    {job.company}
                  </p>
                  <p className="mt-0.5 text-[13px] text-ink/50 leading-snug italic">
                    {job.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Education ── */}
          <div className="md:col-span-4">
            <motion.p {...fadeUp(0.1)} className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted mb-6">
              Education
            </motion.p>
            <div className="space-y-0 border-t border-ink/10">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(0.12 + i * 0.05)}
                  className="border-b border-ink/10 py-4 md:py-5"
                >
                  <p className="font-display font-medium text-[17px] md:text-[19px] leading-[1.25] text-ink mb-2">
                    {edu.school}
                  </p>
                  {edu.items.map((item, j) => (
                    <p key={j} className="text-[13px] text-ink/50 leading-[1.6]">
                      {item}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Tools */}
            <motion.p {...fadeUp(0.25)} className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted mt-10 mb-5">
              Tools
            </motion.p>
            <div className="grid grid-cols-4 gap-4">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  {...fadeUp(0.27 + i * 0.04)}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-10 h-10">{tool.icon}</div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.08em] text-ink/40 text-center leading-tight">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Availability note */}
            <motion.div {...fadeUp(0.45)} className="mt-8 flex items-center gap-3">
              <span className="size-2 rounded-full bg-yellow animate-pulse shrink-0" />
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/40">
                Open to new projects
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
