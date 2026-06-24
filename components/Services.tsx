"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  IconAI, IconAgent, IconAutomation, IconChart, IconCustom, IconExcel, IconPowerBI,
} from "@/components/Icons";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/data";

const iconMap = {
  ai: IconAI,
  excel: IconExcel,
  analytics: IconChart,
  powerbi: IconPowerBI,
  automation: IconAutomation,
  agent: IconAgent,
  custom: IconCustom,
};

export default function Services() {
  return (
    <section className="section section--alt" id="layanan">
      <div className="container">
        <Reveal className="section__header section__header--center">
          <span className="section__eyebrow">Layanan Kami</span>
          <h2 className="section__title">Program Pelatihan Korporat</h2>
          <p className="section__subtitle">
            Solusi pelatihan end-to-end untuk transformasi digital, otomatisasi, dan peningkatan kompetensi tim Anda.
          </p>
        </Reveal>

        <div className="services__grid">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <Reveal key={service.id} delay={i * 80}>
                <motion.article
                  className={`service-card ${"featured" in service && service.featured ? "service-card--featured" : ""}`}
                  whileHover={{ y: -6, boxShadow: "0 12px 40px rgba(15,23,42,0.1)" }}
                  transition={{ duration: 0.25 }}
                >
                  <div className={`service-card__icon service-card__icon--${service.color}`}>
                    <Icon />
                  </div>
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__desc">{service.description}</p>
                  <Link href="#kontak" className="btn btn--ghost">
                    Pelajari Lebih Lanjut →
                  </Link>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
