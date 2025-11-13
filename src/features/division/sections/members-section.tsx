import * as motion from "framer-motion/client";
import { DivisionData } from "@/constants/division-members";
import { DivisionMemberCard } from "../components/division-member-card";
import { animationConfig, fadeIn } from "@/utils/animations";

interface MembersSectionProps {
  division: DivisionData;
}

export const MembersSection = ({ division }: MembersSectionProps) => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {division.members.length > 0 && (
          <motion.div
            variants={fadeIn}
            {...animationConfig}
            className="mt-12 sm:mt-16"
          >
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Our Members</h2>
              <p className="text-sm sm:text-base text-muted-foreground">Anggota-anggota yang aktif berkontribusi di divisi</p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {division.members.map((member, index) => (
                <div
                  key={index}
                  className="w-[calc(50%-0.375rem)] sm:w-[calc(33.333%-0.667rem)] md:w-[calc(25%-0.75rem)] lg:w-[calc(16.666%-0.833rem)]"
                >
                  <DivisionMemberCard
                    key={index}
                    member={member}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
