import type { Transition, Variants } from "framer-motion";

export const easeOut = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

export function getTransition(reduced: boolean, duration = 0.6): Transition {
  if (reduced) return { duration: 0 };
  return { duration, ease: easeOut };
}

export function getInViewOptions(reduced: boolean) {
  return {
    once: true,
    amount: 0.2 as const,
    margin: "-40px 0px -40px 0px" as const,
  };
}
