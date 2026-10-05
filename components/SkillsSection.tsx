"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.07 } },
};

const categories = [
  {
    title: "Cloud Computing",
    items: ["GCP (Google Cloud Platform)", "AWS (Amazon Web Services)"],
  },
  {
    title: "Infrastructure & Tools",
    items: ["Docker", "Linux", "Git", "GitHub"],
  },
  {
    title: "Database",
    items: ["MySQL"],
  },
  {
    title: "Programming Languages",
    items: ["Python", "PHP", "Bash / Shell Scripting"],
  },
  {
    title: "Languages",
    items: ["English (Intermediate)", "Indonesian (Native)"],
  },
];

function Badge({ label }: { label: string }) {
  return (
    <motion.span
      variants={fadeUp}
      className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-[var(--text-lo)] border border-[var(--border)] rounded-lg hover:border-[var(--text-lo)] hover:text-[var(--text-hi)] transition-all cursor-default"
    >
      {label}
    </motion.span>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-24 md:py-32 border-t border-[var(--border)]"
    >
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label mb-4">03 — Toolkit</p>
          <h2
            id="skills-heading"
            className="text-3xl md:text-5xl font-bold text-[var(--text-hi)] tracking-tight"
          >
            Skills &amp;
            <br />
            <span className="text-[var(--text-lo)]">Technologies</span>
          </h2>
        </motion.div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45 }}
              className="flex flex-col gap-4"
            >
              <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--text-dim)]">
                {cat.title}
              </h3>
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {cat.items.map((item) => (
                  <Badge key={item} label={item} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Currently learning strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 p-5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)]"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--text-dim)] mb-3">
            Currently Learning / Exploring
          </p>
          <div className="flex flex-wrap gap-2">
            {["Kubernetes", "Terraform", "CI/CD Pipelines"].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[var(--text-dim)] border border-dashed border-[var(--border)] rounded-lg"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-dim)] animate-pulse" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
