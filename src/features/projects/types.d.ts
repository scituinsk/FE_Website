export type ProjectMinimalInfo = {
  id: number;
  title: string;
  thumbnail: {
    url: string;
  } | null;
  description: string;
  about: string;
  slug: string;
  duration: string;
  launchYear: string;
  demoUrl: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  technologies: {
    id: number;
    name: string;
    logoUrl: string;
    createdAt: string;
    updatedAt: string;
  }[];
  images: {
    id: number;
    key: string;
    fileName: string;
    fileType: string;
    fileSize: number;
    projectId: number;
    imageUrl: string;
    isPrimary: boolean;
    isUsed: boolean;
    createdAt: string;
    updatedAt: string;
  }[];
};

export type ProjectFullInformation = {
  id: number;
  title: string;
  description: string;
  about: string;
  slug: string;
  duration: string;
  launchYear: string;
  demoUrl: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  thumbnail: {
    url: string;
  } | null;
  images: {
    id: number;
    path: string;
    url: string;
    originalFileName: string;
    fileType: string;
    fileSize: number;
    isPrimary: boolean;
    isUsed: boolean;
    createdAt: string;
    updatedAt: string;
  }[];
  technologies: {
    id: number;
    name: string;
    logoUrl: string;
    createdAt: string;
    updatedAt: string;
  }[];
  challenges: {
    id: number;
    projectId: number;
    challenge: string;
    createdAt: string;
    updatedAt: string;
  }[];
  keyFeatures: {
    id: number;
    projectId: number;
    feature: string;
    createdAt: string;
    updatedAt: string;
  }[];
  results: {
    id: number;
    projectId: number;
    result: string;
    createdAt: string;
    updatedAt: string;
  }[];
  testimonials: {
    id: number;
    projectId: number;
    name: string;
    role: string;
    avatarUrl: string;
    rating: number;
    testimonial: string;
    createdAt: string;
    updatedAt: string;
  }[];
};
