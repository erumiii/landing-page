"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title:       string;
  description: string;
  direction?:  string;
  bullets:     string[];
  category:    string;
  year:        string;
  image:       string;
  link?:       string;
  wip?:        boolean;
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
};

export default function ProjectCard({
  title,
  description,
  direction,
  bullets,
  category,
  year,
  image,
  link,
  wip,
}: ProjectCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      className="relative flex h-full flex-col bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden hover:border-[var(--text-lo)] transition-all duration-300 hover:-translate-y-1"
      aria-label={`Project: ${title}`}
    >
      {/* Thumbnail */}
      <div className="relative h-48 bg-[var(--bg-sub)] overflow-hidden">
        <Image
          src={image}
          alt={`${title} project thumbnail`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-6 flex-1">
        {/* Category + Year */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium tracking-wider uppercase text-[var(--text-dim)] border border-[var(--border)] rounded-full px-3 py-1">
              {category}
            </span>
            {wip && (
              <span
                className="text-xs font-medium tracking-wider uppercase text-[var(--text-dim)] border border-dashed border-[var(--border)] rounded-full px-3 py-1"
                title="Work In Progress"
              >
                WIP
              </span>
            )}
          </div>
          <span className="text-xs text-[var(--text-dim)]">{year}</span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-[var(--text-hi)] leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[var(--text-lo)] leading-relaxed">{description}</p>

        {/* Direction (CTA) — hanya untuk proyek berlink */}
        {link && direction && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex w-fit items-center gap-1.5 text-sm font-medium text-[var(--text-md)] hover:text-[var(--text-hi)] transition-colors"
          >
            {direction}
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover/link:translate-x-1"
            />
          </a>
        )}


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
