"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { trainingProcess } from "@/lib/data";
import { fadeUp, getTransition, staggerFast } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function TrainingProcess() {
  const reduced = useReducedMotion();

  return (
    <section className="section section--alt" id="proses">
      <div className="container">
        <Reveal className="section__header section__header--center">
          <span className="section__eyebrow">Proses Kami</span>
          <h2 className="section__title">Alur Pelatihan Korporat</h2>
          <p className="section__subtitle">
            Metodologi terstruktur dari konsultasi awal hingga dukungan pasca-pelatihan untuk hasil maksimal.
          </p>
        </Reveal>

        <motion.div
          className="process__timeline"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerFast}
        >
          {trainingProcess.map((step) => (
            <motion.div key={step.step} className="process__step" variants={fadeUp} transition={getTransition(reduced)}>
              <div className="process__step-num">{step.step}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
