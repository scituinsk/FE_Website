export const navigationItems = [
  {
    label: "Home",
    href: "/",
    exact: true, // Only match exact path for home
  },
  {
    label: "About Us",
    href: "/about",
    exact: false, // Match /about and /about/*
  },
  {
    label: "Projects",
    href: "/projects",
    exact: false, // Match /projects and /projects/*
  },
  {
    label: "Gallery",
    href: "/gallery",
    exact: false, // Match /galery and /galery/*
  },
] as const;

export const ctaButtons = [
  {
    label: "Contact Us",
    href: "/#contact",
    variant: "default" as const,
  },
] as const;
