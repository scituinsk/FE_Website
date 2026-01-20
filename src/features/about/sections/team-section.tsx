import Image from "next/image";
import * as motion from "framer-motion/client";

import { CORE_TEAM } from "@/constants/core-team";
import { animationConfig, fadeIn } from "@/utils/animations";
import { Card } from "@/components/ui/card";

const CardTeamMember = ({ name, role, angkatan, imageUrl }: { name: string; role: string; angkatan: string; imageUrl: string }) => {
  return (
    <Card className="w-full rounded-lg border border-border bg-card shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
      <div className="flex flex-col items-center space-y-4">
        {/* Image */}
        <div className="relative size-24 aspect-square rounded-full overflow-hidden ring-2 ring-border">
          <Image
            fill
            alt={name}
            src={imageUrl}
            className="object-cover"
          />
        </div>

        {/* Nama - Paling menonjol */}
        <h3 className="text-xl font-semibold text-foreground leading-tight text-center">{name}</h3>

        {/* Jabatan - Subtitle */}
        <p className="text-base font-medium text-primary text-center">{role}</p>

        {/* Informasi Akademik - Lebih kecil */}
        <div className="w-full space-y-1.5 pt-3 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground/80">Program Studi:</span> Informatics
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground/80">Angkatan:</span> {angkatan}
          </p>
        </div>
      </div>
    </Card>
  );
};

const SpecialCardTeamMember = ({ name, role, angkatan, imageUrl }: { name: string; role: string; angkatan: string; imageUrl: string }) => {
  return (
    <Card className="w-full rounded-lg border border-border bg-card shadow-sm hover:shadow-md transition-shadow duration-200 p-8">
      <div className="flex flex-col items-center space-y-5">
        {/* Image - Lebih besar untuk leadership */}
        <div className="relative size-32 aspect-square rounded-full overflow-hidden ring-2 ring-primary/20">
          <Image
            fill
            alt={name}
            src={imageUrl}
            className="object-cover"
          />
        </div>

        {/* Nama - Paling menonjol untuk leadership */}
        <h3 className="text-2xl font-bold text-foreground leading-tight text-center">{name}</h3>

        {/* Jabatan - Subtitle */}
        <p className="text-lg font-semibold text-primary text-center">{role}</p>

        {/* Informasi Akademik - Lebih kecil */}
        <div className="w-full space-y-2 pt-4 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground/80">Program Studi:</span> Informatics
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground/80">Angkatan:</span> {angkatan}
          </p>
        </div>
      </div>
    </Card>
  );
};

export const TeamSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-surface">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16"
          {...animationConfig}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">Mari berkenalan dengan Tim Pengurus Kami</h2>
        </motion.div>

        <div className="space-y-12 sm:space-y-14 md:space-y-16">
          {/* Leadership Section - Always 2 columns but responsive sizes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 justify-items-center">
            {CORE_TEAM[0].map((member, index) => (
              <SpecialCardTeamMember
                key={index}
                name={member.name}
                role={member.role}
                angkatan={member.angkatan}
                imageUrl={member.imageUrl}
              />
            ))}
          </div>

          {/* Other sections - Responsive grid */}
          {CORE_TEAM.slice(1).map((teamGroup, groupIndex) => (
            <div
              key={groupIndex}
              className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-items-center"
            >
              {teamGroup.map((member, index) => (
                <CardTeamMember
                  key={index}
                  name={member.name}
                  role={member.role}
                  angkatan={member.angkatan}
                  imageUrl={member.imageUrl}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
