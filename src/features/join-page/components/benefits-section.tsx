"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Users, Lightbulb, Target, CheckCircle } from "lucide-react";

const membershipBenefits = [
  {
    icon: Code2,
    title: "Skill Development",
    description: "Access to comprehensive training programs in web development, mobile apps, AI/ML, and more",
    details: ["Weekly coding workshops", "Mentorship from seniors", "Industry-standard projects", "Certification programs"],
  },
  {
    icon: Users,
    title: "Professional Network",
    description: "Connect with like-minded peers, industry professionals, and alumni in tech companies",
    details: ["Peer learning groups", "Alumni network access", "Industry connections", "Collaboration opportunities"],
  },
  {
    icon: Lightbulb,
    title: "Innovation Projects",
    description: "Work on real-world projects that solve actual problems and make a difference",
    details: ["Research opportunities", "Startup incubation", "Open source contributions", "Competition participation"],
  },
  {
    icon: Target,
    title: "Career Support",
    description: "Get guidance for internships, job placements, and career advancement in tech",
    details: ["CV/portfolio review", "Interview preparation", "Job referrals", "Career counseling"],
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Why Join SCIT?</h2>
          <p className="text-lg text-muted-foreground">
            Dapatkan akses ke berbagai benefit eksklusif yang akan mempercepat pengembangan karir teknologi Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {membershipBenefits.map((benefit, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
                <CardDescription className="text-base">{benefit.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {benefit.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
