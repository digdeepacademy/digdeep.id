"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useCallback, useMemo, useState } from "react";
import FloatingField from "@/components/FloatingField";
import Reveal from "@/components/Reveal";
import Toast from "@/components/Toast";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ctaPerks, programOptions } from "@/lib/data";

type FormState = {
  nama: string;
  email: string;
  program: string;
  pesan: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;
type Touched = Partial<Record<keyof FormState, boolean>>;
type SubmitState = "idle" | "loading" | "success";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.nama.trim()) errors.nama = "Nama wajib diisi";
  else if (values.nama.trim().length < 2) errors.nama = "Nama minimal 2 karakter";
  if (!values.email.trim()) errors.email = "Email wajib diisi";
  else if (!emailRegex.test(values.email)) errors.email = "Format email tidak valid";
  if (!values.program) errors.program = "Pilih program terlebih dahulu";
  return errors;
}

export default function Contact() {
  const reduced = useReducedMotion();
  const [values, setValues] = useState<FormState>({
    nama: "",
    email: "",
    program: "",
    pesan: "",
  });
  const [touched, setTouched] = useState<Touched>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [toast, setToast] = useState<string | null>(null);

  const errors = useMemo(() => validate(values), [values]);
  const isValid = Object.keys(errors).length === 0;

  const getStatus = (field: keyof FormState) => {
    if (!touched[field]) return "idle" as const;
    return errors[field] ? ("invalid" as const) : ("valid" as const);
  };

  const handleBlur = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({ nama: true, email: true, program: true, pesan: true });
    if (!isValid) return;

    setSubmitState("loading");
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const programLabel =
      programOptions.find((option) => option.value === values.program)?.label ?? "program";

    setSubmitState("success");
    setToast(`Terima kasih, ${values.nama.trim()}! Pendaftaran program ${programLabel} telah kami terima.`);

    setTimeout(() => {
      setValues({ nama: "", email: "", program: "", pesan: "" });
      setTouched({});
      setSubmitState("idle");
    }, reduced ? 0 : 1800);
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

            <form className="cta__form" onSubmit={handleSubmit} noValidate>
              <h3>Form Pendaftaran</h3>

              <FloatingField
                label="Nama Lengkap"
                name="nama"
                value={values.nama}
                onChange={(e) => handleChange("nama", e.target.value)}
                onBlur={() => handleBlur("nama")}
                status={getStatus("nama")}
                error={touched.nama ? errors.nama : undefined}
                disabled={submitState === "loading"}
              />

              <FloatingField
                label="Email"
                name="email"
                type="email"
                value={values.email}
                onChange={(e) => handleChange("email", e.target.value)}
                onBlur={() => handleBlur("email")}
                status={getStatus("email")}
                error={touched.email ? errors.email : undefined}
                disabled={submitState === "loading"}
              />

              <FloatingField
                as="select"
                label="Program Pilihan"
                name="program"
                value={values.program}
                onChange={(e) => handleChange("program", e.target.value)}
                onBlur={() => handleBlur("program")}
                status={getStatus("program")}
                error={touched.program ? errors.program : undefined}
                disabled={submitState === "loading"}
              >
                <option value="" disabled>
                  Pilih program
                </option>
                {programOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </FloatingField>

              <FloatingField
                as="textarea"
                label="Pesan (Opsional)"
                name="pesan"
                rows={3}
                value={values.pesan}
                onChange={(e) => handleChange("pesan", e.target.value)}
                onBlur={() => handleBlur("pesan")}
                disabled={submitState === "loading"}
              />

              <motion.button
                type="submit"
                className={`btn btn--primary btn--full form-submit ${submitState === "success" ? "form-submit--success" : ""}`}
                disabled={!isValid || submitState === "loading" || submitState === "success"}
                whileHover={!isValid || submitState !== "idle" ? undefined : { scale: 1.02 }}
                whileTap={!isValid || submitState !== "idle" ? undefined : { scale: 0.98 }}
                transition={{ duration: 0.18, ease: "easeInOut" }}
              >
                <AnimatePresence mode="wait">
                  {submitState === "loading" && (
                    <motion.span
                      key="loading"
                      className="form-submit__state"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      <span className="form-submit__spinner" />
                      Mengirim...
                    </motion.span>
                  )}
                  {submitState === "success" && (
                    <motion.span
                      key="success"
                      className="form-submit__state"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Berhasil!
                    </motion.span>
                  )}
                  {submitState === "idle" && (
                    <motion.span
                      key="idle"
                      className="form-submit__state"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      Kirim Pendaftaran
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </Reveal>
        </div>
      </section>

      <Toast message={toast} onClose={closeToast} />
    </>
  );
}
