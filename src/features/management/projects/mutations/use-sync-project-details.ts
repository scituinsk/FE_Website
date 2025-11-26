import { useMutation, useQueryClient } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { MutationConfig } from "@/lib/query-client";
import { ApiResponse, PaginatedData } from "@/types/api-response";
import { DetailProject, getProjectByIdQueryKey } from "../queries/use-get-project-by-id";
import { Project } from "@/types/project";
import { getProjectsQueryKey } from "../queries/use-get-projects";

export type SyncProjectDetailsPayload = {
  aboutProject: string;
  features: {
    id: number;
    projectId: number;
    feature: string;
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
  results: {
    id: number;
    projectId: number;
    result: string;
    createdAt: string;
    updatedAt: string;
  }[];
};

type SyncProjectDetailsResponse = {
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
  keyFeatures: {
    id: number;
    projectId: number;
    feature: string;
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
  results: {
    id: number;
    projectId: number;
    result: string;
    createdAt: string;
    updatedAt: string;
  }[];
};

export type SyncProjectDetailsParams = {
  projectId: string;
  data: SyncProjectDetailsPayload;
};

export const syncProjectDetail = async ({ projectId, data }: SyncProjectDetailsParams) => {
  const response = await apiClient.post<ApiResponse<SyncProjectDetailsResponse>>(`/projects/${projectId}/details`, data);
  return response.data.data;
};

type UseSyncProjectDetailsParams = {
  mutationConfig?: MutationConfig<typeof syncProjectDetail>;
};

export const useSyncProjectDetails = (params: UseSyncProjectDetailsParams = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: syncProjectDetail,
    ...params.mutationConfig,
    onSuccess: (...args) => {
      const [data, variables] = args;

      // Update detail project cache
      queryClient.setQueryData<DetailProject>(getProjectByIdQueryKey({ projectId: variables.projectId.toString() }), (oldData) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          about: data.about,
          keyFeatures: data.keyFeatures,
          challenges: data.challenges,
          results: data.results,
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
                  about: data.about,
                }
              : project
          ),
        };
      });

      params.mutationConfig?.onSuccess?.(...args);
    },
  });
};
