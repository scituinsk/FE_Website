import { useMutation, useQueryClient } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { MutationConfig } from "@/lib/query-client";
import { ApiResponse, PaginatedData } from "@/types/api-response";
import { DetailProject, getProjectByIdQueryKey } from "../queries/use-get-project-by-id";
import { Project } from "@/types/project";
import { getProjectsQueryKey } from "../queries/use-get-projects";

export type SyncTechnologiesPayload = {
  technologies: {
    id: number;
    name: string;
    logoUrl: string;
    createdAt: string;
    updatedAt: string;
  }[];
};

type SyncTechnologiesResponse = {
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
  technologies: {
    id: number;
    name: string;
    logoUrl: string;
    createdAt: string;
    updatedAt: string;
  }[];
};

export type SyncTechnologiesParams = {
  projectId: string;
  data: SyncTechnologiesPayload;
};

export const syncTechnologies = async ({ projectId, data }: SyncTechnologiesParams) => {
  const response = await apiClient.post<ApiResponse<SyncTechnologiesResponse>>(`/projects/${projectId}/technologies`, data);
  return response.data.data;
};

type UseSyncTechnologiesParams = {
  mutationConfig?: MutationConfig<typeof syncTechnologies>;
};

export const useSyncTechnologies = (params: UseSyncTechnologiesParams = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: syncTechnologies,
    ...params.mutationConfig,
    onSuccess: (...args) => {
      const [data, variables] = args;

      // Update detail project cache
      queryClient.setQueryData<DetailProject>(getProjectByIdQueryKey({ projectId: variables.projectId.toString() }), (oldData) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          technologies: data.technologies,
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
                  technologies: data.technologies,
                }
              : project
          ),
        };
      });

      params.mutationConfig?.onSuccess?.(...args);
    },
  });
};
