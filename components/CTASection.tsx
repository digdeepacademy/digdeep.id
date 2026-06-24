"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useCallback, useMemo, useState } from "react";
import { IconCheck } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import Toast from "@/components/Toast";
import { programOptions } from "@/lib/data";

type FormState = { nama: string; email: string; perusahaan: string; program: string; pesan: string };
type Errors = Partial<Record<keyof FormState, string>>;
type Touched = Partial<Record<keyof FormState, boolean>>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(v: FormState): Errors {
  const e: Errors = {};
  if (!v.nama.trim()) e.nama = "Nama wajib diisi";
  if (!v.email.trim()) e.email = "Email wajib diisi";
  else if (!emailRegex.test(v.email)) e.email = "Format email tidak valid";
  if (!v.perusahaan.trim()) e.perusahaan = "Nama perusahaan wajib diisi";
  if (!v.program) e.program = "Pilih program pelatihan";
  return e;
}

const perks = [
  "Konsultasi kebutuhan pelatihan gratis",
  "Proposal kurikulum dalam 3 hari kerja",
  "Fleksibel: onsite, online, atau hybrid",
];

export default function CTASection() {
  const [values, setValues] = useState<FormState>({ nama: "", email: "", perusahaan: "", program: "", pesan: "" });
  const [touched, setTouched] = useState<Touched>({});
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success">("idle");
  const [toast, setToast] = useState<string | null>(null);

  const errors = useMemo(() => validate(values), [values]);
  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setTouched({ nama: true, email: true, perusahaan: true, program: true });
    if (!isValid) return;

    setSubmitState("loading");
    await new Promise((r) => setTimeout(r, 1500));
    const label = programOptions.find((p) => p.value === values.program)?.label ?? "program";
    setSubmitState("success");
    setToast(`Terima kasih, ${values.nama}! Permintaan konsultasi ${label} telah kami terima. Tim kami akan menghubungi Anda.`);
    setTimeout(() => {
      setValues({ nama: "", email: "", perusahaan: "", program: "", pesan: "" });
      setTouched({});
      setSubmitState("idle");
    }, 1800);
  };

  const closeToast = useCallback(() => setToast(null), []);

  return (
    <>
      <section className="section" id="kontak">
        <div className="container">
          <Reveal>
            <div className="cta-section">
              <div className="cta-section__grid">
                <div className="cta-section__content">
                  <h2>Siap Tingkatkan Kompetensi Tim Anda?</h2>
                  <p>
                    Konsultasikan kebutuhan pelatihan korporat Anda. Tim ahli kami siap membantu
                    merancang program yang tepat untuk organisasi Anda.
                  </p>
                  <ul className="cta-section__perks">
                    {perks.map((p) => (
                      <li key={p}><IconCheck />{p}</li>
                    ))}
                  </ul>
                </div>

                <form className="cta-form" onSubmit={handleSubmit} noValidate>
                  <h3>Form Konsultasi Gratis</h3>

                  {(["nama", "email", "perusahaan"] as const).map((field) => (
                    <div key={field} className={`form-field ${touched[field] && errors[field] ? "is-invalid" : ""}`}>
                      <label htmlFor={field}>
                        {field === "nama" ? "Nama Lengkap" : field === "email" ? "Email Korporat" : "Nama Perusahaan"}
                      </label>
                      <input
                        id={field}
                        name={field}
                        type={field === "email" ? "email" : "text"}
                        value={values[field]}
                        onChange={(e) => setValues((v) => ({ ...v, [field]: e.target.value }))}
                        onBlur={() => setTouched((t) => ({ ...t, [field]: true }))}
                        disabled={submitState === "loading"}
                      />
                      {touched[field] && errors[field] && <p className="form-field__error">{errors[field]}</p>}
                    </div>
                  ))}

                  <div className={`form-field ${touched.program && errors.program ? "is-invalid" : ""}`}>
                    <label htmlFor="program">Program Pelatihan</label>
                    <select
                      id="program"
                      name="program"
                      value={values.program}
                      onChange={(e) => setValues((v) => ({ ...v, program: e.target.value }))}
                      onBlur={() => setTouched((t) => ({ ...t, program: true }))}
                      disabled={submitState === "loading"}
                    >
                      <option value="" disabled>Pilih program</option>
                      {programOptions.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                    {touched.program && errors.program && <p className="form-field__error">{errors.program}</p>}
                  </div>

                  <div className="form-field">
                    <label htmlFor="pesan">Kebutuhan Pelatihan (Opsional)</label>
                    <textarea
                      id="pesan"
                      name="pesan"
                      rows={3}
                      value={values.pesan}
                      onChange={(e) => setValues((v) => ({ ...v, pesan: e.target.value }))}
                      disabled={submitState === "loading"}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="btn btn--primary btn--full form-submit"
                    disabled={!isValid || submitState !== "idle"}
                    whileHover={isValid && submitState === "idle" ? { scale: 1.02 } : undefined}
                    whileTap={isValid && submitState === "idle" ? { scale: 0.98 } : undefined}
                  >
                    <AnimatePresence mode="wait">
                      {submitState === "loading" && (
                        <motion.span key="load" className="form-submit__state" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          <span className="form-submit__spinner" /> Mengirim...
                        </motion.span>
                      )}
                      {submitState === "success" && (
                        <motion.span key="ok" className="form-submit__state" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          <IconCheck /> Berhasil!
                        </motion.span>
                      )}
                      {submitState === "idle" && (
                        <motion.span key="idle" className="form-submit__state" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          Kirim Permintaan Konsultasi
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <Toast message={toast} onClose={closeToast} />
    </>
  );
}
