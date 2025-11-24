export interface Technology {
  id: number;
  name: string;
  logoUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectImage {
  id: number;
  url: string;
  alt?: string;
  createdAt: string;
  updatedAt: string;
}

export type ProjectStatus = "PLANNING" | "IN_PROGRESS" | "BETA_LAUNCH" | "PRODUCTION" | "COMPLETED" | "ARCHIVED";

export interface Project {
  id: number;
  title: string;
  description: string;
  about: string | null;
  slug: string;
  duration: string | null;
  launchDate: string | null;
  demoUrl: string | null;
  status: ProjectStatus;
  createdAt: string;
  updatedAt: string;
  technologies: Technology[];
  images: ProjectImage[];
}

export interface ProjectFormData {
  title: string;
  description: string;
  about?: string;
  duration?: string;
  launchDate?: string;
  demoUrl?: string;
  status: ProjectStatus;
  technologies?: number[];
  images?: File[];
}
