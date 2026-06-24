import Reveal from "@/components/Reveal";
import { whyItems } from "@/lib/data";

export default function Why() {
  return (
    <section className="why section" id="keunggulan">
      <div className="container">
        <Reveal className="section__header">
          <span className="section__tag">Keunggulan</span>
          <h2 className="section__title">
            Mengapa Memilih <span className="text-magenta">D&apos;Academy?</span>
          </h2>
        </Reveal>

        <div className="why__grid">
          {whyItems.map((item, index) => (
            <Reveal key={item.number} className="reveal-grid-item" delay={index * 80}>
              <div className="why__card">
                <div className="why__number">{item.number}</div>
                <div className={`why__bar why__bar--${item.barColor}`} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
