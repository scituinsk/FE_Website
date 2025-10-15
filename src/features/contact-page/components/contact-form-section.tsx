"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Clock, Users } from "lucide-react";
import Link from "next/link";
import { SocialMediaSection } from "./social-media-section";

const officeHours = [
  { day: "Monday", hours: "09:00 - 17:00" },
  { day: "Tuesday", hours: "09:00 - 17:00" },
  { day: "Wednesday", hours: "09:00 - 17:00" },
  { day: "Thursday", hours: "09:00 - 17:00" },
  { day: "Friday", hours: "09:00 - 16:00" },
  { day: "Saturday", hours: "09:00 - 12:00" },
  { day: "Sunday", hours: "Closed" },
];

const teams = [
  {
    name: "General Inquiries",
    email: "info@scit-uinsuka.id",
    description: "For general questions about SCIT",
  },
  {
    name: "Membership",
    email: "join@scit-uinsuka.id",
    description: "For membership and recruitment",
  },
  {
    name: "Partnerships",
    email: "partnership@scit-uinsuka.id",
    description: "For business partnerships and collaborations",
  },
  {
    name: "Events",
    email: "events@scit-uinsuka.id",
    description: "For event inquiries and sponsorships",
  },
  {
    name: "Technical",
    email: "tech@scit-uinsuka.id",
    description: "For technical support and projects",
  },
  {
    name: "Media",
    email: "media@scit-uinsuka.id",
    description: "For press and media inquiries",
  },
];

export const ContactFormSection = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl mb-2">Send us a Message</CardTitle>
                <CardDescription>Fill out the form below and we&apos;ll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">First Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Last Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                        placeholder="+62 812 3456 7890"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Subject *</label>
                    <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground">
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="membership">Membership Question</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="event">Event Collaboration</option>
                      <option value="technical">Technical Support</option>
                      <option value="media">Media Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Organization/Company</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                      placeholder="Your organization or company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                    <textarea
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      required
                      className="mt-1"
                    />
                    <span className="text-sm text-muted-foreground">
                      I agree to receive communications from SCIT UIN Suka and understand that I can unsubscribe at any time. *
                    </span>
                  </div>

                  <Button
                    size="lg"
                    type="submit"
                    className="w-full"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-8">
            {/* Office Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="text-muted-foreground">{schedule.day}</span>
                    <span className={`font-medium ${schedule.hours === "Closed" ? "text-red-500" : "text-foreground"}`}>{schedule.hours}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Team Contacts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Contact Teams
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {teams.map((team, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-foreground mb-1">{team.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{team.description}</p>
                    <Link
                      href={`mailto:${team.email}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {team.email}
                    </Link>
                  </div>
                ))}
              </CardContent>
            </Card>
            {/* Social Media */}
            <SocialMediaSection />
          </div>
        </div>
      </div>
    </section>
  );
};
