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
      const timeout = setTimeout(() => {
        mainControls.start("visible");
      }, 100); // Reduced delay untuk response yang lebih cepat
      return () => clearTimeout(timeout);
    }
  }, [isInView, mainControls]);

  return {
    ref,
    controls: mainControls,
    isInView,
  };
};

// const smoothTransition = {
//   duration: 0.8,
//   ease: "linear", // Linear easing untuk menghindari percepatan
// } as const;

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "linear",
    },
  },
};

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "linear",
    },
  },
};

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "linear",
    },
  },
};

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "linear",
    },
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "linear",
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem = fadeInUp;
