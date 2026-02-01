import { useMutation, useQueryClient } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { MutationConfig } from "@/lib/query-client";
import { ApiResponse, PaginatedData } from "@/types/api-response";
import { Project } from "@/types/project";
import { DetailProject, getProjectByIdQueryKey } from "../queries/use-get-project-by-id";
import { getProjectsQueryKey } from "../queries/use-get-projects";

export type UpdateBasicInfoPayload = {
  title: string;
  description: string;
  status: string;
  duration: string;
  launchYear: string;
  demoUrl: string;
};

type UpdateBasicInfoResponse = {
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
};

export type UpdateBasicInfoParams = {
  projectId: string;
  data: UpdateBasicInfoPayload;
};

export const updateBasicInfo = async ({ projectId, data }: UpdateBasicInfoParams) => {
  const response = await apiClient.patch<ApiResponse<UpdateBasicInfoResponse>>(`/admin/projects/${projectId}/basic-info`, data);
  return response.data.data;
};

type UseUpdateBasicInfoParams = {
  mutationConfig?: MutationConfig<typeof updateBasicInfo>;
};

export const useUpdateBasicInfo = (params: UseUpdateBasicInfoParams = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    ...params.mutationConfig,
    mutationFn: updateBasicInfo,
    onSuccess: (...args) => {
      const [data, variables] = args;

      // Update detail project cache
      queryClient.setQueryData<DetailProject>(getProjectByIdQueryKey({ projectId: variables.projectId }), (oldData) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          title: data.title,
          description: data.description,
          status: data.status,
          duration: data.duration,
          launchYear: data.launchYear,
          demoUrl: data.demoUrl,
          slug: data.slug,
          about: data.about,
        };
      });

      // Update projects list cache
      queryClient.setQueriesData<PaginatedData<Project>>({ queryKey: getProjectsQueryKey() }, (oldData) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          data: oldData.data.map((project) =>
            project.id === data.id
              ? {
                  ...project,
                  title: data.title,
                  description: data.description,
                  status: data.status as Project["status"],
                  duration: data.duration,
                  launchYear: data.launchYear,
                  slug: data.slug,
                }
              : project,
          ),
        };
      });

      params.mutationConfig?.onSuccess?.(...args);
    },
  });
};
