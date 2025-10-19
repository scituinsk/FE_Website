export interface TechStack {
  name: string;
  logo: {
    light: string;
    dark: string;
  };
  category: "frontend" | "backend" | "database" | "mobile" | "ai-ml" | "devops" | "design" | "other";
  color: string; // Fallback color for text
}

export const techStacks: Record<string, TechStack> = {
  React: {
    name: "React",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    category: "frontend",
    color: "#61DAFB",
  },
  "Node.js": {
    name: "Node.js",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
    category: "backend",
    color: "#339933",
  },
  PostgreSQL: {
    name: "PostgreSQL",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    category: "database",
    color: "#336791",
  },
  IoT: {
    name: "IoT",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg",
    },
    category: "other",
    color: "#00979D",
  },
  "React Native": {
    name: "React Native",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    category: "mobile",
    color: "#61DAFB",
  },
  Firebase: {
    name: "Firebase",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    },
    category: "backend",
    color: "#FFCA28",
  },
  Python: {
    name: "Python",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    category: "ai-ml",
    color: "#3776AB",
  },
  "AI/ML": {
    name: "AI/ML",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
    },
    category: "ai-ml",
    color: "#FF6F00",
  },
  Express: {
    name: "Express",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    },
    category: "backend",
    color: "#000000",
  },
  MongoDB: {
    name: "MongoDB",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
    category: "database",
    color: "#47A248",
  },
  Docker: {
    name: "Docker",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    },
    category: "devops",
    color: "#2496ED",
  },
  TypeScript: {
    name: "TypeScript",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    category: "frontend",
    color: "#3178C6",
  },
  "Next.js": {
    name: "Next.js",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    category: "frontend",
    color: "#000000",
  },
  "Vue.js": {
    name: "Vue.js",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
    },
    category: "frontend",
    color: "#4FC08D",
  },
  Laravel: {
    name: "Laravel",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    },
    category: "backend",
    color: "#FF2D20",
  },
  MySQL: {
    name: "MySQL",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    },
    category: "database",
    color: "#4479A1",
  },
  Flutter: {
    name: "Flutter",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    },
    category: "mobile",
    color: "#02569B",
  },
  JWT: {
    name: "JWT",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg",
    },
    category: "backend",
    color: "#000000",
  },
  "Stripe API": {
    name: "Stripe API",
    logo: {
      light: "https://img.icons8.com/color/48/stripe.png",
      dark: "https://img.icons8.com/color/48/stripe.png",
    },
    category: "other",
    color: "#008CDD",
  },
  Figma: {
    name: "Figma",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    },
    category: "design",
    color: "#F24E1E",
  },
};

export const getTechStack = (name: string): TechStack | undefined => {
  return techStacks[name];
};

export const getTechStacksByCategory = (category: TechStack["category"]) => {
  return Object.values(techStacks).filter((tech) => tech.category === category);
};
