export interface Partner {
  name: string;
  description: string;
  logo: string;
  website: string;
}

export const PARTNERS: Partner[] = [
  {
    name: "Informatika UIN Sunan Kalijaga",
    description: "Departemen Informatika UIN Sunan Kalijaga Yogyakarta",
    logo: "https://lpm.uin-suka.ac.id/media/dokumen_akademik/011_20211205_UIN%20Sunan%20Kalijaga.png",
    website: "https://informatika.uin-suka.ac.id",
  },
  {
    name: "HMPPS Informatika UIN Sunan Kalijaga",
    description: "Himpunan Mahasiswa Program Studi Informatika UIN Sunan Kalijaga Yogyakarta",
    logo: "/partner-image/hmps-informatika-uin.png",
    website: "https://www.instagram.com/hmituinsuka",
  },
  {
    name: "UINIC Yogyakarta",
    description: "Unbeatable IT Events and Competition of UIN Sunan Kalijaga",
    logo: "/partner-image/uinic.png",
    website: "https://www.instagram.com/uinicyogyakarta",
  },
] as const;
