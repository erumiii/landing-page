"use client";

import { motion } from "framer-motion";
import { Cloud } from "lucide-react";
import ProjectCard from "./ProjectCard";

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
};

const projects = [
  {
    title:       "Psychologist Appointment Booking Website",
    description:
      "Aplikasi booking konsultasi psikolog dengan arsitektur hybrid cloud — Vercel untuk frontend dan Proxmox homelab untuk backend & database, dilengkapi chatbot RAG.",
    bullets: [
      "Hybrid cloud: Vercel PaaS + Proxmox homelab",
      "RAG pipeline: ingestion, embedding, retrieval, LLM context",
      "CI/CD automation untuk workflow deployment",
      "Service separation & cloud-to-on-premise connectivity",
    ],
    category: "Cloud Architecture",
    year:     "2026",
    icon:     <Cloud size={52} strokeWidth={1} />,
  },
  {
    title:       "Cafe FAQ Chatbot using RAG",
    description:
      "Chatbot berbasis RAG (Retrieval-Augmented Generation) untuk menjawab pertanyaan umum seputar kafe, dibangun dalam Hacktiv8 × IBM SkillsBuild AI Agent Project.",
    bullets: [
      "Document ingestion & chunking pipeline",
      "Embedding dan vector store retrieval",
      "LLM context generation untuk jawaban akurat",
    ],
    category: "AI / RAG",
    year:     "2026",
    image:    "/faq-chatbot-project-thumbnail.png",
  },
  {
    title:       "Infrastructure Design for Company Migration",
    description:
      "Perancangan infrastruktur AWS untuk migrasi perusahaan ke cloud, berfokus pada skalabilitas, high availability, monitoring, dan anggaran bulanan.",
    bullets: [
      "ECS Fargate + Service Auto Scaling untuk traffic spikes",
      "RDS Multi-AZ, ECR, CloudWatch, SNS, IAM",
      "CI/CD dengan GitHub + Jenkins untuk Docker image build",
      "Evaluasi beban kerja terhadap batasan budget bulanan",
    ],
    category: "Cloud Architecture",
    year:     "2025",
    image:    "/infrastructure-design-for-company-migration-project-thumbnail.png",
  },
];

export default function WorkSection() {
  return (
    <section id="work" aria-labelledby="work-heading" className="py-24 md:py-32">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label mb-4">01 — Selected Work</p>
          <h2
            id="work-heading"
            className="text-3xl md:text-5xl font-bold text-[var(--text-hi)] tracking-tight"
          >
            Proyek &amp;
            <br />
            <span className="text-[var(--text-lo)]">Infrastruktur</span>
          </h2>
        </motion.div>

        {/* Project cards grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-xs text-[var(--text-dim)] text-center"
        >
          Semua proyek merupakan bagian dari program akademik &amp; pelatihan profesional.
        </motion.p>
      </div>
    </section>
  );
}
