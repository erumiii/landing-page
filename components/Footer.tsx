"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-sub)]" role="contentinfo">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8">
          {/* Left: copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-[var(--text-dim)]">
            <span>© 2026 Keenan Muhammad Otthmar Emzed.</span>
            <span className="hidden sm:inline text-[var(--border)]">·</span>
            <span>
              Built with{" "}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-lo)] hover:text-[var(--text-hi)] transition-colors"
              >
                Next.js
              </a>{" "}
              &amp;{" "}
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-lo)] hover:text-[var(--text-hi)] transition-colors"
              >
                Tailwind CSS
              </a>
            </span>
          </div>

          {/* Right: back to top */}
          <button
            id="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex items-center gap-2 text-xs text-[var(--text-dim)] hover:text-[var(--text-hi)] transition-colors"
          >
            <span>Back to top</span>
            <span className="flex items-center justify-center w-7 h-7 rounded-full border border-[var(--border)] group-hover:border-[var(--text-lo)] transition-colors">
              <ArrowUp size={12} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
