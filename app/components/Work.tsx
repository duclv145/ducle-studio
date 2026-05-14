"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    n: "01",
    client: "Golden Lake Palace",
    title: "Di sản vàng son, bản sắc mới.",
    discipline: "Brand Identity",
    year: "2025",
    accent: "#ffd60a",
    bg: "#0a0a0a",
    txt: "#f4f1ec",
    industry: "F&B · Fine Dining",
    agency: "DucLe Studio",
    role: "Lead Designer",
    deliverables: ["Brand Identity", "Logo Design", "Visual System"],
    liveUrl: "",
    briefSummary: "Xây dựng nhận diện thương hiệu cho nhà hàng Trung Hoa cao cấp — nơi di sản văn hóa gặp gỡ thẩm mỹ hiện đại.",
    description: "Golden Lake Palace là nhà hàng Trung Hoa với không gian sang trọng tại Hà Nội. Chúng tôi xây dựng hệ thống nhận diện thương hiệu từ đầu — từ logo thư pháp kết hợp vòng tròn vàng biểu tượng thịnh vượng, con dấu đỏ 金湖宫 mang tinh thần hoàng gia, đến toàn bộ ngôn ngữ thiết kế nhất quán. Mục tiêu: truyền tải sự tinh tế, quý phái và chiều sâu văn hóa ngay từ cái nhìn đầu tiên.",
    imageUrl: "/Golden Lake Palace/1.png",
    cardImage: "/Golden Lake Palace/1.png",
    images: [
      "/Golden Lake Palace/1.png",
      "/Golden Lake Palace/2.png",
      "/Golden Lake Palace/3.png",
      "/Golden Lake Palace/4.png",
      "/Golden Lake Palace/5.png",
      "/Golden Lake Palace/6.png",
      "/Golden Lake Palace/7.png",
      "/Golden Lake Palace/8.png",
    ],
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
    industry: "Music & Audio",
    agency: "DucLe Studio",
    role: "Creative Director",
    deliverables: ["Brand Identity", "Motion Graphics", "UI/UX Design"],
    liveUrl: "https://northbeat.com",
    briefSummary: "Sound systems for the streets. Bold identity meets dynamic motion.",
    description: "Northbeat needed an identity as bold as their sound. We created a visual system that's not just static—it breathes, moves, and responds like music itself. From logotype to motion design, every element was crafted to capture the energy and rhythm of urban culture. The identity needed to work across systems, from street installations to digital platforms, always keeping the same pulse.",
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
    industry: "Furniture & Design",
    agency: "DucLe Studio",
    role: "Design & Strategy",
    deliverables: ["Web Design", "Editorial Layout", "Brand Guidelines"],
    liveUrl: "https://formAtelier.com",
    briefSummary: "Furniture, slowly. A thoughtful approach to craft and design.",
    description: "Form Atelier is about slow design—pieces made to last, stories shared intentionally. We created a digital space that mirrors this philosophy: clean, considered, and focused on the craftsmanship behind each piece. The website becomes a gallery, not just a catalog. Every image, every word, every interaction reinforces the quality and care that goes into their furniture.",
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
    industry: "Aerospace & Tech",
    agency: "DucLe Studio",
    role: "Product Designer",
    deliverables: ["UI/UX Design", "Design System", "Product Strategy"],
    liveUrl: "https://voyagerlabs.com",
    briefSummary: "An OS for tiny rockets. Building the future of space tech.",
    description: "Voyager Labs approached us with a challenge: design an operating system for aerospace—something complex, technical, but still intuitive. We created a design system that makes the impossible feel possible. The interface needed to empower engineers while being clear enough for stakeholders. Every pixel serves a purpose in this intricate dance between power and simplicity.",
  },
];

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="work" className="px-5 md:px-8 py-20 md:py-28">
      <div className="mx-auto max-w-[1480px]">
        <SectionLabel
          index="03"
          title="Selected work"
          subtitle="Selected projects across brand, digital, and motion."
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
              onClick={() => handleProjectClick(p)}
              data-cursor="view"
              className={`group relative overflow-hidden rounded-[24px] md:rounded-[28px] aspect-[5/4] cursor-pointer ${
                i % 3 === 0 ? "lg:translate-y-10" : ""
              }`}
              style={{ background: p.bg, color: p.txt }}
            >
              {/* card image or abstract artwork */}
              {p.cardImage ? (
                <img
                  src={p.cardImage}
                  alt={p.client}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <ProjectArt index={i} accent={p.accent} txt={p.txt} />
              )}


              {/* hover "View Case Study" label */}
              <span
                className="absolute inset-x-0 bottom-0 flex justify-center pb-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none"
              >
                <span
                  className="font-mono text-[10px] uppercase tracking-[0.2em] px-4 py-2 rounded-full"
                  style={{ background: p.accent, color: p.bg }}
                >
                  View Case Study
                </span>
              </span>

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
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
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
