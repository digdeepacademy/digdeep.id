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
    { loop: true, align: "start", skipSnaps: false },
    reduced
      ? []
      : [
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="testimonials section" id="testimoni">
      <div className="container">
        <Reveal className="section__header">
          <span className="section__tag">Testimoni</span>
          <h2 className="section__title">
            Kata <span className="text-teal">Alumni</span> Kami
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="testimonials__carousel">
            <div className="testimonials__viewport" ref={emblaRef}>
              <div className="testimonials__track">
                {testimonials.map((item) => (
                  <div className="testimonials__slide" key={item.name}>
                    <motion.blockquote
                      className={`testimonial-card ${item.featured ? "testimonial-card--featured" : ""}`}
                      whileHover={
                        reduced
                          ? undefined
                          : {
                              y: -6,
                              boxShadow: "0 16px 40px rgba(0,0,0,0.35)",
                              transition: { duration: 0.2, ease: "easeInOut" },
                            }
                      }
                    >
                      <div className="testimonial-card__stars">★★★★★</div>
                      <p>&ldquo;{item.quote}&rdquo;</p>
                      <footer>
                        <div
                          className={`testimonial-card__avatar testimonial-card__avatar--${item.avatarColor}`}
                        >
                          {item.initials}
                        </div>
                        <div>
                          <strong>{item.name}</strong>
                          <span>{item.role}</span>
                        </div>
                      </footer>
                    </motion.blockquote>
                  </div>
                ))}
              </div>
            </div>

            <div className="testimonials__controls">
              <button
                type="button"
                className="testimonials__nav-btn"
                onClick={scrollPrev}
                aria-label="Testimoni sebelumnya"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <div className="testimonials__dots" role="tablist" aria-label="Navigasi testimoni">
                {testimonials.map((item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    role="tab"
                    aria-selected={selectedIndex === index}
                    aria-label={`Testimoni ${index + 1}`}
                    className={`testimonials__dot ${selectedIndex === index ? "active" : ""}`}
                    onClick={() => scrollTo(index)}
                  />
                ))}
              </div>

              <button
                type="button"
                className="testimonials__nav-btn"
                onClick={scrollNext}
                aria-label="Testimoni berikutnya"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
