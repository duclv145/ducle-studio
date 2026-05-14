"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
  images?: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightbox) setLightbox(null);
        else onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, lightbox]);

  if (!project) return null;

  const images = project.images ?? (project.imageUrl ? [project.imageUrl] : []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 bg-bg z-50 overflow-hidden"
          data-lenis-prevent
          ref={modalRef}
        >
          <div className="flex h-screen" onClick={(e) => e.stopPropagation()}>

            {/* Left — sticky text panel 1/4 */}
            <div className="w-1/4 shrink-0 h-screen sticky top-0 flex flex-col justify-between border-r border-ink/10 px-6 py-8">
              <div className="space-y-6">
                {/* Close */}
                <button
                  onClick={onClose}
                  className="flex items-center gap-2 text-muted hover:text-ink transition-colors font-mono text-[10px] uppercase tracking-[0.18em]"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                  Close
                </button>

                {/* Meta */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">{project.n}</span>
                  <span className="text-muted/40">·</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">{project.year}</span>
                </div>

                {/* Client name */}
                <h1 className="font-display font-medium text-[clamp(24px,2.2vw,40px)] leading-[1.1] tracking-[-0.03em]">
                  {project.client}
                </h1>

                {/* Brief */}
                <p className="text-[13px] text-ink-2 leading-[1.7]">
                  {project.briefSummary}
                </p>

                {/* Description */}
                <p className="text-[12px] text-muted leading-[1.8]">
                  {project.description}
                </p>
              </div>

              {/* Deliverables at bottom */}
              <div className="space-y-3 pt-6 border-t border-ink/10">
                <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted/50">Deliverables</p>
                <div className="flex flex-col gap-1.5">
                  {project.deliverables.map((d) => (
                    <span key={d} className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                      — {d}
                    </span>
                  ))}
                </div>
                <div className="pt-2">
                  <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted/50">{project.discipline}</span>
                </div>
              </div>
            </div>

            {/* Right — scrollable images 3/4 */}
            <div className="flex-1 overflow-y-auto" data-lenis-prevent>
              {images.length > 0 ? (
                <div className="flex flex-col">
                  {images.map((src) => (
                    <div
                      key={src}
                      className="w-full cursor-zoom-in"
                      onClick={() => setLightbox(src)}
                    >
                      <img src={src} alt="" className="w-full h-auto block" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-full flex items-center justify-center bg-ink/5">
                  <p className="text-sm text-muted font-mono tracking-[0.12em] uppercase">No images</p>
                </div>
              )}
            </div>

          </div>

          {/* Lightbox */}
          <AnimatePresence>
            {lightbox && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-50 bg-ink/90 flex items-center justify-center p-6 cursor-zoom-out"
                onClick={() => setLightbox(null)}
              >
                <motion.img
                  initial={{ scale: 0.92, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.92, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={lightbox}
                  alt=""
                  className="max-w-full max-h-full rounded-xl object-contain shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
                <button
                  onClick={() => setLightbox(null)}
                  className="absolute top-6 right-6 size-10 rounded-full bg-bg/10 text-bg flex items-center justify-center hover:bg-bg/20 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
