import Image from "next/image";
import * as motion from "framer-motion/client";

import { CORE_TEAM } from "@/constants/core-team";
import { animationConfig, fadeIn } from "@/utils/animations";

const CardTeamMember = ({ name, role, angkatan, imageUrl }: { name: string; role: string; angkatan: string; imageUrl: string }) => {
  return (
    <div className="w-full flex flex-col items-center px-2 mb-8">
      <div className="relative size-[120px] sm:size-[150px] md:size-[180px] lg:size-[200px] aspect-square rounded-full overflow-hidden">
        <Image
          fill
          alt="profile"
          src={imageUrl}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-center mt-3 sm:mt-4 lg:mt-5 text-center">
        <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold leading-tight">{name}</h1>
        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground">{role}</p>
        <p className="text-xs mt-1 text-muted-foreground">{angkatan}</p>
      </div>
    </div>
  );
};

const SpecialCardTeamMember = ({ name, role, angkatan, imageUrl }: { name: string; role: string; angkatan: string; imageUrl: string }) => {
  return (
    <div className="w-full flex flex-col items-center px-4 mb-8">
      <div className="relative size-[150px] sm:size-[180px] md:size-[220px] lg:size-[250px] aspect-square rounded-full overflow-hidden">
        <Image
          fill
          alt="profile"
          src={imageUrl}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-center mt-4 sm:mt-5 lg:mt-6 text-center">
        <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold leading-tight">{name}</h1>
        <p className="mt-2 text-xs sm:text-sm md:text-base text-muted-foreground">{role}</p>
        <p className="text-xs sm:text-sm mt-1 text-muted-foreground">{angkatan}</p>
      </div>
    </div>
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">Meet Our Team</h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            Tim pengurus SCIT yang berdedikasi untuk memajukan komunitas dan mengembangkan potensi setiap anggota
          </p>
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
