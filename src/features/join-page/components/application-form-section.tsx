"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const interests = [
  "Web Development",
  "Mobile Development",
  "UI/UX Design",
  "Data Science",
  "AI/Machine Learning",
  "Cybersecurity",
  "Cloud Computing",
  "DevOps",
  "Game Development",
];

export const ApplicationFormSection = () => {
  return (
    <section
      id="application"
      className="py-24 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Apply Now</h2>
          <p className="text-lg text-muted-foreground">Isi formulir aplikasi di bawah ini untuk bergabung dengan SCIT UIN Sunan Kalijaga</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl mb-2">Membership Application</CardTitle>
              <CardDescription>Please fill out all required fields to complete your application.</CardDescription>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <form className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                      placeholder="+62 812 3456 7890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Student ID (NIM) *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                      placeholder="20220001"
                    />
                  </div>
                </div>

                {/* Academic Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Faculty *</label>
                    <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground">
                      <option value="">Select Faculty</option>
                      <option value="saintek">Sains dan Teknologi</option>
                      <option value="dakwah">Dakwah dan Komunikasi</option>
                      <option value="syariah">Syariah dan Hukum</option>
                      <option value="adab">Adab dan Ilmu Budaya</option>
                      <option value="ushuluddin">Ushuluddin dan Pemikiran Islam</option>
                      <option value="tarbiyah">Ilmu Tarbiyah dan Keguruan</option>
                      <option value="ekonomi">Ekonomi dan Bisnis Islam</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Study Program *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                      placeholder="e.g., Teknik Informatika"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Semester *</label>
                    <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground">
                      <option value="">Select Semester</option>
                      <option value="1">Semester 1</option>
                      <option value="2">Semester 2</option>
                      <option value="3">Semester 3</option>
                      <option value="4">Semester 4</option>
                      <option value="5">Semester 5</option>
                      <option value="6">Semester 6</option>
                      <option value="7">Semester 7</option>
                      <option value="8">Semester 8</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Preferred Track *</label>
                    <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground">
                      <option value="">Select Track</option>
                      <option value="beginner">Beginner Track</option>
                      <option value="intermediate">Intermediate Track</option>
                      <option value="expert">Expert Track</option>
                    </select>
                  </div>
                </div>

                {/* Technical Background */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Programming Experience</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                    placeholder="Tell us about your programming background, languages you know, projects you've worked on, etc."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Why do you want to join SCIT? *</label>
                  <textarea
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                    placeholder="Share your motivations and what you hope to achieve..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Areas of Interest (Select all that apply)</label>
                  <div className="grid md:grid-cols-3 gap-3 mt-3">
                    {interests.map((interest) => (
                      <label
                        key={interest}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          className="rounded"
                        />
                        <span className="text-sm text-muted-foreground">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Agreement */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1"
                  />
                  <span className="text-sm text-muted-foreground">
                    I agree to the SCIT community guidelines and commit to active participation in community activities and learning programs. *
                  </span>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <Button
                    size="lg"
                    type="submit"
                    className="px-12"
                  >
                    Submit Application
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
