import * as motion from "framer-motion/client";
import { animationConfig, fadeIn } from "@/utils/animations";

export const HeroSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-surface to-background">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn}
          {...animationConfig}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Galeri SCIT</h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            Dokumentasi kegiatan, acara, dan momen berharga bersama Student Center of Information Technology
          </p>
        </motion.div>
      </div>
    </section>
  );
};
