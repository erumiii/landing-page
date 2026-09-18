"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
};

const timeline = [
  {
    type:         "education",
    title:        "Bachelor of Computer Science",
    org:          "BINUS University",
    period:       "2024 — Present",
    gpa:          "GPA 3.58 / 4.00",
    description:  "Bandung, Indonesia",
    bullets: [
      "Algorithm & Programming · Data Structures",
      "Computer Networks · Database Technology",
      "Introduction to Cloud Computing & Cloud Security",
      "Software Engineering · Cloud Services",
      "Software Development Operations in Cloud Environments",
    ],
  },
  {
    type:        "cert",
    title:       "Google Cloud Computing Foundations",
    org:         "Google Skills",
    period:      "Feb 2026 — Jun 2026",
    description: "GCP Core Services, REST API, IaC, Cloud Observability",
    bullets: [
      "GCP Core Services & Cloud Architecture",
      "REST API design & Infrastructure as Code",
      "Cloud Observability & Monitoring",
    ],
  },
  {
    type:        "cert",
    title:       "AWS re/Start Program",
    org:         "Orbit Future Academy",
    period:      "Sep 2025 — Dec 2025",
    description: "AWS Core Services, Cloud Security, Linux, Bash & Python Scripting",
    bullets: [
      "AWS Core Services & Cloud Architecture",
      "Cloud Security fundamentals",
      "Linux administration · Bash & Python scripting",
    ],
  },
  {
    type:        "cert",
    title:       "Belajar Dasar Google Cloud",
    org:         "Dicoding",
    period:      "Sep 2025 — Okt 2025",
    description: "Cloud Computing, GCP",
    bullets: [
      "Cloud Computing concepts & GCP fundamentals",
    ],
  },
];

/* Simple monochrome avatar SVG */
function ProfileAvatar() {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <rect width="160" height="160" fill="var(--bg-sub)" />
      {/* Grid lines */}
      {[0,32,64,96,128,160].map(v => (
        <line key={`h${v}`} x1="0" y1={v} x2="160" y2={v} stroke="var(--border)" strokeWidth="0.5" />
      ))}
      {[0,32,64,96,128,160].map(v => (
        <line key={`v${v}`} x1={v} y1="0" x2={v} y2="160" stroke="var(--border)" strokeWidth="0.5" />
      ))}
      {/* Body silhouette */}
      <ellipse cx="80" cy="68" rx="24" ry="28" fill="var(--text-dim)" />
      <ellipse cx="80" cy="140" rx="48" ry="36" fill="var(--text-dim)" />
      {/* Inner highlight */}
      <ellipse cx="80" cy="65" rx="14" ry="18" fill="var(--text-lo)" />
    </svg>
  );
}

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 md:py-32 border-t border-[var(--border)]">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label mb-4">02 — About</p>
          <h2
            id="about-heading"
            className="text-3xl md:text-5xl font-bold text-[var(--text-hi)] tracking-tight"
          >
            Tentang
            <br />
            <span className="text-[var(--text-lo)]">Saya</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Profile + bio */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            {/* Avatar */}
            <div className="w-40 h-40 rounded-2xl overflow-hidden border border-[var(--border)] flex-shrink-0">
              <ProfileAvatar />
            </div>

            {/* Name + role */}
            <div>
              <h3 className="text-lg font-semibold text-[var(--text-hi)]">
                Keenan Muhammad Otthmar Emzed
              </h3>
              <p className="text-sm text-[var(--text-lo)] mt-1">
                Computer Science Student
              </p>
              <p className="text-xs text-[var(--text-dim)] mt-0.5">
                BINUS University · Bandung, Indonesia
              </p>
            </div>

            {/* Bio paragraphs */}
            <div className="flex flex-col gap-4 text-sm text-[var(--text-lo)] leading-relaxed">
              <p>
                Saya adalah mahasiswa Computer Science yang bersemangat terhadap
                <strong className="text-[var(--text-md)] font-medium"> cloud computing</strong>,{" "}
                <strong className="text-[var(--text-md)] font-medium">software infrastructure</strong>,
                dan{" "}
                <strong className="text-[var(--text-md)] font-medium">system design</strong>.
                Dengan pengalaman praktis di platform AWS dan GCP, saya membangun fondasi yang kuat
                untuk berkarier di bidang DevOps dan Cloud Architecture.
              </p>
              <p>
                Saya percaya bahwa infrastruktur yang baik adalah pondasi dari produk yang andal.
                Prinsip kerja saya: desain untuk{" "}
                <em className="text-[var(--text-md)]">scalability</em>, bangun untuk{" "}
                <em className="text-[var(--text-md)]">observability</em>, dan otomasi apa pun yang
                bisa diotomasi.
              </p>
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-8"
          >
            <h3 className="text-xs font-medium tracking-widest uppercase text-[var(--text-dim)] mb-8">
              Pendidikan &amp; Sertifikasi
            </h3>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-2 bottom-2 w-px bg-[var(--border)]" aria-hidden="true" />

              <div className="flex flex-col gap-8">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="relative pl-12"
                  >
                    {/* Dot */}
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full border border-[var(--border)] bg-[var(--bg-card)] flex items-center justify-center">
                      {item.type === "education" ? (
                        <GraduationCap size={14} className="text-[var(--text-lo)]" />
                      ) : (
                        <Award size={14} className="text-[var(--text-lo)]" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5 hover:border-[var(--text-lo)] transition-colors">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h4 className="text-sm font-semibold text-[var(--text-hi)]">
                            {item.title}
                          </h4>
                          <p className="text-xs text-[var(--text-lo)] mt-0.5">{item.org}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-[var(--text-dim)] whitespace-nowrap">
                            {item.period}
                          </span>
                          {item.gpa && (
                            <p className="text-xs font-medium text-[var(--text-md)] mt-0.5">
                              {item.gpa}
                            </p>
                          )}
                        </div>
                      </div>
                      <p className="text-xs text-[var(--text-dim)] mb-3">{item.description}</p>
                      <ul className="flex flex-col gap-1">
                        {item.bullets.map((b, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-xs text-[var(--text-dim)]"
                          >
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--border)] flex-shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
