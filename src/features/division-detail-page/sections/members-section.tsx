import * as motion from "framer-motion/client";
import { DivisionData } from "@/constants/division-members";
import { CoreMemberCard, DivisionMemberCard } from "../components/division-member-card";
import { animationConfig, fadeIn } from "@/utils/animations";

interface MembersSectionProps {
  division: DivisionData;
}

export const MembersSection = ({ division }: MembersSectionProps) => {
  const coreMembers = division.members.filter((m) => m.isCoreMember);
  const regularMembers = division.members.filter((m) => !m.isCoreMember);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Core Team */}
        {coreMembers.length > 0 && (
          <motion.div
            variants={fadeIn}
            {...animationConfig}
            className="mb-12 sm:mb-16"
          >
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Core Team</h2>
              <p className="text-sm sm:text-base text-muted-foreground">Tim inti yang memimpin dan mengkoordinasi divisi</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {coreMembers.map((member, index) => (
                <CoreMemberCard
                  key={index}
                  member={member}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* All Members */}
        {regularMembers.length > 0 && (
          <motion.div
            variants={fadeIn}
            {...animationConfig}
            className="mt-12 sm:mt-16"
          >
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Our Members</h2>
              <p className="text-sm sm:text-base text-muted-foreground">Anggota-anggota yang aktif berkontribusi di divisi</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {regularMembers.map((member, index) => (
                <DivisionMemberCard
                  key={index}
                  member={member}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
