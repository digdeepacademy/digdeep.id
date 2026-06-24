"use client";

import { FormEvent, useCallback, useState } from "react";
import Reveal from "@/components/Reveal";
import Toast from "@/components/Toast";
import { ctaPerks, programOptions } from "@/lib/data";

export default function Contact() {
  const [toast, setToast] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const nama = String(formData.get("nama") ?? "").trim();
    const programValue = String(formData.get("program") ?? "");
    const programLabel =
      programOptions.find((option) => option.value === programValue)?.label ?? "program";

    setToast(`Terima kasih, ${nama}! Pendaftaran program ${programLabel} telah kami terima.`);
    form.reset();
  };

  const closeToast = useCallback(() => setToast(null), []);

  return (
    <>
      <section className="cta section" id="kontak">
        <div className="container">
          <Reveal className="cta__wrapper">
            <div className="cta__content">
              <span className="section__tag">Mulai Sekarang</span>
              <h2 className="section__title">
                Siap Memulai
                <br />
                Perjalanan <span className="text-orange">Digital</span> Anda?
              </h2>
              <p>
                Daftarkan diri Anda sekarang dan dapatkan konsultasi karier gratis bersama tim akademik kami.
              </p>
              <ul className="cta__perks">
                {ctaPerks.map((perk) => (
                  <li key={perk}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>

            <form className="cta__form" onSubmit={handleSubmit}>
              <h3>Form Pendaftaran</h3>
              <div className="form-group">
                <label htmlFor="nama">Nama Lengkap</label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  placeholder="Masukkan nama Anda"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="nama@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="program">Program Pilihan</label>
                <select id="program" name="program" defaultValue="" required>
                  <option value="" disabled>
                    Pilih program
                  </option>
                  {programOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="pesan">Pesan (Opsional)</label>
                <textarea
                  id="pesan"
                  name="pesan"
                  rows={3}
                  placeholder="Ceritakan tujuan belajar Anda..."
                />
              </div>
              <button type="submit" className="btn btn--primary btn--full">
                Kirim Pendaftaran
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <Toast message={toast} onClose={closeToast} />
    </>
  );
}
