export interface Partner {
  name: string;
  description: string;
  logo: string;
  website: string;
}

export const partners: Partner[] = [
  {
    name: "Google Cloud Platform",
    description: "Cloud computing services dan machine learning platform",
    logo: "https://assets.cdn.dicoding.com/original/commons/homepage-partner-google.png",
    website: "https://cloud.google.com",
  },
  {
    name: "Microsoft",
    description: "Azure cloud services dan developer tools",
    logo: "https://assets.cdn.dicoding.com/original/commons/homepage-partner-microsoft.png",
    website: "https://azure.microsoft.com",
  },
  {
    name: "IBM",
    description: "AI, cloud computing, dan enterprise solutions",
    logo: "https://assets.cdn.dicoding.com/original/commons/homepage-partner-ibm.png",
    website: "https://ibm.com",
  },
  {
    name: "Amazon Web Services",
    description: "Cloud infrastructure dan web services",
    logo: "https://assets.cdn.dicoding.com/original/commons/homepage-partner-aws.png",
    website: "https://aws.amazon.com",
  },
] as const;

const LIMIT_VIEW_PARTNER = 4;

export const getFeaturedPartners = () => {
  return partners.slice(0, LIMIT_VIEW_PARTNER);
};
