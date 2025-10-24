export interface DivisionMember {
  name: string;
  role: string;
  angkatan: string;
  imageUrl: string;
  isCoreMember?: boolean;
}

export interface DivisionData {
  slug: string;
  name: string;
  fullName: string;
  description: string;
  bannerUrl: string;
  members: DivisionMember[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const DIVISION_DETAILS: DivisionData[] = [
  {
    slug: "rpl-si",
    name: "RPL & SI",
    fullName: "Rekayasa Perangkat Lunak & Sistem Informasi",
    description:
      "Divisi yang fokus pada pengembangan perangkat lunak dan sistem informasi, meliputi web development, mobile development, dan system design.",
    bannerUrl: "https://is3.cloudhost.id/scit/assets/banner/cropped-rpl-si.png",
    members: [
      {
        name: "Bayu Wicaksono",
        role: "Lead Software & System",
        angkatan: "Informatics '23",
        imageUrl: "https://placehold.co/400",
        isCoreMember: true,
      },
      {
        name: "Agung Nugraha",
        role: "Co-Lead Software & System",
        angkatan: "Informatics '23",
        imageUrl: "https://placehold.co/400",
        isCoreMember: true,
      },
      {
        name: "Fariz Husain Albar",
        role: "Secretary Software & System",
        angkatan: "Informatics '24",
        imageUrl: "https://placehold.co/400",
        isCoreMember: true,
      },
      {
        name: "Ara Rosalia S.",
        role: "Media & Information Software & System",
        angkatan: "Informatics '23",
        imageUrl: "https://placehold.co/400",
        isCoreMember: true,
      },
      {
        name: "Member 1",
        role: "Member",
        angkatan: "Informatics '24",
        imageUrl: "https://placehold.co/400",
      },
      {
        name: "Member 2",
        role: "Member",
        angkatan: "Informatics '24",
        imageUrl: "https://placehold.co/400",
      },
      {
        name: "Member 3",
        role: "Member",
        angkatan: "Informatics '24",
        imageUrl: "https://placehold.co/400",
      },
      {
        name: "Member 4",
        role: "Member",
        angkatan: "Informatics '24",
        imageUrl: "https://placehold.co/400",
      },
    ],
    faqs: [
      {
        question: "Apa saja yang dipelajari di divisi RPL & SI?",
        answer:
          "Di divisi ini, kamu akan mempelajari pengembangan web (frontend & backend), mobile development, database design, system architecture, dan berbagai framework modern seperti React, Next.js, Node.js, dan lainnya.",
      },
      {
        question: "Apakah harus memiliki pengalaman coding sebelumnya?",
        answer:
          "Tidak harus! Kami menerima anggota dengan berbagai tingkat kemampuan. Yang penting adalah semangat untuk belajar dan berkembang bersama.",
      },
      {
        question: "Apa saja kegiatan yang dilakukan di divisi ini?",
        answer:
          "Kegiatan meliputi workshop, bootcamp, project-based learning, code review sessions, dan pengembangan project-project nyata yang bermanfaat.",
      },
      {
        question: "Bagaimana cara bergabung dengan divisi RPL & SI?",
        answer:
          "Kamu bisa mendaftar melalui form pendaftaran SCIT yang dibuka setiap periode recruitment. Follow Instagram @scit.uinsk untuk info lebih lanjut!",
      },
    ],
  },
  {
    slug: "jaringan-komputer-cyber-security",
    name: "Jaringan & Cyber Security",
    fullName: "Jaringan Komputer & Cyber Security",
    description:
      "Divisi yang fokus pada infrastruktur jaringan, keamanan siber, dan sistem administrasi untuk melindungi dan mengelola sistem informasi.",
    bannerUrl: "https://is3.cloudhost.id/scit/assets/banner/cropped-jaringan.png",
    members: [
      {
        name: "Radinka Rafi'ie A. P.",
        role: "Lead Network & Infrastructure",
        angkatan: "Informatics '23",
        imageUrl: "https://placehold.co/400",
        isCoreMember: true,
      },
      {
        name: "Akmal Sani Pratama",
        role: "Co-Lead Network & Infrastructure",
        angkatan: "Informatics '23",
        imageUrl: "https://placehold.co/400",
        isCoreMember: true,
      },
      {
        name: "Radipta Basri Wijaya",
        role: "Secretary Network & Infrastructure",
        angkatan: "Informatics '23",
        imageUrl: "https://placehold.co/400",
        isCoreMember: true,
      },
      {
        name: "Vikri Wahyu Ramadhan",
        role: "Media & Information Network & Infrastructure",
        angkatan: "Informatics '23",
        imageUrl: "https://placehold.co/400",
        isCoreMember: true,
      },
      {
        name: "Member 1",
        role: "Member",
        angkatan: "Informatics '24",
        imageUrl: "https://placehold.co/400",
      },
      {
        name: "Member 2",
        role: "Member",
        angkatan: "Informatics '24",
        imageUrl: "https://placehold.co/400",
      },
      {
        name: "Member 3",
        role: "Member",
        angkatan: "Informatics '24",
        imageUrl: "https://placehold.co/400",
      },
      {
        name: "Member 4",
        role: "Member",
        angkatan: "Informatics '24",
        imageUrl: "https://placehold.co/400",
      },
    ],
    faqs: [
      {
        question: "Apa saja yang dipelajari di divisi Jaringan & Cyber Security?",
        answer:
          "Kamu akan mempelajari konfigurasi jaringan, network security, ethical hacking, penetration testing, firewall configuration, dan berbagai tools security seperti Wireshark, Nmap, Metasploit, dan lainnya.",
      },
      {
        question: "Apakah divisi ini cocok untuk pemula?",
        answer:
          "Sangat cocok! Kami menyediakan pembelajaran dari dasar hingga advanced. Kamu akan dibimbing step by step untuk memahami konsep jaringan dan security.",
      },
      {
        question: "Sertifikasi apa yang bisa didapatkan?",
        answer:
          "Kamu bisa mendapatkan persiapan untuk sertifikasi seperti CompTIA Network+, Security+, CEH (Certified Ethical Hacker), dan sertifikasi lainnya.",
      },
      {
        question: "Apa benefit bergabung di divisi ini?",
        answer:
          "Kamu akan mendapat skill yang sangat dibutuhkan industri, kesempatan magang, networking dengan profesional, dan pengalaman hands-on dengan tools enterprise.",
      },
    ],
  },
  {
    slug: "ml-ai",
    name: "ML & AI",
    fullName: "Machine Learning & Artificial Intelligence",
    description: "Divisi yang fokus pada pengembangan kecerdasan buatan, machine learning, deep learning, dan data science untuk solusi cerdas.",
    bannerUrl: "https://is3.cloudhost.id/scit/assets/banner/cropped-ml-ai.png",
    members: [
      {
        name: "Ahmad Al Ghazali",
        role: "Lead Artificial Intelligence",
        angkatan: "Informatics '23",
        imageUrl: "https://placehold.co/400",
        isCoreMember: true,
      },
      {
        name: "M. Apzirza Rafi",
        role: "Co-Lead Artificial Intelligence",
        angkatan: "Informatics '24",
        imageUrl: "https://placehold.co/400",
        isCoreMember: true,
      },
      {
        name: "Gahyaka Ararya Fairuz.",
        role: "Secretary Artificial Intelligence",
        angkatan: "Informatics '24",
        imageUrl: "https://placehold.co/400",
        isCoreMember: true,
      },
      {
        name: "Fahalliza Nastitie D.",
        role: "Media & Information Artificial Intelligence",
        angkatan: "Informatics '23",
        imageUrl: "https://placehold.co/400",
        isCoreMember: true,
      },
      {
        name: "Member 1",
        role: "Member",
        angkatan: "Informatics '24",
        imageUrl: "https://placehold.co/400",
      },
      {
        name: "Member 2",
        role: "Member",
        angkatan: "Informatics '24",
        imageUrl: "https://placehold.co/400",
      },
      {
        name: "Member 3",
        role: "Member",
        angkatan: "Informatics '24",
        imageUrl: "https://placehold.co/400",
      },
      {
        name: "Member 4",
        role: "Member",
        angkatan: "Informatics '24",
        imageUrl: "https://placehold.co/400",
      },
    ],
    faqs: [
      {
        question: "Apa saja yang dipelajari di divisi ML & AI?",
        answer:
          "Kamu akan mempelajari machine learning algorithms, deep learning, neural networks, computer vision, natural language processing (NLP), dan tools seperti TensorFlow, PyTorch, Scikit-learn, dan lainnya.",
      },
      {
        question: "Apakah harus jago matematika?",
        answer:
          "Tidak harus jago dari awal! Kami akan memberikan pemahaman matematika yang diperlukan (linear algebra, calculus, statistics) secara bertahap sambil praktek langsung.",
      },
      {
        question: "Project apa yang akan dikerjakan?",
        answer:
          "Project bervariasi dari image classification, sentiment analysis, chatbot development, recommendation systems, hingga research-based projects yang bisa dipublikasikan.",
      },
      {
        question: "Bagaimana prospek karir di bidang AI?",
        answer:
          "Sangat menjanjikan! AI Engineer, ML Engineer, Data Scientist adalah profesi dengan demand tinggi dan salary yang kompetitif. Divisi ini akan mempersiapkan kamu untuk karir tersebut.",
      },
    ],
  },
];
