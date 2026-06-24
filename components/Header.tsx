"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { navLinks } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActiveSection(id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-72px 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen, isMobile]);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav container">
        <Link href="#beranda" className="nav__logo" onClick={() => setMenuOpen(false)}>
          <Image src="/assets/logo.png" alt="D'Academy" className="nav__logo-img" width={140} height={36} priority />
        </Link>

        <button
          className={`nav__toggle ${menuOpen ? "active" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>

        <motion.ul
          className="nav__menu"
          initial={false}
          animate={
            isMobile
              ? menuOpen
                ? { opacity: 1, y: 0, pointerEvents: "auto" as const }
                : { opacity: 0, y: -12, pointerEvents: "none" as const }
              : { opacity: 1, y: 0, pointerEvents: "auto" as const }
          }
          transition={{ duration: reduced ? 0 : 0.25 }}
          style={isMobile && !menuOpen ? { visibility: "hidden" } : undefined}
        >
          {navLinks.map((link) => {
            const active = activeSection === link.href.slice(1);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav__link ${active ? "active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      className="nav__link-indicator"
                      layoutId="nav-indicator"
                      transition={{ duration: reduced ? 0 : 0.25 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
          <li>
            <Link href="#kontak" className="nav__link nav__link--cta" onClick={() => setMenuOpen(false)}>
              Konsultasi Gratis
            </Link>
          </li>
        </motion.ul>
      </nav>
    </header>
  );
}
