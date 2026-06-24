"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import Reveal from "@/components/Reveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const reduced = useReducedMotion();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    reduced ? [] : [Autoplay({ delay: 5000, stopOnMouseEnter: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section className="section" id="testimoni">
      <div className="container">
        <Reveal className="section__header section__header--center">
          <span className="section__eyebrow">Testimoni</span>
          <h2 className="section__title">Apa Kata Klien Kami</h2>
          <p className="section__subtitle">
            Pengalaman langsung dari perusahaan dan institusi yang telah mempercayai program pelatihan kami.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="testimonials__carousel">
            <div className="testimonials__viewport" ref={emblaRef}>
              <div className="testimonials__track">
                {testimonials.map((item) => (
                  <div className="testimonials__slide" key={item.name}>
                    <motion.blockquote
                      className="testimonial-card"
                      whileHover={{ y: -4, boxShadow: "0 8px 32px rgba(15,23,42,0.08)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="testimonial-card__stars">★★★★★</div>
                      <p className="testimonial-card__quote">&ldquo;{item.quote}&rdquo;</p>
                      <footer className="testimonial-card__author">
                        <div className="testimonial-card__avatar">{item.initials}</div>
                        <div>
                          <strong>{item.name}</strong>
                          <span>{item.role}</span>
                          <div className="testimonial-card__company">{item.company}</div>
                        </div>
                      </footer>
                    </motion.blockquote>
                  </div>
                ))}
              </div>
            </div>

            <div className="testimonials__controls">
              <button type="button" className="testimonials__nav-btn" onClick={scrollPrev} aria-label="Sebelumnya">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
              </button>
              <div className="testimonials__dots">
                {testimonials.map((t, i) => (
                  <button
                    key={t.name}
                    type="button"
                    className={`testimonials__dot ${selectedIndex === i ? "active" : ""}`}
                    onClick={() => scrollTo(i)}
                    aria-label={`Testimoni ${i + 1}`}
                  />
                ))}
              </div>
              <button type="button" className="testimonials__nav-btn" onClick={scrollNext} aria-label="Berikutnya">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
