import { User } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Meet Our Team</h2>
          <p className="text-lg text-slate-600">
            Tim pengurus SCIT yang berdedikasi untuk memajukan komunitas dan mengembangkan potensi setiap anggota
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-700/30" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="text-blue-600 font-medium">{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">{member.description}</p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
