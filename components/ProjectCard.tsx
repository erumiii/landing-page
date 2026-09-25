"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title:       string;
  description: string;
  bullets:     string[];
  category:    string;
  year:        string;
  icon?:       React.ReactNode;
  image?:      string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
};

export default function ProjectCard({
  title,
  description,
  bullets,
  category,
  year,
  icon,
  image,
}: ProjectCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative flex flex-col bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden hover:border-[var(--text-lo)] transition-all duration-300 hover:-translate-y-1"
      aria-label={`Project: ${title}`}
    >
      {/* Visual / Thumbnail area */}
      <div className="relative h-48 bg-[var(--bg-sub)] flex items-center justify-center overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={`Thumbnail proyek ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          <>
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            {/* Icon */}
            <div className="relative z-10 text-[var(--text-lo)] group-hover:text-[var(--text-hi)] transition-colors duration-300 scale-100 group-hover:scale-110 transition-transform">
              {icon}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-6 flex-1">
        {/* Category + Year */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium tracking-wider uppercase text-[var(--text-dim)] border border-[var(--border)] rounded-full px-3 py-1">
            {category}
          </span>
          <span className="text-xs text-[var(--text-dim)]">{year}</span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-[var(--text-hi)] leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[var(--text-lo)] leading-relaxed">{description}</p>

        {/* Bullet points */}
        <ul className="flex flex-col gap-2 mt-auto pt-2 border-t border-[var(--border)]">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-dim)]">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--text-dim)] flex-shrink-0" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
