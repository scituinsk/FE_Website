import { useMutation } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { MutationConfig } from "@/lib/query-client";
import { ApiResponse } from "@/types/api-response";

export const deleteProject = async (projectId: string) => {
  const response = await apiClient.delete<ApiResponse<void>>(`/projects/${projectId}`);
  return response.data;
};

type UseDeleteProjectParams = {
  mutationConfig?: MutationConfig<typeof deleteProject>;
};

export const useDeleteProject = (params: UseDeleteProjectParams = {}) => {
  return useMutation({
    mutationFn: deleteProject,

    ...params.mutationConfig,
  });
};
