"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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
    imageUrl: "/golden-lake-palace/1.png",
    cardImage: "/golden-lake-palace/1.png",
    images: [
      "/golden-lake-palace/1.png",
      "/golden-lake-palace/2.png",
      "/golden-lake-palace/3.png",
      "/golden-lake-palace/4.png",
      "/golden-lake-palace/5.png",
      "/golden-lake-palace/6.png",
      "/golden-lake-palace/7.png",
      "/golden-lake-palace/8.png",
    ],
  },
  {
    n: "02",
    client: "Vietnam Economic Forum",
    title: "Design cho các diễn đàn kinh tế quốc gia.",
    discipline: "Event Design · Visual Communication",
    year: "2018–2019",
    accent: "#0a6ebd",
    bg: "#e8f4fd",
    txt: "#0a0a0a",
    industry: "Events & Conferences",
    agency: "DucLe Studio",
    role: "Art Director",
    deliverables: ["Key Visual", "Backdrop Design", "Event Branding", "Print Collateral", "Digital Assets"],
    liveUrl: "",
    briefSummary: "Thiết kế nhận diện trực quan cho loạt sự kiện kinh tế tầm cỡ quốc gia — từ hội nghị Du lịch đến Diễn đàn Kinh tế Số.",
    description: "Chúng tôi đảm nhận thiết kế toàn bộ hệ thống visual cho các sự kiện lớn: Vietnam Economic Forum (VIEF) 2018 Travel & Tourism Summit tại InterContinental Hanoi Landmark72, Diễn đàn Kinh tế Tư nhân Việt Nam 2019 tại Trung tâm Hội nghị Quốc gia, và Khoá học Phát triển Lãnh đạo John C. Maxwell. Mỗi sự kiện đòi hỏi một ngôn ngữ thiết kế riêng — từ hình ảnh hoa sen đặc trưng văn hoá Việt cho Tourism Summit đến grid công nghệ số cho Forum 2019 — nhưng đều phải đạt chuẩn trình bày quốc tế và nhất quán xuyên suốt toàn bộ ấn phẩm.",
    cardImage: "/Event/Event-cover.png",
    images: [
      "/Event/Event-1.jpg",
      "/Event/Event-2.jpg",
      "/Event/Event-3.jpg",
      "/Event/Event-4.jpg",
    ],
  },
  {
    n: "03",
    client: "VIEF · Vietnam's Top PG",
    title: "Brochure & Editorial Design.",
    discipline: "Editorial · Print",
    year: "2015–2018",
    accent: "#0a0a0a",
    bg: "#ece7df",
    txt: "#0a0a0a",
    industry: "Events · Entertainment",
    agency: "DucLe Studio",
    role: "Graphic Designer",
    deliverables: ["Brochure Design", "Event Kỷ yếu", "Sponsorship Proposal", "Editorial Layout", "Print Production"],
    liveUrl: "",
    briefSummary: "Thiết kế brochure & ấn phẩm sự kiện cho các thương hiệu và diễn đàn lớn tại Việt Nam.",
    description: "Chúng tôi thiết kế hệ thống ấn phẩm in ấn cho loạt sự kiện và thương hiệu tầm cỡ: kỷ yếu sự kiện VIEF 2018 Travel & Tourism Summit với bố cục editorial sang trọng, profile diễn giả và nội dung tài trợ VinaCapital; cùng bộ proposal sponsorship cho Vietnam's Top PG 2015 — chương trình người mẫu PG quy mô toàn quốc. Mỗi ấn phẩm đòi hỏi sự cân bằng giữa thẩm mỹ thương hiệu, mật độ thông tin và trải nghiệm đọc nhất quán từ trang đầu đến trang cuối.",
    cardImage: "/Brochure/Brochure-cover.png",
    images: [
      "/Brochure/Brochure-1.jpg",
      "/Brochure/Brochure-2.jpg",
      "/Brochure/Brochure-3.jpg",
      "/Brochure/Brochure-4.jpg",
    ],
  },
  {
    n: "04",
    client: "LG · Pullman · VnExpress · Livin PMH",
    title: "Poster & Digital Advertising.",
    discipline: "Advertising · Digital",
    year: "2019–2023",
    accent: "#ffd60a",
    bg: "#15151a",
    txt: "#f4f1ec",
    industry: "Advertising & Marketing",
    agency: "DucLe Studio",
    role: "Graphic Designer",
    deliverables: ["Banner Quảng cáo", "Social Media Visual", "Promotional Poster", "Digital Ads", "Print Banner"],
    liveUrl: "",
    briefSummary: "Thiết kế poster và banner quảng cáo cho các thương hiệu lớn — từ điện tử tiêu dùng đến hospitality và fintech.",
    description: "Loạt dự án thiết kế ấn phẩm quảng cáo phục vụ nhiều thương hiệu: banner Livestream Giáng Sinh và campaign sản phẩm cho LG Vietnam; poster Daycation mùa hè cho Pullman Phu Quoc Beach Resort; banner đầu tư bất động sản La Luna Resort Nha Trang và quảng bá VnExpress Marathon; cùng bộ visual campaign tích điểm và lễ hội Trung Thu cho app Livin by PMH. Mỗi ấn phẩm được tối ưu cho từng nền tảng — Facebook, digital OOH, hay print — đảm bảo thông điệp rõ ràng và thẩm mỹ thương hiệu nhất quán.",
    cardImage: "/Poster/Poster-cover.png",
    images: [
      "/Poster/Poster-1.jpg",
      "/Poster/Poster-2.jpg",
      "/Poster/Poster-3.jpg",
      "/Poster/Poster-4.jpg",
    ],
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
                <Image
                  src={p.cardImage}
                  alt={p.client}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={i === 0}
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
            href="mailto:duclv145@gmail.com"
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
