"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

// LinkedIn icon (not exported in this version of lucide-react)
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
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 md:py-32 border-t border-[var(--border)]"
    >
      <div className="section-container">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-3xl"
        >
          {/* Label */}
          <motion.p variants={fadeUp} className="section-label mb-6">
            04 — Contact
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            id="contact-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-hi)] tracking-tight leading-tight mb-6"
          >
            Mari
            <br />
            <span className="text-[var(--text-lo)]">Terhubung</span>
          </motion.h2>

          {/* Body */}
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-[var(--text-lo)] leading-relaxed mb-10 max-w-xl"
          >
            Terbuka untuk kesempatan{" "}
            <strong className="text-[var(--text-md)] font-medium">magang (internship)</strong> di
            bidang{" "}
            <strong className="text-[var(--text-md)] font-medium">
              Cloud Engineering &amp; DevOps
            </strong>
            . Punya proyek atau ingin berdiskusi? Jangan ragu untuk menghubungi saya lewat email.
          </motion.p>

          {/* Email CTA — displayed large */}
          <motion.div variants={fadeUp} className="mb-10">
            <a
              href="mailto:keenan.emzed@binus.ac.id"
              id="contact-email-link"
              aria-label="Send email to keenan.emzed@binus.ac.id"
              className="group inline-flex items-center gap-3 text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--text-hi)] hover:text-[var(--text-lo)] transition-colors border-b border-[var(--border)] pb-2 hover:border-[var(--text-lo)]"
            >
              <Mail
                size={28}
                className="text-[var(--text-lo)] group-hover:text-[var(--text-hi)] transition-colors"
              />
              keenan.emzed@binus.ac.id
              <ArrowUpRight
                size={20}
                className="text-[var(--text-dim)] group-hover:text-[var(--text-hi)] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a
              href="https://linkedin.com/in/keenanemzed"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-linkedin"
              aria-label="LinkedIn profile"
              className="group flex items-center gap-2.5 px-5 py-3 rounded-xl border border-[var(--border)] text-sm text-[var(--text-lo)] hover:border-[var(--text-hi)] hover:text-[var(--text-hi)] transition-all"
            >
              <LinkedInIcon size={16} />
              <span>LinkedIn</span>
              <ArrowUpRight
                size={14}
                className="text-[var(--text-dim)] group-hover:text-[var(--text-hi)] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>

          {/* Divider decoration */}
          <motion.div
            variants={fadeUp}
            className="mt-20 pt-8 border-t border-[var(--border)]"
          >
            <p className="text-xs text-[var(--text-dim)]">
              Bandung, Indonesia &nbsp;·&nbsp; (+62) 821-9195-7782
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
