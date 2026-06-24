"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { heroStats } from "@/lib/data";

function useCounter(target: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    const duration = 2000;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [target, active]);

  return count;
}

function StatItem({
  count,
  suffix,
  label,
  active,
}: {
  count: number;
  suffix: string;
  label: string;
  active: boolean;
}) {
  const value = useCounter(count, active);

  return (
    <div className="hero__stat">
      <span className="hero__stat-num">{value}</span>
      <span className="hero__stat-plus">{suffix}</span>
      <span className="hero__stat-label">{label}</span>
    </div>
  );
}

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsActive, setStatsActive] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" id="beranda">
      <div className="hero__bg">
        <div className="hero__glow hero__glow--teal" />
        <div className="hero__glow hero__glow--magenta" />
        <div className="hero__bars">
          <div className="hero__bar hero__bar--1" />
          <div className="hero__bar hero__bar--2" />
          <div className="hero__bar hero__bar--3" />
        </div>
      </div>

      <div className="container hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Pendaftaran Gelombang Baru Dibuka
        </div>

        <h1 className="hero__title">
          Bangun Karier Digital
          <br />
          <span className="hero__title-accent">Bersama D&apos;Academy</span>
        </h1>

        <p className="hero__desc">
          Akademi digital terpercaya dengan kurikulum berbasis industri, mentor berpengalaman,
          dan metode pembelajaran yang terbukti membawa ribuan alumni sukses.
        </p>

        <div className="hero__actions">
          <Link href="#program" className="btn btn--primary">
            Jelajahi Program
          </Link>
          <Link href="#tentang" className="btn btn--outline">
            Pelajari Lebih Lanjut
          </Link>
        </div>

        <div className="hero__stats" ref={statsRef}>
          {heroStats.map((stat, index) => (
            <div key={stat.label} style={{ display: "contents" }}>
              {index > 0 && <div className="hero__stat-divider" />}
              <StatItem
                count={stat.count}
                suffix={stat.suffix}
                label={stat.label}
                active={statsActive}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
