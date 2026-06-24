"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { heroStats } from "@/lib/data";
import { fadeUp, getTransition, staggerContainer } from "@/lib/motion";

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="hero" id="beranda">
      <div className="container hero__grid">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="hero__badge" variants={fadeUp} transition={getTransition(reduced)}>
            <span className="hero__badge-dot" />
            Corporate Training &amp; Professional Upskilling
          </motion.div>

          <motion.h1 className="hero__title" variants={fadeUp} transition={getTransition(reduced)}>
            Tingkatkan Kompetensi <span>Tim Korporat</span> Anda di Era AI &amp; Digital
          </motion.h1>

          <motion.p className="hero__desc" variants={fadeUp} transition={getTransition(reduced)}>
            Program pelatihan enterprise untuk AI, Data Analytics, Power BI, Workflow Automation,
            dan upskilling profesional — dipercaya perusahaan, institusi, dan organisi pemerintah.
          </motion.p>

          <motion.div className="hero__actions" variants={fadeUp} transition={getTransition(reduced)}>
            <Link href="#kontak" className="btn btn--primary">Konsultasi Gratis</Link>
            <Link href="#layanan" className="btn btn--outline">Lihat Program</Link>
          </motion.div>

          <motion.div className="hero__stats" variants={fadeUp} transition={getTransition(reduced)}>
            {heroStats.map((stat) => (
              <div key={stat.label} className="hero__stat">
                <div className="hero__stat-value">{stat.value}</div>
                <div className="hero__stat-label">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <Reveal className="hero__visual" delay={150}>
          <div className="hero__illustration">
            <div className="hero__illus-grid">
              <div className="hero__illus-card hero__illus-card--red">
                <h4>AI Training</h4>
                <p>Generative AI &amp; ML</p>
              </div>
              <div className="hero__illus-card hero__illus-card--green">
                <h4>Data Analytics</h4>
                <p>BI &amp; Dashboard</p>
              </div>
              <div className="hero__illus-card hero__illus-card--yellow">
                <h4>Automation</h4>
                <p>n8n Workflow</p>
              </div>
              <div className="hero__illus-card hero__illus-card--red">
                <h4>Power BI</h4>
                <p>Enterprise Reporting</p>
              </div>
            </div>
            <div className="hero__illus-float">✓ 1000+ Alumni Terlatih</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
