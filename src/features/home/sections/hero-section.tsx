import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PARTNERS } from "@/constants/partners";

import { Button } from "@/components/ui/button";
import { PartnerCard } from "@/features/home/components/partner-card";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background tint */}
      <div className="absolute inset-0 bg-primary/5" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto safe-container">
          {/* Main headline */}
          <div className="space-y-6 mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight safe-text">
              Berinovasi untuk Masa Depan
              <span className="block text-primary">Teknologi</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed safe-text">
              Kami adalah komunitas mahasiswa yang berdedikasi untuk mengembangkan inovasi teknologi dan menciptakan solusi digital yang berdampak.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="text-lg px-8"
              asChild
            >
              <Link href="/about">
                Tentang Kami
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8"
              asChild
            >
              <Link href="/projects">Jelajahi Proyek</Link>
            </Button>
          </div>

          {/* Partners & Collaborators */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg md:text-xl text-muted-foreground text-center mb-8 font-medium">Telah dipercaya oleh</h3>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {PARTNERS.map((partner) => (
                <div
                  key={partner.name}
                  className="flex justify-center items-center"
                >
                  <PartnerCard
                    partner={partner}
                    showBadge={true}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
