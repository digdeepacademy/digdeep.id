"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useId, type InputHTMLAttributes, type SelectHTMLAttributes, type TextareaHTMLAttributes } from "react";

type FieldStatus = "idle" | "valid" | "invalid";

type BaseProps = {
  label: string;
  error?: string;
  status?: FieldStatus;
};

type InputFieldProps = BaseProps &
  InputHTMLAttributes<HTMLInputElement> & {
    as?: "input";
  };

type SelectFieldProps = BaseProps &
  SelectHTMLAttributes<HTMLSelectElement> & {
    as: "select";
    children: React.ReactNode;
  };

type TextareaFieldProps = BaseProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    as: "textarea";
  };

type FloatingFieldProps = InputFieldProps | SelectFieldProps | TextareaFieldProps;

export default function FloatingField(props: FloatingFieldProps) {
  const { label, error, status = "idle", as = "input", ...rest } = props;
  const id = useId();
  const fieldId = ("id" in rest && rest.id) || id;
  const hasValue = "value" in rest ? Boolean(rest.value) : false;

  const statusClass =
    status === "valid" ? "is-valid" : status === "invalid" ? "is-invalid" : "";

  return (
    <div className={`floating-field ${statusClass}`}>
      <div className="floating-field__wrap">
        {as === "select" ? (
          <select
            {...(rest as SelectHTMLAttributes<HTMLSelectElement>)}
            id={fieldId}
            className="floating-field__input"
          >
            {(props as SelectFieldProps).children}
          </select>
        ) : as === "textarea" ? (
          <textarea
            {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
            id={fieldId}
            className="floating-field__input floating-field__input--textarea"
            placeholder=" "
          />
        ) : (
          <input
            {...(rest as InputHTMLAttributes<HTMLInputElement>)}
            id={fieldId}
            className="floating-field__input"
            placeholder=" "
          />
        )}
        <label htmlFor={fieldId} className={`floating-field__label ${hasValue ? "filled" : ""}`}>
          {label}
        </label>
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            className="floating-field__error"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
