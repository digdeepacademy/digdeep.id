"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  accentColor?: "teal" | "magenta" | "orange";
};

export default function TiltCard({
  children,
  className = "",
  accentColor = "teal",
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 769px)");
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });
  const glowOpacity = useTransform(springRotateY, [-8, 0, 8], [0.6, 0, 0.6]);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced || !isDesktop || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    rotateX.set(((y - centerY) / centerY) * -6);
    rotateY.set(((x - centerX) / centerX) * 6);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`tilt-card tilt-card--${accentColor} ${className}`}
      style={{
        rotateX: reduced || !isDesktop ? 0 : springRotateX,
        rotateY: reduced || !isDesktop ? 0 : springRotateY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={
        reduced
          ? undefined
          : {
              scale: 1.025,
              boxShadow: "0 20px 48px rgba(0,0,0,0.45)",
            }
      }
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      {!reduced && isDesktop && (
        <motion.div className="tilt-card__glow" style={{ opacity: glowOpacity }} />
      )}
      {children}
    </motion.div>
  );
}
