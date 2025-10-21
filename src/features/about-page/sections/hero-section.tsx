import Link from "next/link";
import * as motion from "framer-motion/client";

import { Button } from "@/components/ui/button";
import { animationConfig, fadeIn, staggerContainer } from "@/utils/animations";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[56vh] md:min-h-[64vh] flex items-center overflow-hidden">
      {/* Background tint */}
      <div className="absolute inset-0 bg-primary/6" />

      {/* Subtle tiled pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              variants={staggerContainer}
              className="space-y-4 md:space-y-6"
              {...animationConfig}
            >
              <motion.h1
                variants={fadeIn}
                className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight"
              >
                Komunitas & Proyek Teknologi
              </motion.h1>

              <motion.p
                variants={fadeIn}
                className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
              >
                Student Community of Information Technology UIN Sunan Kalijaga adalah wadah kolaborasi mahasiswa untuk mengerjakan proyek nyata,
                workshop, dan membangun portofolio teknologi.
              </motion.p>

              <motion.div variants={fadeIn}>
                <Button asChild>
                  <Link href="/projects">Jelajahi Proyek Kami</Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="relative flex justify-center md:justify-end"
            >
              {/* Illustration / image on the right. Replace src with your asset or external URL */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/colaboration-ilustration.png"
                alt="Ilustrasi kolaborasi dan proyek"
                className="w-full max-w-md rounded-2xl shadow-lg object-cover"
              />

              {/* decorative orbs */}
              <div className="absolute -top-6 -right-6 w-14 h-14 bg-primary/18 rounded-full blur-lg" />
              <div className="absolute bottom-[-18px] left-6 w-8 h-8 bg-primary/12 rounded-full blur-md" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating accents */}
      <div className="absolute top-12 left-6 w-14 h-14 bg-primary/18 rounded-full blur-xl" />
      <div className="absolute bottom-12 right-8 w-24 h-24 bg-primary/12 rounded-full blur-xl" />
    </section>
  );
};
