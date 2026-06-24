import Link from "next/link";
import Reveal from "@/components/Reveal";
import { programs } from "@/lib/data";

function ProgramIcon({ type }: { type: (typeof programs)[number]["icon"] }) {
  switch (type) {
    case "code":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "design":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case "data":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 20V10" />
          <path d="M18 20V4" />
          <path d="M6 20v-4" />
        </svg>
      );
  }
}

export default function Programs() {
  return (
    <section className="programs section" id="program">
      <div className="container">
        <Reveal className="section__header">
          <span className="section__tag">Program Kami</span>
          <h2 className="section__title">
            Pilih Jalur <span className="text-orange">Pembelajaran</span> Anda
          </h2>
          <p className="section__subtitle">
            Program intensif dirancang untuk membawa Anda dari pemula hingga siap kerja dalam waktu singkat.
          </p>
        </Reveal>

        <div className="programs__grid">
          {programs.map((program, index) => (
            <Reveal key={program.id} className="reveal-grid-item" delay={index * 80}>
              <article className={`program-card ${program.featured ? "program-card--featured" : ""}`}>
                <div className={`program-card__icon program-card__icon--${program.iconColor}`}>
                  <ProgramIcon type={program.icon} />
                </div>
                <span
                  className={`program-card__badge ${
                    program.badgeVariant === "featured" ? "program-card__badge--featured" : ""
                  }`}
                >
                  {program.badge}
                </span>
                <h3 className="program-card__title">{program.title}</h3>
                <p className="program-card__desc">{program.description}</p>
                <ul className="program-card__meta">
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {program.duration}
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>
                    {program.sessions}
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                    Sertifikat
                  </li>
                </ul>
                <div className="program-card__progress">
                  <div className="program-card__progress-label">
                    <span>Progress Kurikulum</span>
                    <span>{program.progress}%</span>
                  </div>
                  <div className="program-card__progress-bar">
                    <div
                      className={`program-card__progress-fill ${
                        program.progressColor !== "teal"
                          ? `program-card__progress-fill--${program.progressColor}`
                          : ""
                      }`}
                      style={{ width: `${program.progress}%` }}
                    />
                  </div>
                </div>
                <Link
                  href="#kontak"
                  className={`btn btn--${program.ctaVariant} btn--full`}
                >
                  Daftar Program
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
