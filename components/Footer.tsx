import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Image
            src="/assets/logo.png"
            alt="D'Academy"
            className="footer__logo"
            width={120}
            height={32}
          />
          <p>
            Akademi digital profesional untuk membangun karier masa depan Anda di era teknologi.
          </p>
          <div className="footer__social">
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer__links">
          <h4>Program</h4>
          <ul>
            <li><Link href="#program">Web Development</Link></li>
            <li><Link href="#program">UI/UX Design</Link></li>
            <li><Link href="#program">Data Science &amp; AI</Link></li>
          </ul>
        </div>

        <div className="footer__links">
          <h4>Perusahaan</h4>
          <ul>
            <li><Link href="#tentang">Tentang Kami</Link></li>
            <li><Link href="#keunggulan">Keunggulan</Link></li>
            <li><Link href="#testimoni">Testimoni</Link></li>
            <li><Link href="#kontak">Kontak</Link></li>
          </ul>
        </div>

        <div className="footer__links">
          <h4>Kontak</h4>
          <ul>
            <li>info@dacademy.id</li>
            <li>+62 812-3456-7890</li>
            <li>Jakarta, Indonesia</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>&copy; 2025 D&apos;Academy. All rights reserved.</p>
        <div className="footer__bottom-links">
          <Link href="#">Kebijakan Privasi</Link>
          <Link href="#">Syarat &amp; Ketentuan</Link>
        </div>
      </div>
    </footer>
  );
}
