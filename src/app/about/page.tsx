import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Eye, Heart, Award, Calendar, MapPin, Mail, User } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About Us - SCIT UIN Suka",
  description: "Learn more about SCIT UIN Sunan Kalijaga, our mission, vision, and the team behind the community.",
};

const AboutPage = () => {
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

  const milestones = [
    {
      year: "2020",
      title: "Foundation",
      description: "SCIT UIN Suka was founded by passionate CS students",
    },
    {
      year: "2021",
      title: "First Major Project",
      description: "Launched our first campus-wide digital solution",
    },
    {
      year: "2022",
      title: "Community Growth",
      description: "Reached 100+ active members and expanded programs",
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Won national competition and established industry partnerships",
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description: "Became the leading tech community in UIN Suka",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">About SCIT UIN Suka</h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
              Student Community of Information Technology UIN Sunan Kalijaga adalah organisasi mahasiswa yang berdedikasi untuk mengembangkan
              ekosistem teknologi informasi di kampus dan berkontribusi bagi masyarakat.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg leading-relaxed text-slate-700">
                  Menjadi komunitas teknologi informasi terdepan yang mengintegrasikan nilai-nilai Islam dalam pengembangan inovasi teknologi untuk
                  kemajuan umat dan bangsa.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-slate-700">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Mengembangkan kompetensi teknologi informasi mahasiswa</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Memfasilitasi penelitian dan inovasi teknologi</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Membangun jejaring komunitas teknologi</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Mengintegrasikan nilai-nilai Islam dalam teknologi</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline/Milestones */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Journey</h2>
            <p className="text-lg text-slate-600">
              Perjalanan SCIT UIN Suka dari awal terbentuk hingga menjadi komunitas teknologi terdepan di kampus
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-blue-200"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

                    {/* Content */}
                    <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                      <Card className="p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-2xl font-bold text-blue-600">{milestone.year}</span>
                          <h3 className="text-xl font-semibold text-slate-900">{milestone.title}</h3>
                        </div>
                        <p className="text-slate-600">{milestone.description}</p>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Core Values</h2>
            <p className="text-lg text-slate-600">Nilai-nilai fundamental yang menjadi landasan setiap aktivitas dan pengambilan keputusan di SCIT</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl mb-4">Collaboration</CardTitle>
              <CardDescription>Bekerja sama dalam tim untuk mencapai tujuan bersama</CardDescription>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl mb-4">Excellence</CardTitle>
              <CardDescription>Selalu berusaha memberikan yang terbaik dalam setiap karya</CardDescription>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl mb-4">Integrity</CardTitle>
              <CardDescription>Memegang teguh nilai-nilai moral dan etika dalam berkarya</CardDescription>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl mb-4">Innovation</CardTitle>
              <CardDescription>Menciptakan solusi kreatif untuk tantangan masa depan</CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Get in Touch</h2>
            <p className="text-lg text-slate-600">
              Ingin tahu lebih lanjut tentang SCIT atau tertarik bergabung? Jangan ragu untuk menghubungi kami!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl mb-4">Visit Us</CardTitle>
              <CardDescription>
                Fakultas Sains dan Teknologi
                <br />
                UIN Sunan Kalijaga
                <br />
                Jl. Marsda Adisucipto No 1<br />
                Yogyakarta 55281
              </CardDescription>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl mb-4">Email Us</CardTitle>
              <CardDescription>
                scit@uin-suka.ac.id
                <br />
                info@scit-uinsuka.id
                <br />
                partnership@scit-uinsuka.id
              </CardDescription>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl mb-4">Join Events</CardTitle>
              <CardDescription>
                Weekly meetups every Friday
                <br />
                Monthly workshops
                <br />
                Annual tech conference
                <br />
                Open for everyone!
              </CardDescription>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              asChild
            >
              <Link href="/join">Join SCIT Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
