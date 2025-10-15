"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fungsi untuk memeriksa posisi scroll
  const toggleVisibility = () => {
    // Tampilkan tombol jika sudah scroll lebih dari 300px
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Fungsi untuk scroll ke atas dengan halus
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Ini yang membuat scroll menjadi halus
    });
  };

  useEffect(() => {
    // Tambahkan event listener saat komponen di-mount
    window.addEventListener("scroll", toggleVisibility);

    // Hapus event listener saat komponen di-unmount untuk mencegah memory leak
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="cursor-pointer fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background shadow-lg transition-colors hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          onClick={scrollToTop}
          // Animasi Framer Motion
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          {/* Ikon panah ke atas (SVG) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m5 12 7-7 7 7" />
            <path d="M12 19V5" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
