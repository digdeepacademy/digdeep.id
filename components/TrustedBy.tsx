import { trustedPartners } from "@/lib/data";

export default function TrustedBy() {
  return (
    <section className="trusted" aria-label="Dipercaya oleh">
      <div className="container">
        <p className="trusted__label">Dipercaya oleh Perusahaan &amp; Institusi Terkemuka</p>
        <div className="trusted__logos">
          {trustedPartners.map((name) => (
            <span key={name} className="trusted__logo">{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
