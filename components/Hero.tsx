"use client";

import { motion } from "framer-motion";
import { ArrowDown, ChevronRight, Download } from "lucide-react";

// LinkedIn icon (lucide-react doesn't export it in this version)
const LinkedInIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const stats = [
  { value: "3", label: "Cloud & Infra\nProjects" },
  { value: "3.58", label: "GPA\n(of 4.00)" },
  { value: "2024", label: "Started at\nBINUS" },
  { value: "EN / ID", label: "Bilingual\nProficiency" },
];

const techStack = [
  "GCP", "AWS", "Docker", "Linux", "Git",
  "Python", "PHP", "MySQL", "CI/CD",
  "Bash",
];

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero section"
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-0 overflow-hidden"
    >
      {/* Subtle radial gradient bg */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, color-mix(in srgb, var(--border) 60%, transparent), transparent)",
        }}
      />

      <div className="section-container flex-1 flex flex-col justify-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Label */}
          <motion.p variants={fadeUp} className="section-label mb-6">
            00 — Introduction
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none text-[var(--text-hi)] mb-6"
          >
            Keenan
            <br />
            <span className="text-[var(--text-lo)]">Muhammad</span>
            <br />
            <span className="text-[var(--text-lo)]">Otthmar</span>
            <br />
            Emzed
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-[var(--text-lo)] leading-relaxed max-w-2xl mb-10"
          >
            Computer Science student di{" "}
            <span className="text-[var(--text-md)] font-medium">BINUS University</span>{" "}
            yang fokus pada{" "}
            <span className="text-[var(--text-md)] font-medium">
              cloud computing, software infrastructure,
            </span>{" "}
            dan{" "}
            <span className="text-[var(--text-md)] font-medium">system design</span>.
            Membangun pengalaman di DevOps dan Cloud Engineering.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-12">
            <a
              href="#work"
              id="hero-cta-work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--text-hi)] text-[var(--bg)] text-sm font-semibold hover:opacity-80 transition-opacity"
            >
              Lihat Proyek Saya
              <ChevronRight size={16} />
            </a>
            <a
              href="mailto:keenan.emzed@binus.ac.id"
              id="hero-cta-email"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--border)] text-[var(--text-md)] text-sm font-medium hover:border-[var(--text-hi)] hover:text-[var(--text-hi)] transition-all"
            >
              Hubungi Saya
            </a>
          </motion.div>

          {/* Social */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-16">
            <a
              href="https://linkedin.com/in/keenanemzed"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-linkedin"
              aria-label="LinkedIn profile"
              className="flex items-center gap-2 text-sm text-[var(--text-dim)] hover:text-[var(--text-hi)] transition-colors"
            >
              <LinkedInIcon size={16} />
              <span>linkedin.com/in/keenanemzed</span>
            </a>
            <a
              href="/Keenan_Muhammad_Otthmar_Emzed_Resume_2026-10-06.pdf"
              download
              id="hero-cv-download"
              aria-label="Download CV"
              className="flex items-center gap-2 text-sm text-[var(--text-dim)] hover:text-[var(--text-hi)] transition-colors"
            >
              <Download size={16} />
              <span>Download CV</span>
            </a>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-px border border-[var(--border)] rounded-xl overflow-hidden"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-1 p-5 bg-[var(--bg-card)] hover:bg-[var(--bg-sub)] transition-colors"
              >
                <span className="text-2xl md:text-3xl font-bold text-[var(--text-hi)]">
                  {stat.value}
                </span>
                <span
                  className="text-xs text-[var(--text-dim)] leading-snug whitespace-pre-line"
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee tech stack strip */}
      <div
        className="w-full mt-16 py-4 border-y border-[var(--border)] overflow-hidden"
        aria-label="Tech stack marquee"
      >
        <div className="animate-marquee">
          {[...techStack, ...techStack, ...techStack, ...techStack].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="inline-flex items-center gap-6 mx-6 text-sm font-medium text-[var(--text-dim)] uppercase tracking-widest whitespace-nowrap"
            >
              {tech}
              <span className="w-1 h-1 rounded-full bg-[var(--border)]" />
            </span>
          ))}
        </div>
      </div>

      {/* Scroll arrow */}
      <div className="section-container flex justify-end py-6">
        <motion.a
          href="#work"
          aria-label="Scroll to work section"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-[var(--text-dim)] hover:text-[var(--text-hi)] transition-colors"
        >
          <ArrowDown size={20} />
        </motion.a>
      </div>
    </section>
  );
}
