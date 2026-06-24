import Reveal from "@/components/Reveal";
import { aboutFeatures } from "@/lib/data";

function FeatureIcon({ type }: { type: (typeof aboutFeatures)[number]["icon"] }) {
  switch (type) {
    case "monitor":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
    case "users":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "chart":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      );
  }
}

export default function About() {
  return (
    <section className="about section" id="tentang">
      <div className="container about__grid">
        <Reveal className="about__visual">
          <div className="about__card about__card--main">
            <div className="about__growth-chart">
              <div className="growth-bar growth-bar--1"><span>2022</span></div>
              <div className="growth-bar growth-bar--2"><span>2023</span></div>
              <div className="growth-bar growth-bar--3"><span>2024</span></div>
              <div className="growth-bar growth-bar--4"><span>2025</span></div>
            </div>
            <p className="about__card-label">Pertumbuhan Alumni</p>
          </div>
          <div className="about__card about__card--float">
            <div className="about__card-icon about__card-icon--teal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div>
              <strong>95%</strong>
              <span>Lulusan Terserap Kerja</span>
            </div>
          </div>
        </Reveal>

        <Reveal className="about__text" delay={100}>
          <span className="section__tag">Tentang Kami</span>
          <h2 className="section__title">
            Membangun Talenta Digital <span className="text-teal">Masa Depan</span>
          </h2>
          <p className="about__desc">
            D&apos;Academy didirikan dengan visi menjadi pusat pembelajaran digital terdepan di Indonesia.
            Kami menggabungkan teori mendalam dengan praktik langsung agar setiap peserta siap bersaing
            di industri teknologi yang terus berkembang.
          </p>
          <ul className="about__features">
            {aboutFeatures.map((feature) => (
              <li key={feature.title}>
                <div className={`about__feature-icon about__feature-icon--${feature.color}`}>
                  <FeatureIcon type={feature.icon} />
                </div>
                <div>
                  <strong>{feature.title}</strong>
                  <p>{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
