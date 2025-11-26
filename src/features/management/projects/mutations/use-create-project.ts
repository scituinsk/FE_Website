import { useMutation } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { MutationConfig } from "@/lib/query-client";
import { ApiResponse } from "@/types/api-response";
import { Project } from "@/types/project";

export type CreateProjectPayload = {
  title: string;
  description: string;
  slug: string;
  launchYear: string;
  duration: string;
  linkDemo?: string;
};

export const createProject = async (data: CreateProjectPayload) => {
  const response = await apiClient.post<ApiResponse<Project>>("/projects", data);
  return response.data.data;
};

type UseCreateProjectParams = {
  mutationConfig?: MutationConfig<typeof createProject>;
};

export const useCreateProject = (params: UseCreateProjectParams = {}) => {
  return useMutation({
    mutationFn: createProject,

    ...params.mutationConfig,
  });
};
