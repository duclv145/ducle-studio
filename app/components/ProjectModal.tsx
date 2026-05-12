"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";

interface Project {
  n: string;
  client: string;
  title: string;
  discipline: string;
  year: string;
  accent: string;
  bg: string;
  txt: string;
  industry: string;
  agency: string;
  role: string;
  deliverables: string[];
  liveUrl: string;
  description: string;
  briefSummary: string;
  imageUrl?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      // Prevent body scroll
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Handle click outside modal
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 bg-bg z-50 overflow-y-auto"
          data-lenis-prevent
          ref={modalRef}
        >
          <div
            className="min-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="sticky top-0 z-10 bg-bg border-b border-ink/10 px-5 md:px-8 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  {project.n}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">·</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  {project.discipline}
                </span>
              </div>
              <button
                onClick={onClose}
                className="flex items-center gap-2 bg-ink text-bg px-4 py-2 rounded-full font-mono text-[11px] uppercase tracking-[0.18em] hover:bg-ink/80 transition-colors"
                aria-label="Close modal"
              >
                Close
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="mx-auto max-w-[1480px] px-5 md:px-8 py-6 md:py-8">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-12 md:gap-20 items-start">
              {/* Left Column - Content */}
              <div className="space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <h1 className="font-display font-medium text-[clamp(40px,6vw,80px)] leading-[1]">
                    {project.client}
                  </h1>
                  <p className="text-lg md:text-xl text-ink-2 leading-[1.5] max-w-[50ch]">
                    {project.briefSummary}
                  </p>
                </div>

                {/* Description/Case Study */}
                <div className="space-y-4">
                  <p className="text-sm md:text-base text-muted font-mono uppercase tracking-[0.12em]">
                    Project Overview
                  </p>
                  <p className="text-[15px] md:text-[16px] text-ink-2 leading-[1.7]">
                    {project.description}
                  </p>
                </div>

                {/* Project Image - if provided */}
                {project.imageUrl && (
                  <div className="rounded-2xl overflow-hidden aspect-video">
                    <img
                      src={project.imageUrl}
                      alt={project.client}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Placeholder for image if not provided */}
                {!project.imageUrl && (
                  <div className="rounded-2xl overflow-hidden bg-ink/5 aspect-video flex items-center justify-center">
                    <p className="text-sm text-muted font-mono tracking-[0.12em] uppercase">
                      Project Image
                    </p>
                  </div>
                )}
              </div>

              {/* Right Column - Metadata Sidebar */}
              <div className="space-y-8 md:sticky md:top-24 md:self-start">
                {/* Discipline */}
                <div>
                  <p className="text-xs md:text-sm font-mono uppercase tracking-[0.16em] text-muted mb-2">
                    Discipline
                  </p>
                  <p className="font-display font-medium text-[18px] md:text-[20px] leading-[1.3]">
                    {project.discipline}
                  </p>
                </div>

                {/* Industry */}
                <div>
                  <p className="text-xs md:text-sm font-mono uppercase tracking-[0.16em] text-muted mb-2">
                    Industry
                  </p>
                  <p className="text-[15px] md:text-[16px] text-ink-2">
                    {project.industry}
                  </p>
                </div>

                {/* Agency */}
                <div>
                  <p className="text-xs md:text-sm font-mono uppercase tracking-[0.16em] text-muted mb-2">
                    Agency
                  </p>
                  <p className="text-[15px] md:text-[16px] text-ink-2">
                    {project.agency}
                  </p>
                </div>

                {/* Role */}
                <div>
                  <p className="text-xs md:text-sm font-mono uppercase tracking-[0.16em] text-muted mb-2">
                    My Role
                  </p>
                  <p className="text-[15px] md:text-[16px] text-ink-2">
                    {project.role}
                  </p>
                </div>

                {/* Deliverables */}
                <div>
                  <p className="text-xs md:text-sm font-mono uppercase tracking-[0.16em] text-muted mb-2">
                    Deliverables
                  </p>
                  <ul className="space-y-1">
                    {project.deliverables.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-[15px] md:text-[16px] text-ink-2"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Live Site Link */}
                {project.liveUrl && (
                  <div>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm md:text-base text-ink font-mono uppercase tracking-[0.12em] hover:underline"
                    >
                      Visit Live Site ↗
                    </a>
                  </div>
                )}

                {/* Year */}
                <div className="pt-4 border-t border-ink/10">
                  <p className="text-xs md:text-sm font-mono uppercase tracking-[0.16em] text-muted mb-2">
                    Year
                  </p>
                  <p className="text-[15px] md:text-[16px] text-ink-2">
                    {project.year}
                  </p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
