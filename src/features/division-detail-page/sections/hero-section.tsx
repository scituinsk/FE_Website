import * as motion from "framer-motion/client";
import { DivisionData } from "@/constants/division-members";
import { animationConfig, fadeIn } from "@/utils/animations";

interface HeroSectionProps {
  division: DivisionData;
}

export const HeroSection = ({ division }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${division.bannerUrl})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-12 sm:py-16 md:py-20">
        <motion.div
          variants={fadeIn}
          {...animationConfig}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">{division.fullName}</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">{division.description}</p>
        </motion.div>
      </div>
    </section>
  );
};
