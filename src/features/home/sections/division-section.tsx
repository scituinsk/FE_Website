import { SCIT_DIVISIONS } from "@/constants/division";
import { animationConfig, fadeIn } from "@/utils/animations";
import * as motion from "framer-motion/client";

export const DivisionSection = () => {
  return (
    <section className="px-4">
      <motion.div
        variants={fadeIn}
        className="mt-20"
        {...animationConfig}
      >
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Divisi</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Setiap divisi berperan penting dalam mendukung pengembangan anggota dan keberlangsungan organisasi.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 min-[1303px]:grid-cols-3 gap-6">
          {SCIT_DIVISIONS.map((division) => (
            // <Link
            //   key={division.link}
            //   href={division.link}
            // >
            <div
              key={division.link}
              className="relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Background Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={division.bannerContainer}
                alt={division.name}
                className="w-full h-full object-cover transition-transform duration-500"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/90 via-cyan-800/40 to-cyan-600/20 group-hover:from-cyan-900/95 group-hover:via-cyan-800/50 group-hover:to-cyan-600/30 transition-all duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <h1 className="text-white text-2xl sm:text-3xl font-bold text-center leading-tight drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300">
                  {division.name}
                </h1>
              </div>

              {/* Bottom Accent Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 origin-left scale-x-0  transition-transform duration-500" />
            </div>
            // </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
