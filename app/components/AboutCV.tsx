"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const workExperience = [
  {
    period: "08/2022 – 10/2023",
    company: "Hưng Thái Technology",
    sub: "Phú Mỹ Hưng Development Corporation",
    title: "Senior Graphic Designer",
  },
  {
    period: "05/2022 – 08/2022",
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

const skills = [
  "Photoshop",
  "Illustrator",
  "After Effects",
  "AI Tool (Claude · ChatGPT · Gemini)",
  "Vibe Code",
];

const education = [
  {
    school: "FPT Polytechnic",
    items: ["2013 – 2016 · Graphic Design", "2011 – 2013 · Website Design"],
  },
  {
    school: "FPT Arena",
    items: ["2013 · Design Thinking Workshop"],
  },
  {
    school: "Brian Tracy International",
    items: ["2016 · Total Business Mastery Mini MBA"],
  },
  {
    school: "Amazon Web Services",
    items: ["2026 · AWS Cloud Practitioner Essentials"],
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
              With over a decade of dedication to the creative industry, I position myself as a{" "}
              <span className="text-ink">Creative Tech-Driven Designer.</span>
            </p>

            <p className="mt-6 text-[14px] md:text-[15px] text-muted leading-[1.7]">
              From my early days at{" "}
              <span className="text-ink/70">VnExpress</span> to my Senior role at{" "}
              <span className="text-ink/70">Hung Thai Technology (Phu My Hung)</span>, I have
              continuously evolved by integrating{" "}
              <span className="relative inline-block isolate px-1 mx-0.5">
                <span className="relative z-10">Cloud Computing (AWS)</span>
                <span aria-hidden className="absolute inset-x-0 inset-y-[10%] -z-10 rounded-md bg-yellow" />
              </span>{" "}
              and AI-powered tools into my workflow.
            </p>

            <p className="mt-4 text-[14px] md:text-[15px] text-muted leading-[1.7]">
              I believe that the intersection of traditional design thinking and cutting-edge technology{" "}
              <span className="text-ink/70">(AI &amp; Vibe Code)</span> is the key to delivering
              breakthrough visual solutions in today&apos;s rapidly changing market.
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
                  {job.sub && (
                    <p className="text-[12px] text-ink/40 leading-snug">
                      {job.sub}
                    </p>
                  )}
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
              Skills
            </motion.p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  {...fadeUp(0.27 + i * 0.04)}
                  className="font-mono text-[10px] uppercase tracking-[0.1em] px-3 py-1.5 rounded-full border border-ink/15 text-ink/50"
                >
                  {skill}
                </motion.span>
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
