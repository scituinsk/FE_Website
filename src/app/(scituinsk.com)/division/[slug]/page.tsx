import { notFound } from "next/navigation";
import { DIVISION_DETAILS } from "@/constants/division-members";
import { DivisionDetailPage } from "@/features/division-detail-page/pages/division-detail-page";

interface DivisionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return DIVISION_DETAILS.map((division) => ({
    slug: division.slug,
  }));
}

export async function generateMetadata({ params }: DivisionPageProps) {
  const { slug } = await params;
  const division = DIVISION_DETAILS.find((d) => d.slug === slug);

  if (!division) {
    return {
      title: "Division Not Found",
    };
  }

  return {
    title: `${division.fullName} - SCIT`,
    description: division.description,
  };
}

export default async function DivisionPage({ params }: DivisionPageProps) {
  const { slug } = await params;
  const division = DIVISION_DETAILS.find((d) => d.slug === slug);

  if (!division) {
    notFound();
  }

  return <DivisionDetailPage division={division} />;
}
