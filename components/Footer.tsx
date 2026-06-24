"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { footerLinks } from "@/lib/data";

export default function Footer() {
  const reduced = useReducedMotion();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Image src="/assets/logo.png" alt="D'Academy" className="footer__logo" width={120} height={32} />
          <p>
            Platform pelatihan korporat premium untuk AI, data analytics, automation,
            dan professional upskilling — dipercaya enterprise, institusi, dan pemerintah.
          </p>
          <div className="footer__social">
            {["Instagram", "LinkedIn", "YouTube"].map((s) => (
              <motion.a
                key={s}
                href="#"
                aria-label={s}
                whileHover={reduced ? undefined : { scale: 1.1, y: -2 }}
                transition={{ duration: 0.18 }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {s === "Instagram" && (
                    <>
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    </>
                  )}
                  {s === "LinkedIn" && (
                    <>
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </>
                  )}
                  {s === "YouTube" && (
                    <>
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2 29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                    </>
                  )}
                </svg>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="footer__links">
          <h4>Layanan</h4>
          <ul>
            {footerLinks.layanan.map((l) => (
              <li key={l.label}><Link href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer__links">
          <h4>Perusahaan</h4>
          <ul>
            {footerLinks.perusahaan.map((l) => (
              <li key={l.label}><Link href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer__links footer__contact">
          <h4>Kontak</h4>
          <ul>
            <li>info@dacademy.id</li>
            <li>+62 812-3456-7890</li>
            <li>Jakarta, Indonesia</li>
            <li>Senin – Jumat, 09:00–17:00</li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>&copy; 2025 D&apos;Academy. All rights reserved.</p>
        <div className="footer__bottom-links">
          <Link href="#">Kebijakan Privasi</Link>
          <Link href="#">Syarat &amp; Ketentuan</Link>
        </div>
      </div>
    </footer>
  );
}
