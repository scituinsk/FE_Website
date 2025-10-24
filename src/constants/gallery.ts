export interface GalleryImage {
  id: string;
  title: string;
  imageUrl: string;
  aspectRatio: number; // width/height ratio (e.g., 1.5 for landscape, 0.75 for portrait)
  date: Date;
  category?: string;
}

// Sample data - replace with real data from your backend/CMS
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "1",
    title: "Workshop Web Development 2024",
    imageUrl: "https://picsum.photos/seed/scit1/800/600",
    aspectRatio: 4 / 3,
    date: new Date("2024-09-15"),
    category: "Workshop",
  },
  {
    id: "2",
    title: "Seminar AI & Machine Learning",
    imageUrl: "https://picsum.photos/seed/scit2/600/900",
    aspectRatio: 2 / 3,
    date: new Date("2024-08-20"),
    category: "Seminar",
  },
  {
    id: "3",
    title: "Team Building SCIT 2024",
    imageUrl: "https://picsum.photos/seed/scit3/900/600",
    aspectRatio: 3 / 2,
    date: new Date("2024-07-10"),
    category: "Event",
  },
  {
    id: "4",
    title: "Hackathon Competition",
    imageUrl: "https://picsum.photos/seed/scit4/800/800",
    aspectRatio: 1,
    date: new Date("2024-06-25"),
    category: "Competition",
  },
  {
    id: "5",
    title: "Open Recruitment 2024",
    imageUrl: "https://picsum.photos/seed/scit5/700/1000",
    aspectRatio: 7 / 10,
    date: new Date("2024-05-15"),
    category: "Recruitment",
  },
  {
    id: "6",
    title: "Sharing Session: Cloud Computing",
    imageUrl: "https://picsum.photos/seed/scit6/1000/700",
    aspectRatio: 10 / 7,
    date: new Date("2024-04-30"),
    category: "Workshop",
  },
  {
    id: "7",
    title: "SCIT Annual Meeting",
    imageUrl: "https://picsum.photos/seed/scit7/800/600",
    aspectRatio: 4 / 3,
    date: new Date("2024-03-22"),
    category: "Event",
  },
  {
    id: "8",
    title: "Coding Bootcamp",
    imageUrl: "https://picsum.photos/seed/scit8/600/800",
    aspectRatio: 3 / 4,
    date: new Date("2024-02-18"),
    category: "Workshop",
  },
  {
    id: "9",
    title: "Tech Talk: Cybersecurity",
    imageUrl: "https://picsum.photos/seed/scit9/900/500",
    aspectRatio: 9 / 5,
    date: new Date("2024-01-25"),
    category: "Seminar",
  },
  {
    id: "10",
    title: "Project Showcase 2023",
    imageUrl: "https://picsum.photos/seed/scit10/800/1000",
    aspectRatio: 4 / 5,
    date: new Date("2023-12-15"),
    category: "Event",
  },
  {
    id: "11",
    title: "Workshop Mobile Development",
    imageUrl: "https://picsum.photos/seed/scit11/1000/800",
    aspectRatio: 5 / 4,
    date: new Date("2023-11-20"),
    category: "Workshop",
  },
  {
    id: "12",
    title: "Community Gathering",
    imageUrl: "https://picsum.photos/seed/scit12/700/700",
    aspectRatio: 1,
    date: new Date("2023-10-10"),
    category: "Event",
  },
  {
    id: "13",
    title: "Database Workshop",
    imageUrl: "https://picsum.photos/seed/scit13/600/900",
    aspectRatio: 2 / 3,
    date: new Date("2023-09-05"),
    category: "Workshop",
  },
  {
    id: "14",
    title: "Leadership Training",
    imageUrl: "https://picsum.photos/seed/scit14/900/600",
    aspectRatio: 3 / 2,
    date: new Date("2023-08-12"),
    category: "Training",
  },
  {
    id: "15",
    title: "Study Group Session",
    imageUrl: "https://picsum.photos/seed/scit15/800/1100",
    aspectRatio: 8 / 11,
    date: new Date("2023-07-28"),
    category: "Workshop",
  },
];

export const GALLERY_YEARS = Array.from(new Set(GALLERY_IMAGES.map((img) => img.date.getFullYear()))).sort((a, b) => b - a);

export const GALLERY_MONTHS = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];
