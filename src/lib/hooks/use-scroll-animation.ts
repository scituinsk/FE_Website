"use client";

import { useEffect, useRef } from "react";
import { useInView, useAnimation, Variants } from "framer-motion";

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: threshold,
    once: true,
  });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return {
    ref,
    controls: mainControls,
    isInView,
  };
};

// // Animation variants
// export const fadeInUp: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 50,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: [0.6, -0.05, 0.01, 0.99],
//     },
//   },
// };

// export const fadeInDown: Variants = {
//   hidden: {
//     opacity: 0,
//     y: -50,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: [0.6, -0.05, 0.01, 0.99],
//     },
//   },
// };

// export const fadeInLeft: Variants = {
//   hidden: {
//     opacity: 0,
//     x: -50,
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.6,
//       ease: [0.6, -0.05, 0.01, 0.99],
//     },
//   },
// };

// export const fadeInRight: Variants = {
//   hidden: {
//     opacity: 0,
//     x: 50,
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.6,
//       ease: [0.6, -0.05, 0.01, 0.99],
//     },
//   },
// };

// export const scaleIn: Variants = {
//   hidden: {
//     opacity: 0,
//     scale: 0.8,
//   },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       duration: 0.6,
//       ease: [0.6, -0.05, 0.01, 0.99],
//     },
//   },
// };

// export const staggerContainer: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.1,
//     },
//   },
// };

// export const staggerItem: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 20,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       ease: [0.6, -0.05, 0.01, 0.99],
//     },
//   },
// };

// REVISED SMOOTH ANIMATION VARIANTS

const smoothTransition = {
  duration: 0.8,
  ease: "easeInOut", // Menggunakan easing yang halus
} as const;

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: smoothTransition },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: smoothTransition },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: smoothTransition },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: smoothTransition },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: smoothTransition },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // Jeda antar-item
    },
  },
};

// Stagger item bisa dibuat lebih simpel
export const staggerItem = fadeInUp; // Bisa menggunakan ulang variant yang sudah ada!
