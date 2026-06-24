"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { whyItems } from "@/lib/data";
import { fadeUp, getTransition, staggerFast } from "@/lib/motion";

export default function Why() {
  const reduced = useReducedMotion();

  return (
    <section className="why section" id="keunggulan">
      <div className="container">
        <Reveal className="section__header">
          <span className="section__tag">Keunggulan</span>
          <h2 className="section__title">
            Mengapa Memilih <span className="text-magenta">D&apos;Academy?</span>
          </h2>
        </Reveal>

        <motion.div
          className="why__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2, margin: "-40px" }}
          variants={staggerFast}
        >
          {whyItems.map((item) => (
            <motion.div key={item.number} variants={fadeUp} transition={getTransition(reduced, 0.55)}>
              <motion.div
                className="why__card"
                whileHover={
                  reduced
                    ? undefined
                    : {
                        y: -6,
                        transition: { duration: 0.2, ease: "easeInOut" },
                      }
                }
              >
                <motion.div
                  className="why__number"
                  whileHover={
                    reduced
                      ? undefined
                      : {
                          scale: 1.08,
                          color: "var(--color-teal)",
                          transition: { duration: 0.18, ease: "easeInOut" },
                        }
                  }
                >
                  {item.number}
                </motion.div>
                <div className={`why__bar why__bar--${item.barColor}`} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
