import { useMutation } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { MutationConfig } from "@/lib/query-client";
import { ApiResponse } from "@/types/api-response";
import { Project } from "@/types/project";

export type UpdateSlugPayload = {
  slug: string;
};

export type UpdateSlugParams = {
  projectId: string;
  data: UpdateSlugPayload;
};

export const updateSlug = async ({ projectId, data }: UpdateSlugParams) => {
  const response = await apiClient.patch<ApiResponse<Project>>(`/admin/projects/change-slug/${projectId}`, data);
  return response.data.data;
};

type UseUpdateSlugParams = {
  mutationConfig?: MutationConfig<typeof updateSlug>;
};

export const useUpdateSlug = (params: UseUpdateSlugParams = {}) => {
  return useMutation({
    mutationFn: updateSlug,

    ...params.mutationConfig,
  });
};
