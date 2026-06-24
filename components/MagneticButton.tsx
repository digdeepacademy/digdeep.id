"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { useRef, type ReactNode } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type MagneticButtonProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

export default function MagneticButton({ href, className = "", children }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduced = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 769px)");
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduced || !isDesktop || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    x.set(offsetX * 0.15);
    y.set(offsetY * 0.15);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div style={{ display: "inline-block", x: springX, y: springY }}>
      <Link
        ref={ref}
        href={href}
        className={className}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <motion.span
          className="magnetic-btn__inner"
          whileHover={reduced ? undefined : { scale: 1.04 }}
          whileTap={reduced ? undefined : { scale: 0.98 }}
          transition={{ duration: 0.18, ease: "easeInOut" }}
          style={{ display: "inline-flex" }}
        >
          {children}
        </motion.span>
      </Link>
    </motion.div>
  );
}
