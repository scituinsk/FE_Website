import { ManagementDetailProjectsPage } from "@/features/management/projects/pages/management-detail-project-page";

interface ManageProjectsIdPageProps {
  params: Promise<{ projectId: string }>;
}

const ManageProjectsIdPage = async ({ params }: ManageProjectsIdPageProps) => {
  const { projectId } = await params;

  return <ManagementDetailProjectsPage projectId={projectId} />;
};

export default ManageProjectsIdPage;
