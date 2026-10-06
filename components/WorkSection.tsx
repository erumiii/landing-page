"use client";

import { motion } from "framer-motion";
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
    image:    "/psychologist-appointment-booking-website-project-thumbnail.png",
    wip:      true,
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
    link:     "https://app.notion.com/p/Cafe-FAQ-Chatbot-using-RAG-3df6cb0763ea80d18e7be94a284fe451?source=copy_link",
  },
  {
    title:       "Infrastructure Diagram for Company Migration",
    description:
      "Perancangan infrastruktur AWS untuk migrasi perusahaan ke cloud, berfokus pada skalabilitas dan high availability.",
    bullets: [
      "ECS + Fargate + Application Load Balancer untuk traffic spikes",
      "RDS Multi-AZ, ECR, CloudWatch, SNS, IAM",
      "CI/CD dengan GitLab yang terhubung dengan ECR"
    ],
    category: "Cloud Architecture",
    year:     "2025",
    image:    "/infrastructure-design-for-company-migration-project-thumbnail.png",
    link:     "https://app.notion.com/p/Infrastructure-Design-for-Company-Migration-3db6cb0763ea805ab734f9e0e10a9d8e?source=copy_link",
  },
];

export default function WorkSection() {
  return (
    <section id="work" aria-labelledby="work-heading" className="py-24 md:py-32 border-t border-[var(--border)]">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label mb-4">02 — Selected Work</p>
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
          {projects.map((project) => {
            const card = <ProjectCard key={project.title} {...project} />;
            return project.link ? (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                {card}
              </a>
            ) : (
              card
            );
          })}
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
