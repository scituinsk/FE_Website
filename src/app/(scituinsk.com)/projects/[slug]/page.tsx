import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ExternalLink, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ProjectGalleryCarousel } from "@/components/project-gallery-carousel";
import { TestimonialMarquee } from "@/components/testimonial-marquee";

// Mock data - nanti bisa diganti dengan dynamic data dari slug
const projectData = {
  title: "Smart Campus System",
  description:
    "Sistem informasi terintegrasi untuk mengelola aktivitas kampus dengan fitur presensi digital, manajemen kelas, dan dashboard analytics real-time.",
  fullDescription:
    "Platform komprehensif yang mendigitalisasi berbagai aspek kehidupan kampus, mulai dari sistem presensi otomatis menggunakan QR code, manajemen jadwal kelas, hingga dashboard analytics untuk monitoring aktivitas akademik. Sistem ini dirancang untuk meningkatkan efisiensi operasional kampus dan memberikan pengalaman yang lebih baik bagi mahasiswa dan dosen.",
  mainImage: "/projects/smart-campus.jpg",
  tech: ["React", "Node.js", "PostgreSQL", "IoT", "Firebase", "Docker"],
  category: "Web Application",
  status: "Production",
  teamSize: 8,
  duration: "6 months",
  github: "https://github.com/scit-uinsuka/smart-campus",
  demo: "https://smartcampus.uin-suka.ac.id",
  features: [
    "Digital Attendance System",
    "Class Management Dashboard",
    "Real-time Analytics",
    "Notification System",
    "QR Code Integration",
    "Mobile Responsive Design",
  ],
  challenges: [
    "Integrasi dengan sistem legacy yang sudah ada",
    "Handling real-time data untuk ribuan pengguna",
    "Optimasi performa database",
    "Implementasi security best practices",
  ],
  results: [
    "95% adopsi oleh mahasiswa dalam 3 bulan",
    "Pengurangan waktu absensi hingga 80%",
    "Peningkatan efisiensi administrasi 60%",
    "Zero downtime selama 6 bulan operasional",
  ],
  supportingImages: [
    {
      url: "https://images.unsplash.com/photo-1473042904451-00171c69419d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNtYXJ0JTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      alt: "Dashboard Overview",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1661919068698-40e7b78f196a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNtYXJ0JTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      alt: "Attendance System",
    },
    {
      url: "https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNtYXJ0JTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      alt: "Analytics Dashboard",
    },
    {
      url: "https://images.unsplash.com/photo-1610956667016-15debe929a3f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNtYXJ0JTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      alt: "Mobile Interface",
    },
  ],
  testimonials: [
    {
      name: "Dr. Ahmad Fauzi",
      role: "Dean of Faculty",
      message:
        "This system has revolutionized how we manage campus activities and student attendance. The implementation is seamless and the impact on our daily operations has been tremendous. I highly recommend this solution to other educational institutions looking to modernize their campus management systems.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad",
    },
    {
      name: "Prof. Siti Nurhaliza",
      role: "Head of IT Department",
      message:
        "Excellent implementation of modern technology for educational purposes. The team showed great expertise in integrating various systems and ensuring smooth deployment. The analytics dashboard provides valuable insights that help us make better decisions.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Siti",
    },
    {
      name: "Muhammad Rizki",
      role: "Student Representative",
      message:
        "Very user-friendly and makes our daily activities much more efficient. As a student, I appreciate how easy it is to use and how it saves us time every day.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rizki",
    },
    {
      name: "Dr. Fatimah Zahra",
      role: "Academic Supervisor",
      message:
        "The analytics feature helps us make better data-driven decisions. We can now track student attendance patterns and academic performance more effectively.",
      rating: 4,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatimah",
    },
    {
      name: "Ahmad Hidayat",
      role: "System Administrator",
      message:
        "Great system with excellent support. The backend is well-structured and easy to maintain. The documentation is comprehensive and the development team is very responsive to our needs.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad",
    },
    {
      name: "Dewi Sartika",
      role: "Lecturer",
      message:
        "Makes classroom management so much easier. I can track student attendance in real-time and focus more on teaching rather than administrative tasks.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dewi",
    },
  ],
};

const ProjectDetailPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="border-b border-border bg-card">
        <div className="container py-8">
          <Link href="/projects">
            <Button
              variant="outline"
              size="sm"
              className="mb-6"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="space-y-3">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">{projectData.title}</h1>
              <p className="text-lg text-muted-foreground max-w-3xl">{projectData.description}</p>
            </div>

            <div className="flex gap-3 shrink-0">
              {projectData.demo && (
                <Link
                  href={projectData.demo}
                  target="_blank"
                >
                  <Button>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{projectData.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Launched 2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - 2 Column Layout */}
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content (2/3) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main Thumbnail */}
            <Card className="overflow-hidden">
              <div className="relative w-full aspect-video">
                <Image
                  src={
                    "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBjaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
                  }
                  alt={projectData.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </Card>

            {/* Description */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">About Project</h2>
                <p className="text-muted-foreground leading-relaxed">{projectData.fullDescription}</p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Key Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {projectData.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="text-primary mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Challenges & Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground">Challenges</h3>
                  <ul className="space-y-2">
                    {projectData.challenges.map((challenge, index) => (
                      <li
                        key={index}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-0.5">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground">Results</h3>
                  <ul className="space-y-2">
                    {projectData.results.map((result, index) => (
                      <li
                        key={index}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-green-500 mt-0.5">→</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Supporting Images Carousel */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Gallery</h2>
                <ProjectGalleryCarousel images={projectData.supportingImages} />
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar (1/3) */}
          <div className="space-y-6">
            {/* Tech Stack */}
            <div className="sticky top-20">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {projectData.tech.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <Card className="bg-primary text-primary-foreground mt-5">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Interested?</h3>
                  <p className="text-sm opacity-90">Learn more about our projects or collaborate with us on innovative solutions.</p>
                  <Button
                    variant="secondary"
                    className="w-full"
                    asChild
                  >
                    <Link href="/#contact">Contact Us</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Marquee Section */}
      <div className="bg-muted/30 py-16 overflow-hidden">
        <div className="container mb-8">
          <h2 className="text-3xl font-bold text-center text-foreground">What Client Say</h2>
        </div>

        <TestimonialMarquee testimonials={projectData.testimonials} />
      </div>
    </div>
  );
};

export default ProjectDetailPage;
