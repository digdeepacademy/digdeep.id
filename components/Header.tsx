"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { navLinks } from "@/lib/data";

const menuItemVariants = {
  closed: { opacity: 0, y: -12 },
  open: { opacity: 1, y: 0 },
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");
  const [mounted, setMounted] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const reduced = useReducedMotion();

  useEffect(() => setMounted(true), []);

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
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mounted || !isMobile) return;
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, isMobile, mounted]);

  const handleNavClick = () => setMenuOpen(false);
  const showMobileMenu = mounted && isMobile;

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`} id="header">
      <nav className="nav container">
        <Link href="#beranda" className="nav__logo interactive-link" onClick={handleNavClick}>
          <Image
            src="/assets/logo.png"
            alt="D'Academy"
            className="nav__logo-img"
            width={140}
            height={36}
            priority
          />
        </Link>

        <button
          className={`nav__toggle ${menuOpen ? "active" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <motion.ul
          className={`nav__menu ${showMobileMenu && menuOpen ? "open" : ""}`}
          initial={false}
          animate={
            showMobileMenu
              ? menuOpen
                ? { opacity: 1, y: 0, pointerEvents: "auto" as const }
                : { opacity: 0, y: -16, pointerEvents: "none" as const }
              : { opacity: 1, y: 0, pointerEvents: "auto" as const }
          }
          transition={{ duration: reduced ? 0 : 0.28, ease: [0.16, 1, 0.3, 1] }}
          style={showMobileMenu && !menuOpen ? { visibility: "hidden" } : undefined}
        >
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <motion.li
                key={link.href}
                variants={menuItemVariants}
                initial={showMobileMenu && menuOpen && !reduced ? "closed" : false}
                animate={showMobileMenu && menuOpen && !reduced ? "open" : "open"}
                transition={{ delay: showMobileMenu && menuOpen ? index * 0.06 : 0, duration: 0.25 }}
              >
                <Link
                  href={link.href}
                  className={`nav__link interactive-link ${isActive ? "active" : ""}`}
                  onClick={handleNavClick}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      className="nav__link-indicator"
                      layoutId="nav-indicator"
                      transition={{ duration: reduced ? 0 : 0.25, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </Link>
              </motion.li>
            );
          })}
          <motion.li
            variants={menuItemVariants}
            initial={showMobileMenu && menuOpen && !reduced ? "closed" : false}
            animate={showMobileMenu && menuOpen && !reduced ? "open" : "open"}
            transition={{ delay: showMobileMenu && menuOpen ? navLinks.length * 0.06 : 0, duration: 0.25 }}
          >
            <Link
              href="#kontak"
              className="nav__link nav__link--cta interactive-link"
              onClick={handleNavClick}
            >
              Daftar Sekarang
            </Link>
          </motion.li>
        </motion.ul>
      </nav>
    </header>
  );
}
