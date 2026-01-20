export const navigationItems = [
  {
    label: "Beranda",
    href: "/",
    exact: true, // Only match exact path for home
  },
  {
    label: "Tentang Kami",
    href: "/about",
    exact: false, // Match /about and /about/*
  },
  {
    label: "Proyek Portofolio",
    href: "/projects",
    exact: false, // Match /projects and /projects/*
  },
  {
    label: "Galeri",
    href: "/gallery",
    exact: false, // Match /galery and /galery/*
  },
] as const;

export const ctaButtons = [
  {
    label: "Hubugi Kami",
    href: "/#contact",
    variant: "default" as const,
  },
] as const;
