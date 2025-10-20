import { User } from "lucide-react";
import * as motion from "framer-motion/client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { animationConfig, fadeIn, staggerContainer, staggerItem } from "@/utils/animations";

const team = [
  {
    name: "Ahmad Rizki",
    role: "President",
    description: "Leading SCIT with vision and dedication to technology excellence",
    expertise: ["Leadership", "Web Development", "Project Management"],
  },
  {
    name: "Siti Aminah",
    role: "Vice President",
    description: "Supporting organizational growth and member development",
    expertise: ["Mobile Development", "UI/UX Design", "Community Building"],
  },
  {
    name: "Muhammad Fajar",
    role: "Technical Lead",
    description: "Overseeing technical projects and mentoring junior developers",
    expertise: ["Full Stack Development", "DevOps", "Mentoring"],
  },
  {
    name: "Dewi Sartika",
    role: "Program Manager",
    description: "Managing educational programs and workshops",
    expertise: ["Data Science", "Machine Learning", "Education"],
  },
  {
    name: "Arif Budiman",
    role: "External Relations",
    description: "Building partnerships with industry and other communities",
    expertise: ["Business Development", "Networking", "Cybersecurity"],
  },
  {
    name: "Rani Permata",
    role: "Creative Director",
    description: "Leading design initiatives and creative content",
    expertise: ["UI/UX Design", "Graphic Design", "Content Creation"],
  },
];

export const TeamSection = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-16"
          {...animationConfig}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground">
            Tim pengurus SCIT yang berdedikasi untuk memajukan komunitas dan mengembangkan potensi setiap anggota
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch"
          {...animationConfig}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="h-full"
            >
              <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/20 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/30" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{member.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
