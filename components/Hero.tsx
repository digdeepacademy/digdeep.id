"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";
import { useCounter } from "@/hooks/useCounter";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { heroStats } from "@/lib/data";
import { fadeUp, getTransition, staggerContainer } from "@/lib/motion";

function StatItem({
  count,
  suffix,
  label,
}: {
  count: number;
  suffix: string;
  label: string;
}) {
  const { ref, value } = useCounter(count, 1.8);

  return (
    <div className="hero__stat">
      <span className="hero__stat-num" ref={ref}>
        {value}
      </span>
      <span className="hero__stat-plus">{suffix}</span>
      <span className="hero__stat-label">{label}</span>
    </div>
  );
}

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="hero" id="beranda">
      <div className="hero__bg">
        <motion.div
          className="hero__glow hero__glow--teal"
          animate={
            reduced
              ? undefined
              : { x: [0, 20, -10, 0], y: [0, -15, 10, 0] }
          }
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero__glow hero__glow--magenta"
          animate={
            reduced
              ? undefined
              : { x: [0, -15, 10, 0], y: [0, 20, -10, 0] }
          }
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="hero__bars">
          <div className="hero__bar hero__bar--1" />
          <div className="hero__bar hero__bar--2" />
          <div className="hero__bar hero__bar--3" />
        </div>
        <div className="hero__gradient-anim" aria-hidden="true" />
      </div>

      <motion.div
        className="container hero__content"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div className="hero__badge" variants={fadeUp} transition={getTransition(reduced, 0.5)}>
          <span className="hero__badge-dot" />
          Pendaftaran Gelombang Baru Dibuka
        </motion.div>

        <motion.h1 className="hero__title" variants={fadeUp} transition={getTransition(reduced, 0.6)}>
          Bangun Karier Digital
          <br />
          <span className="hero__title-accent">Bersama D&apos;Academy</span>
        </motion.h1>

        <motion.p className="hero__desc" variants={fadeUp} transition={getTransition(reduced, 0.6)}>
          Akademi digital terpercaya dengan kurikulum berbasis industri, mentor berpengalaman,
          dan metode pembelajaran yang terbukti membawa ribuan alumni sukses.
        </motion.p>

        <motion.div
          className="hero__actions"
          variants={fadeUp}
          transition={getTransition(reduced, 0.6)}
        >
          <MagneticButton href="#program" className="btn btn--primary interactive-link">
            Jelajahi Program
          </MagneticButton>
          <Link href="#tentang" className="btn btn--outline interactive-link">
            Pelajari Lebih Lanjut
          </Link>
        </motion.div>

        <motion.div
          className="hero__stats"
          variants={fadeUp}
          transition={getTransition(reduced, 0.6)}
        >
          {heroStats.map((stat, index) => (
            <div key={stat.label} className="hero__stat-group">
              {index > 0 && <div className="hero__stat-divider" />}
              <StatItem count={stat.count} suffix={stat.suffix} label={stat.label} />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
