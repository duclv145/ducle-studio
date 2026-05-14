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
          className="fixed inset-0 bg-bg z-50 overflow-y-auto"
          data-lenis-prevent
          ref={modalRef}
        >
          <div className="min-h-full" onClick={(e) => e.stopPropagation()}>

            {/* Top Bar */}
            <div className="sticky top-0 z-10 bg-bg border-b border-ink/10 px-5 md:px-8 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{project.n}</span>
                <span className="font-mono text-[11px] text-muted">·</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{project.discipline}</span>
                <span className="font-mono text-[11px] text-muted">·</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{project.year}</span>
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
            <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-10 md:py-14 space-y-14">

              {/* Header */}
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-end">
                <div className="space-y-3">
                  <h1 className="font-display font-medium text-[clamp(40px,6vw,80px)] leading-[1] tracking-[-0.03em]">
                    {project.client}
                  </h1>
                  <p className="text-lg text-ink-2 leading-[1.5] max-w-[52ch]">
                    {project.briefSummary}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.deliverables.map((d) => (
                    <span key={d} className="font-mono text-[10px] uppercase tracking-[0.18em] border border-ink/20 rounded-full px-3 py-1.5 text-muted">
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hero image */}
              {images[0] && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="rounded-2xl overflow-hidden aspect-video cursor-zoom-in"
                  onClick={() => setLightbox(images[0])}
                >
                  <img src={images[0]} alt={project.client} className="w-full h-full object-cover" />
                </motion.div>
              )}

              {/* Description */}
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
                <div className="space-y-1">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">Project Overview</p>
                </div>
                <p className="text-[16px] text-ink-2 leading-[1.75]">{project.description}</p>
              </div>

              {/* Gallery grid — remaining images */}
              {images.length > 1 && (
                <div className="space-y-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">Gallery</p>

                  {/* 2-up row: images 1–2 */}
                  {images.length > 1 && (
                    <div className="grid grid-cols-2 gap-4">
                      {images.slice(1, 3).map((src, i) => (
                        <motion.div
                          key={src}
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.08 }}
                          className="rounded-xl overflow-hidden aspect-[4/3] cursor-zoom-in"
                          onClick={() => setLightbox(src)}
                        >
                          <img src={src} alt="" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500" />
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Full-width: image 3 */}
                  {images[3] && (
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="rounded-xl overflow-hidden aspect-video cursor-zoom-in"
                      onClick={() => setLightbox(images[3])}
                    >
                      <img src={images[3]} alt="" className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500" />
                    </motion.div>
                  )}

                  {/* 3-up row: images 4–6 */}
                  {images.length > 4 && (
                    <div className="grid grid-cols-3 gap-4">
                      {images.slice(4, 7).map((src, i) => (
                        <motion.div
                          key={src}
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.08 }}
                          className="rounded-xl overflow-hidden aspect-square cursor-zoom-in"
                          onClick={() => setLightbox(src)}
                        >
                          <img src={src} alt="" className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-500" />
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Last image full-width */}
                  {images[7] && (
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="rounded-xl overflow-hidden aspect-video cursor-zoom-in"
                      onClick={() => setLightbox(images[7])}
                    >
                      <img src={images[7]} alt="" className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500" />
                    </motion.div>
                  )}
                </div>
              )}

              {/* No images fallback */}
              {images.length === 0 && (
                <div className="rounded-2xl overflow-hidden bg-ink/5 aspect-video flex items-center justify-center">
                  <p className="text-sm text-muted font-mono tracking-[0.12em] uppercase">Project Image</p>
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
