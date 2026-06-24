"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { galleryItems } from "@/lib/data";

export default function Gallery() {
  return (
    <section className="section section--alt" id="galeri">
      <div className="container">
        <Reveal className="section__header section__header--center">
          <span className="section__eyebrow">Galeri</span>
          <h2 className="section__title">Momen Pelatihan Kami</h2>
          <p className="section__subtitle">
            Dokumentasi sesi pelatihan korporat, workshop, dan program upskilling di berbagai industri.
          </p>
        </Reveal>

        <div className="gallery__grid">
          {galleryItems.map((item, i) => (
            <Reveal key={item.id} delay={i * 60}>
              <motion.div
                className="gallery__item"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`gallery__item-bg gallery__item-bg--${item.color}`}>
                  <div className="gallery__item-info">
                    <h4>{item.title}</h4>
                    <span>{item.category}</span>
                  </div>
                </div>
                <div className="gallery__item-overlay">
                  <div>
                    <h4>{item.title}</h4>
                    <span>{item.category}</span>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
