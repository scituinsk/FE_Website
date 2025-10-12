import React from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Users, Calendar, Star, Filter, Search } from "lucide-react";

export const metadata = {
  title: "Our Projects - SCIT UIN Suka",
  description: "Explore the innovative projects and solutions developed by SCIT UIN Sunan Kalijaga members.",
};

const ProjectsPage = () => {
  const allProjects = [
    {
      title: "Smart Campus System",
      description:
        "Sistem informasi terintegrasi untuk mengelola aktivitas kampus dengan fitur presensi digital, manajemen kelas, dan dashboard analytics real-time.",
      fullDescription:
        "Platform komprehensif yang mendigitalisasi berbagai aspek kehidupan kampus, mulai dari sistem presensi otomatis menggunakan QR code, manajemen jadwal kelas, hingga dashboard analytics untuk monitoring aktivitas akademik.",
      image: "/projects/smart-campus.jpg",
      tech: ["React", "Node.js", "PostgreSQL", "IoT", "Firebase"],
      category: "Web Application",
      status: "Production",
      teamSize: 8,
      duration: "6 months",
      github: "https://github.com/scit-uinsuka/smart-campus",
      demo: "https://smartcampus.uin-suka.ac.id",
      features: ["Digital Attendance", "Class Management", "Analytics Dashboard", "Real-time Notifications"],
      testimonial: "This system has revolutionized how we manage campus activities - Dean of Faculty",
    },
    {
      title: "Mental Health Tracker",
      description:
        "Aplikasi mobile untuk monitoring kesehatan mental mahasiswa dengan fitur mood tracking, konseling online, dan community support berbasis AI.",
      fullDescription:
        "Aplikasi mobile yang membantu mahasiswa memantau dan meningkatkan kesehatan mental mereka melalui fitur-fitur seperti mood tracking harian, sesi konseling online dengan psikolog kampus, dan komunitas support yang aman.",
      image: "/projects/mental-health.jpg",
      tech: ["React Native", "Firebase", "Python", "TensorFlow", "FastAPI"],
      category: "Mobile Application",
      status: "Beta Testing",
      teamSize: 6,
      duration: "4 months",
      github: "https://github.com/scit-uinsuka/mental-health-tracker",
      demo: "https://mentalhealth.scit-uinsuka.id",
      features: ["Mood Tracking", "Online Counseling", "AI Recommendations", "Community Support"],
      testimonial: "A much-needed solution for student mental health - University Counselor",
    },
    {
      title: "Islamic Finance API",
      description:
        "RESTful API untuk sistem keuangan syariah dengan fitur perhitungan zakat, investasi halal, compliance monitoring, dan integrasi blockchain.",
      fullDescription:
        "API komprehensif yang menyediakan layanan keuangan syariah digital, termasuk kalkulasi zakat otomatis, screening investasi halal, monitoring kepatuhan syariah, dan smart contracts untuk transaksi yang transparan.",
      image: "/projects/islamic-finance.jpg",
      tech: ["Node.js", "Express", "MongoDB", "Docker", "Blockchain"],
      category: "Backend API",
      status: "Development",
      teamSize: 5,
      duration: "8 months",
      github: "https://github.com/scit-uinsuka/islamic-finance-api",
      demo: "https://api.islamicfinance.id",
      features: ["Zakat Calculator", "Halal Investment Screening", "Compliance Monitoring", "Blockchain Integration"],
      testimonial: "Innovative approach to Islamic finance technology - Sharia Board Member",
    },
    {
      title: "EcoTrack - Environmental Monitor",
      description:
        "IoT-based environmental monitoring system untuk kampus hijau dengan sensor kualitas udara, monitoring energi, dan dashboard sustainability.",
      fullDescription:
        "Sistem monitoring lingkungan berbasis IoT yang mengumpulkan data kualitas udara, konsumsi energi, dan faktor lingkungan lainnya untuk mendukung inisiatif kampus hijau dan berkelanjutan.",
      image: "/projects/ecotrack.jpg",
      tech: ["Arduino", "Raspberry Pi", "React", "InfluxDB", "Grafana"],
      category: "IoT Solution",
      status: "Production",
      teamSize: 7,
      duration: "5 months",
      github: "https://github.com/scit-uinsuka/ecotrack",
      demo: "https://ecotrack.uin-suka.ac.id",
      features: ["Air Quality Monitoring", "Energy Tracking", "Sustainability Dashboard", "Alert System"],
      testimonial: "Great contribution to our green campus initiative - Environmental Committee",
    },
    {
      title: "Al-Quran Digital Learning",
      description:
        "Platform pembelajaran Al-Quran digital dengan fitur tajwid recognition, hafalan tracking, dan gamifikasi untuk meningkatkan engagement.",
      fullDescription:
        "Platform inovatif untuk pembelajaran Al-Quran yang menggunakan teknologi AI untuk mendeteksi tajwid, membantu hafalan dengan sistem tracking progress, dan gamifikasi untuk membuat pembelajaran lebih menarik.",
      image: "/projects/quran-learning.jpg",
      tech: ["Flutter", "Python", "TensorFlow", "Firebase", "Audio Processing"],
      category: "Educational App",
      status: "Beta Testing",
      teamSize: 6,
      duration: "7 months",
      github: "https://github.com/scit-uinsuka/quran-learning",
      demo: "https://quranlearn.uin-suka.ac.id",
      features: ["Tajwid Recognition", "Progress Tracking", "Gamification", "Offline Mode"],
      testimonial: "Excellent tool for modern Quranic education - Islamic Studies Faculty",
    },
    {
      title: "Campus Marketplace",
      description:
        "Platform e-commerce khusus komunitas kampus untuk jual-beli barang bekas, jasa mahasiswa, dan UMKM sekitar kampus dengan system rating terpercaya.",
      fullDescription:
        "Marketplace digital yang menghubungkan komunitas kampus untuk transaksi barang bekas, jasa mahasiswa seperti les privat atau desain, serta mendukung UMKM di sekitar kampus dengan sistem rating dan review yang terpercaya.",
      image: "/projects/marketplace.jpg",
      tech: ["Next.js", "PostgreSQL", "Stripe", "Redis", "Docker"],
      category: "E-commerce",
      status: "Production",
      teamSize: 9,
      duration: "8 months",
      github: "https://github.com/scit-uinsuka/campus-marketplace",
      demo: "https://marketplace.uin-suka.ac.id",
      features: ["Secure Payments", "Rating System", "UMKM Support", "Student Services"],
      testimonial: "Boosts local economy and student entrepreneurship - Student Affairs",
    },
    {
      title: "Study Buddy Matcher",
      description:
        "Aplikasi AI-powered untuk mencocokkan study partner berdasarkan mata kuliah, gaya belajar, jadwal, dan preferensi lokasi dengan algoritma machine learning.",
      fullDescription:
        "Aplikasi yang menggunakan machine learning untuk mencocokkan mahasiswa dengan study partner yang kompatibel berdasarkan berbagai faktor seperti mata kuliah, gaya belajar, availability, dan lokasi preferensi.",
      image: "/projects/study-buddy.jpg",
      tech: ["React Native", "Python", "Scikit-learn", "MongoDB", "Socket.io"],
      category: "Social App",
      status: "Development",
      teamSize: 5,
      duration: "4 months",
      github: "https://github.com/scit-uinsuka/study-buddy",
      demo: "https://studybuddy.scit-uinsuka.id",
      features: ["AI Matching", "Schedule Sync", "Study Rooms Booking", "Progress Tracking"],
      testimonial: "Helps students connect and learn together effectively - Academic Advisor",
    },
    {
      title: "Islamic Calendar & Prayer Times",
      description:
        "Aplikasi kalender Islam lengkap dengan waktu sholat akurat, pengingat dzikir, tracking ibadah, dan fitur komunitas untuk kegiatan keagamaan.",
      fullDescription:
        "Aplikasi komprehensif untuk kebutuhan ibadah sehari-hari umat Muslim, termasuk kalender Hijriah, waktu sholat yang akurat, pengingat dzikir, tracking amalan harian, dan platform komunitas untuk kegiatan keagamaan.",
      image: "/projects/islamic-calendar.jpg",
      tech: ["Flutter", "Dart", "SQLite", "Firebase", "GPS"],
      category: "Religious App",
      status: "Production",
      teamSize: 4,
      duration: "3 months",
      github: "https://github.com/scit-uinsuka/islamic-calendar",
      demo: "https://play.google.com/store/apps/islamic-calendar-uinsuka",
      features: ["Accurate Prayer Times", "Hijri Calendar", "Dhikr Reminders", "Worship Tracking"],
      testimonial: "Essential app for daily Islamic practices - Islamic Center",
    },
  ];

  const categories = [
    "All Projects",
    "Web Application",
    "Mobile Application",
    "Backend API",
    "IoT Solution",
    "Educational App",
    "E-commerce",
    "Social App",
    "Religious App",
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All Projects");
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory = selectedCategory === "All Projects" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">Our Projects Portfolio</h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-8">
              Showcase proyek-proyek inovatif yang telah dikembangkan oleh tim SCIT UIN Suka sebagai kontribusi nyata dalam dunia teknologi dan
              masyarakat.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{allProjects.length}+</div>
                <div className="text-slate-600">Total Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{allProjects.filter((p) => p.status === "Production").length}</div>
                <div className="text-slate-600">Live Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                <div className="text-slate-600">Contributors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                <div className="text-slate-600">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search */}
            <div className="mb-8">
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search projects, technologies..."
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-5 w-5 text-slate-600" />
              <span className="text-sm font-medium text-slate-600">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">No projects found</h3>
                <p className="text-slate-600">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Project image placeholder */}
                    <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-700/30" />
                      <div className="absolute top-4 left-4">
                        <span className="px-2 py-1 bg-white text-slate-700 text-xs font-medium rounded-lg">{project.category}</span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            project.status === "Production"
                              ? "bg-green-100 text-green-700"
                              : project.status === "Beta Testing"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{project.title}</CardTitle>
                      <CardDescription className="leading-relaxed">{project.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 4).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-lg">+{project.tech.length - 4} more</span>
                        )}
                      </div>

                      {/* Project stats */}
                      <div className="grid grid-cols-2 gap-4 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          {project.teamSize} members
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {project.duration}
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="text-sm font-medium text-slate-900 mb-2">Key Features:</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          {project.features.slice(0, 3).map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center gap-2"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action buttons */}
                      <div className="flex gap-2 pt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          asChild
                        >
                          <Link
                            href={project.github}
                            target="_blank"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Link>
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1"
                          asChild
                        >
                          <Link
                            href={project.demo}
                            target="_blank"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </Link>
                        </Button>
                      </div>

                      {/* Testimonial */}
                      {project.testimonial && (
                        <div className="border-t pt-4">
                          <blockquote className="text-sm italic text-slate-600">"{project.testimonial}"</blockquote>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              <Star className="h-4 w-4" />
              Join Our Development Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Have an Innovative Project Idea?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Bergabunglah dengan SCIT dan wujudkan ide teknologi Anda menjadi solusi nyata yang berdampak bagi masyarakat. Tim kami siap mendukung
              perjalanan development Anda dari ide hingga implementasi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
              >
                <Link href="/join">Join Development Team</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
              >
                <Link href="/contact">Propose a Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
