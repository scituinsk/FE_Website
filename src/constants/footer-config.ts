import { SCIT_DIVISIONS } from "./division";

export const footerConfig = {
  description:
    "Student Community of Information Technology - Komunitas mahasiswa teknologi informasi UIN Sunan Kalijaga Yogyakarta yang berfokus pada pengembangan skill dan inovasi teknologi.",
  socialMedia: {
    instagram: "https://www.instagram.com/scituinsuka",
    linkedin: "https://www.linkedin.com/company/study-club-informatika-uin-sunan-kalijaga",
    github: "https://github.com/scituinsk",
  },
  quickLinks: [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Our Projects",
      href: "/projects",
    },
    {
      name: "Gallery",
      href: "/gallery",
    },
  ],
  divisions: SCIT_DIVISIONS,
  contact: {
    address: "Fakultas Sains dan Teknologi UIN Sunan Kalijaga Jl. Marsda Adisucipto No 1 Yogyakarta 55281",
    email: "scit.uinsuka@gmail.com",
    phone: "+62 274 540 971",
  },
};
