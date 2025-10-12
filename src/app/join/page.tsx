import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Code2, Lightbulb, Target, CheckCircle, ArrowRight, Calendar, Clock, MapPin, Mail, Phone, User } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Join SCIT - SCIT UIN Suka",
  description: "Join the Student Community of Information Technology at UIN Sunan Kalijaga and be part of the tech innovation movement.",
};

const JoinPage = () => {
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-white/5"></div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-400/20 rounded-full blur-xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Join SCIT Community</h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
              Bergabunglah dengan komunitas teknologi terdepan di UIN Sunan Kalijaga dan kembangkan potensi teknologi Anda bersama kami!
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">150+</div>
                <div className="text-blue-200">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-blue-200">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">25+</div>
                <div className="text-blue-200">Workshops/Year</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">95%</div>
                <div className="text-blue-200">Job Placement</div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="#application">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Join SCIT?</h2>
            <p className="text-lg text-slate-600">
              Dapatkan akses ke berbagai benefit eksklusif yang akan mempercepat pengembangan karir teknologi Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {membershipBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 p-6"
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription className="text-slate-600">{benefit.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {benefit.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-slate-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tracks */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Choose Your Learning Track</h2>
            <p className="text-lg text-slate-600">Program pembelajaran yang disesuaikan dengan level dan tujuan karir Anda</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {membershipTracks.map((track, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-300 ${index === 1 ? "border-blue-500 border-2 relative" : ""}`}
              >
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{track.title}</CardTitle>
                  <div className="text-blue-600 font-semibold mb-2">{track.duration}</div>
                  <CardDescription>{track.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">What you'll learn:</h4>
                    <ul className="space-y-2">
                      {track.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-slate-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-slate-600 mb-4">
                      <strong>Ideal for:</strong> {track.ideal}
                    </p>
                    <Button
                      className="w-full"
                      variant={index === 1 ? "default" : "outline"}
                      asChild
                    >
                      <Link href="#application">Choose This Track</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">How to Join SCIT</h2>
            <p className="text-lg text-slate-600">Proses pendaftaran yang simple dan straightforward untuk memulai journey Anda</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-blue-200"></div>

              <div className="space-y-12">
                {joinSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    {/* Step number */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.step}
                    </div>

                    {/* Content */}
                    <div className={`w-full md:w-5/12 ml-24 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                      <Card className="p-6 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                        <p className="text-slate-600">{step.description}</p>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section
        id="application"
        className="py-24 bg-slate-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to Start Your Journey?</h2>
              <p className="text-lg text-slate-600">
                Fill out the application form below and take the first step towards becoming a part of SCIT community
              </p>
            </div>

            <Card className="p-8">
              <form className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+62 812 3456 7890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">Student ID (NIM) *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="20220001"
                    />
                  </div>
                </div>

                {/* Academic Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">Faculty *</label>
                    <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
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
                    <label className="block text-sm font-medium text-slate-900 mb-2">Study Program *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., Teknik Informatika"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">Semester *</label>
                    <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
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
                    <label className="block text-sm font-medium text-slate-900 mb-2">Preferred Track *</label>
                    <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Select Track</option>
                      <option value="beginner">Beginner Track</option>
                      <option value="intermediate">Intermediate Track</option>
                      <option value="expert">Expert Track</option>
                    </select>
                  </div>
                </div>

                {/* Technical Background */}
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Programming Experience</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your programming background, languages you know, projects you've worked on, etc."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Why do you want to join SCIT? *</label>
                  <textarea
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Share your motivations and what you hope to achieve..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Areas of Interest (Select all that apply)</label>
                  <div className="grid md:grid-cols-3 gap-3 mt-3">
                    {[
                      "Web Development",
                      "Mobile Development",
                      "UI/UX Design",
                      "Data Science",
                      "AI/Machine Learning",
                      "Cybersecurity",
                      "Cloud Computing",
                      "DevOps",
                      "Game Development",
                    ].map((interest) => (
                      <label
                        key={interest}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          className="rounded"
                        />
                        <span className="text-sm text-slate-700">{interest}</span>
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
                  <span className="text-sm text-slate-600">
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
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Have Questions?</h2>
            <p className="text-lg text-slate-600">Tim kami siap membantu menjawab pertanyaan Anda seputar SCIT dan proses pendaftaran</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl mb-4">Email Us</CardTitle>
              <CardDescription className="mb-4">Send us your questions anytime</CardDescription>
              <Link
                href="mailto:join@scit-uinsuka.id"
                className="text-blue-600 hover:underline"
              >
                join@scit-uinsuka.id
              </Link>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl mb-4">WhatsApp</CardTitle>
              <CardDescription className="mb-4">Chat with our recruitment team</CardDescription>
              <Link
                href="https://wa.me/6281234567890"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                +62 812 3456 7890
              </Link>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl mb-4">Info Session</CardTitle>
              <CardDescription className="mb-4">Join our weekly info session</CardDescription>
              <div className="text-blue-600">Every Friday, 19:00 WIB</div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinPage;
