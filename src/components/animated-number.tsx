"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  delay?: number;
  className?: string;
}

/**
 * AnimatedNumber – animasi angka counting dari 0 ke target value.
 * Bekerja di SSR (Next.js) karena pakai framer-motion/client + whileInView.
 */
export function AnimatedNumber({ value, duration = 1.2, delay = 0, className = "" }: AnimatedNumberProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest).toLocaleString());

  useEffect(() => {
    const controls = animate(count, value, {
      duration,
      delay,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [count, value, duration, delay]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {rounded}
    </motion.span>
  );
}
