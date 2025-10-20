import { Variants } from "framer-motion";

export const animationConfig = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.3 },
} as const;

/**
 * Variants global — semua animasi konsisten pakai ini
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier
    },
  },
};

/**
 * Untuk container dengan animasi berurutan (stagger)
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

/**
 * Tiap item di dalam container bisa pakai ini
 */
export const staggerItem = fadeIn;
