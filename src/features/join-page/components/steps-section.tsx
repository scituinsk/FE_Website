"use client";

import { Card } from "@/components/ui/card";

const joinSteps = [
  {
    step: 1,
    title: "Submit Application",
    description: "Fill out our online application form with your background and interests",
  },
  {
    step: 2,
    title: "Attend Info Session",
    description: "Join our weekly info session to learn more about SCIT and meet the team",
  },
  {
    step: 3,
    title: "Complete Assessment",
    description: "Simple skills assessment to help us place you in the right track",
  },
  {
    step: 4,
    title: "Welcome & Orientation",
    description: "Attend orientation session and receive your welcome package",
  },
];

export const StepsSection = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">How to Join</h2>
          <p className="text-lg text-muted-foreground">
            Proses bergabung dengan SCIT sangat mudah dan straightforward. Ikuti 4 langkah sederhana ini:
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {joinSteps.map((step, index) => (
              <Card
                key={index}
                className="text-center p-6 relative group hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary-foreground text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>

                {/* Connection line to next step */}
                {index < joinSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 transform -translate-y-1/2" />
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
