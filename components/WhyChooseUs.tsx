"use client";

import { motion } from "framer-motion";
import {
  IconCases, IconCert, IconHandsOn, IconMaterials, IconSupport, IconTrainers,
} from "@/components/Icons";
import Reveal from "@/components/Reveal";
import { whyChooseUs } from "@/lib/data";
import { fadeUp, getTransition, staggerFast } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const iconMap = {
  materials: IconMaterials,
  trainers: IconTrainers,
  "hands-on": IconHandsOn,
  cases: IconCases,
  certification: IconCert,
  support: IconSupport,
};

export default function WhyChooseUs() {
  const reduced = useReducedMotion();

  return (
    <section className="section" id="keunggulan">
      <div className="container">
        <Reveal className="section__header section__header--center">
          <span className="section__eyebrow">Keunggulan</span>
          <h2 className="section__title">Mengapa Memilih D&apos;Academy?</h2>
          <p className="section__subtitle">
            Partner pelatihan korporat yang memahami kebutuhan enterprise, regulasi, dan standar industri.
          </p>
        </Reveal>

        <motion.div
          className="why__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerFast}
        >
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div key={item.title} variants={fadeUp} transition={getTransition(reduced)}>
                <motion.div
                  className="why-card"
                  whileHover={{ y: -4, boxShadow: "0 8px 32px rgba(15,23,42,0.08)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="why-card__icon"><Icon /></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
