import Reveal from "@/components/Reveal";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="testimonials section" id="testimoni">
      <div className="container">
        <Reveal className="section__header">
          <span className="section__tag">Testimoni</span>
          <h2 className="section__title">
            Kata <span className="text-teal">Alumni</span> Kami
          </h2>
        </Reveal>

        <div className="testimonials__grid">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} className="reveal-grid-item" delay={index * 80}>
              <blockquote
                className={`testimonial-card ${item.featured ? "testimonial-card--featured" : ""}`}
              >
                <div className="testimonial-card__stars">★★★★★</div>
                <p>&ldquo;{item.quote}&rdquo;</p>
                <footer>
                  <div className={`testimonial-card__avatar testimonial-card__avatar--${item.avatarColor}`}>
                    {item.initials}
                  </div>
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
