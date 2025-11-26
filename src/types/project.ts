export interface Technology {
  id: number;
  name: string;
  logoUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectImage {
  id: number;
  imageUrl: string;
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
  launchYear: string | null;
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
