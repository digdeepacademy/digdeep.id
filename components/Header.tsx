"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

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

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`} id="header">
      <nav className="nav container">
        <Link href="#beranda" className="nav__logo" onClick={handleNavClick}>
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
          id="navToggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav__menu ${menuOpen ? "open" : ""}`} id="navMenu">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav__link ${activeSection === link.href.slice(1) ? "active" : ""}`}
                onClick={handleNavClick}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#kontak"
              className="nav__link nav__link--cta"
              onClick={handleNavClick}
            >
              Daftar Sekarang
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
