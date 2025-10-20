export const allProjects = [
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

export const categories = [
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

export const PROJECTS = [
  {
    title: "Smart Campus System",
    description:
      "Sistem informasi terintegrasi untuk mengelola aktivitas kampus dengan fitur presensi digital, manajemen kelas, dan dashboard analytics.",
    image: "/projects/smart-campus.jpg",
    tech: ["React", "Node.js", "PostgreSQL", "IoT", "Docker", "TypeScript"],
    demo: "https://smartcampus.uin-suka.ac.id",
    href: "/projects/smart-campus-system",
  },
  {
    title: "Mental Health Tracker",
    description: "Aplikasi mobile untuk monitoring kesehatan mental mahasiswa dengan fitur mood tracking, konseling online, dan community support.",
    image: "/projects/mental-health.jpg",
    tech: ["React Native", "Firebase", "Python", "AI/ML", "Figma", "TypeScript"],
    demo: "https://mentalhealth.scit-uinsuka.id",
    href: "/projects/mental-health-tracker",
  },
  {
    title: "Islamic Finance API",
    description: "RESTful API untuk sistem keuangan syariah dengan fitur perhitungan zakat, investasi halal, dan compliance monitoring.",
    image: "/projects/islamic-finance.jpg",
    tech: ["Node.js", "Express", "MongoDB", "Docker", "JWT", "Stripe API"],
    demo: "https://api.islamicfinance.id",
    href: "/projects/islamic-finance-api",
  },
  {
    title: "EcoTrack - Environmental Monitor",
    description:
      "IoT-based environmental monitoring system untuk kampus hijau dengan sensor kualitas udara, monitoring energi, dan dashboard sustainability.",
    image: "/projects/ecotrack.jpg",
    tech: ["Arduino", "Raspberry Pi", "React", "InfluxDB", "Grafana"],
    demo: "https://ecotrack.uin-suka.ac.id",
    href: "/projects/ecotrack-environmental-monitor",
  },
  {
    title: "Al-Quran Digital Learning",
    description:
      "Platform pembelajaran Al-Quran digital dengan fitur tajwid recognition, hafalan tracking, dan gamifikasi untuk meningkatkan engagement.",
    image: "/projects/quran-learning.jpg",
    tech: ["Flutter", "Python", "TensorFlow", "Firebase", "Audio Processing"],
    demo: "https://quranlearn.uin-suka.ac.id",
    href: "/projects/al-quran-digital-learning",
  },
  {
    title: "Campus Marketplace",
    description:
      "Platform e-commerce khusus komunitas kampus untuk jual-beli barang bekas, jasa mahasiswa, dan UMKM sekitar kampus dengan system rating terpercaya.",
    image: "/projects/marketplace.jpg",
    tech: ["Next.js", "PostgreSQL", "Stripe", "Redis", "Docker"],
    demo: "https://marketplace.uin-suka.ac.id",
    href: "/projects/campus-marketplace",
  },
  {
    title: "Study Buddy Matcher",
    description: "Aplikasi AI-powered untuk mencocokkan study partner berdasarkan mata kuliah, gaya belajar, jadwal, dan preferensi lokasi.",
    image: "/projects/study-buddy.jpg",
    tech: ["React Native", "Python", "Scikit-learn", "MongoDB", "Socket.io"],
    demo: "https://studybuddy.scit-uinsuka.id",
    href: "/projects/study-buddy-matcher",
  },
  {
    title: "Islamic Calendar & Prayer Times",
    description: "Aplikasi kalender Islam lengkap dengan waktu sholat akurat, pengingat dzikir, tracking ibadah, dan fitur komunitas.",
    image: "/projects/islamic-calendar.jpg",
    tech: ["Flutter", "Dart", "SQLite", "Firebase", "GPS"],
    demo: "https://play.google.com/store/apps/islamic-calendar-uinsuka",
    href: "/projects/islamic-calendar-prayer-times",
  },
];

export const PROJECT_CATEGORIES = [
  {
    category: "Web Applications",
    count: 15,
    description: "Full-stack web applications dengan teknologi modern",
  },
  {
    category: "Mobile Apps",
    count: 12,
    description: "Cross-platform mobile applications",
  },
  {
    category: "AI/ML Projects",
    count: 8,
    description: "Machine learning dan artificial intelligence solutions",
  },
  {
    category: "IoT Solutions",
    count: 6,
    description: "Internet of Things dan embedded systems",
  },
  {
    category: "Open Source",
    count: 20,
    description: "Kontribusi ke open source community",
  },
  {
    category: "Research",
    count: 10,
    description: "Penelitian dan pengembangan teknologi",
  },
];
