"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const membershipTracks = [
  {
    title: "Beginner Track",
    duration: "3-6 months",
    description: "Perfect for those new to programming and technology",
    features: [
      "Programming fundamentals",
      "Basic web development",
      "Introduction to databases",
      "Git and version control",
      "Project-based learning",
      "Peer mentoring",
    ],
    ideal: "Students with little to no programming experience",
  },
  {
    title: "Intermediate Track",
    duration: "6-12 months",
    description: "For members ready to tackle advanced topics and real projects",
    features: [
      "Advanced programming concepts",
      "Full-stack development",
      "Mobile app development",
      "Cloud computing basics",
      "Team project leadership",
      "Industry collaboration",
    ],
    ideal: "Students with basic programming knowledge",
  },
  {
    title: "Expert Track",
    duration: "12+ months",
    description: "Advanced track for experienced members to become tech leaders",
    features: [
      "Specialized expertise areas",
      "Research and innovation",
      "Mentoring junior members",
      "Industry partnerships",
      "Open source contributions",
      "Conference speaking",
    ],
    ideal: "Experienced programmers and tech enthusiasts",
  },
];

export const TracksSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Choose Your Learning Track</h2>
          <p className="text-lg text-muted-foreground">Pilih jalur pembelajaran yang sesuai dengan level dan tujuan karir teknologi Anda</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {membershipTracks.map((track, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              {index === 1 && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <CardHeader className={index === 1 ? "pt-12" : ""}>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl">{track.title}</CardTitle>
                  <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">{track.duration}</span>
                </div>
                <CardDescription className="text-base">{track.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">What You&apos;ll Learn:</h4>
                  <ul className="space-y-2">
                    {track.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-foreground mb-2">Ideal For:</h4>
                  <p className="text-sm text-muted-foreground">{track.ideal}</p>
                </div>

                <Button
                  className="w-full group-hover:bg-primary/90 transition-colors"
                  variant={index === 1 ? "default" : "outline"}
                >
                  Choose This Track
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
