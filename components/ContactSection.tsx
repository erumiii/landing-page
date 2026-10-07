"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Send, Download } from "lucide-react";

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

// GitHub icon (not exported in this version of lucide-react)
const GitHubIcon = ({ size = 16 }: { size?: number }) => (
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
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
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

const contacts = [
  {
    icon: <Mail size={18} />,
    title: "Email",
    subtitle: "keenanemzed202@gmail.com",
    href: "mailto:keenanemzed202@gmail.com",
    id: "contact-email-link",
    external: false,
  },
  {
    icon: <LinkedInIcon size={18} />,
    title: "LinkedIn",
    subtitle: "linkedin.com/in/keenanemzed",
    href: "https://linkedin.com/in/keenanemzed",
    id: "contact-linkedin",
    external: true,
  },
  {
    icon: <GitHubIcon size={18} />,
    title: "GitHub",
    subtitle: "github.com/erumiii",
    href: "https://github.com/erumiii",
    id: "contact-github",
    external: true,
  },
];

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
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Left: heading + CTA */}
          <div>
            <motion.p variants={fadeUp} className="section-label mb-6">
              04 — Contact
            </motion.p>

            <motion.h2
              variants={fadeUp}
              id="contact-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-hi)] tracking-tight leading-tight mb-6"
            >
              Let's
              <br />
              <span className="text-[var(--text-lo)]">Connect</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-[var(--text-lo)] leading-relaxed mb-10 max-w-xl"
            >
              Open to{" "}
              <strong className="text-[var(--text-md)] font-medium">internship</strong> opportunities
              in{" "}
              <strong className="text-[var(--text-md)] font-medium">
                Cloud Engineering &amp; DevOps Engineering
              </strong>
              .
            </motion.p>
          </div>

          {/* Right: contact cards */}
          <div className="flex flex-col justify-center">
            {contacts.map((c) => (
              <motion.div key={c.title} variants={fadeUp}>
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  id={c.id}
                  aria-label={`${c.title}: ${c.subtitle}`}
                  className="group flex items-center gap-4 py-5 border-b border-[var(--border)]"
                >
                  <span className="flex items-center justify-center w-11 h-11 rounded-lg border border-[var(--border)] text-[var(--text-lo)] group-hover:text-[var(--text-hi)] group-hover:border-[var(--text-lo)] transition-all shrink-0">
                    {c.icon}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-sm font-semibold text-[var(--text-hi)]">
                      {c.title}
                    </span>
                    <span className="block text-xs text-[var(--text-dim)] mt-0.5 truncate">
                      {c.subtitle}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-[var(--text-dim)] group-hover:text-[var(--text-hi)] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
                  />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 pt-8 border-t border-[var(--border)]"
        >
          <p className="text-xs text-[var(--text-dim)]">
            Bandung, Indonesia &nbsp;·&nbsp; (+62) 821-9195-7782
          </p>
        </motion.div>
      </div>
    </section>
  );
}
