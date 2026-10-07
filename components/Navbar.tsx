"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "backdrop-blur-md border-b border-[var(--border)]"
        : "bg-transparent"
        }`}
      style={{
        backgroundColor: scrolled ? "color-mix(in srgb, var(--bg) 85%, transparent)" : "transparent",
      }}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="text-sm font-semibold tracking-widest uppercase text-[var(--text-hi)] hover:text-[var(--text-lo)] transition-colors"
            aria-label="Keenan Emzed — home"
          >
            KE<span className="text-[var(--text-dim)]">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--text-lo)] hover:text-[var(--text-hi)] transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Open to work badge */}
            <span className="hidden sm:flex items-center gap-1.5 text-xs text-[var(--text-dim)] border border-[var(--border)] rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Open to Internship
            </span>

            {/* Theme toggle */}
            {mounted && (
              <button
                id="theme-toggle"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-lg text-[var(--text-lo)] hover:text-[var(--text-hi)] hover:bg-[var(--bg-card)] transition-all"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            )}

            {/* Mobile hamburger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={menuOpen}
              className="md:hidden p-2 rounded-lg text-[var(--text-lo)] hover:text-[var(--text-hi)] transition-colors"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden overflow-hidden border-t border-[var(--border)] bg-[var(--bg)]"
          >
            <nav className="section-container py-4 flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2.5 text-sm text-[var(--text-lo)] hover:text-[var(--text-hi)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium rounded-lg border border-[var(--text-hi)] text-[var(--text-hi)] hover:bg-[var(--text-hi)] hover:text-[var(--bg)] transition-all"
              >
                Contact Me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
