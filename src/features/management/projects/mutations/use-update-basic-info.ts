import { useMutation } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { MutationConfig } from "@/lib/query-client";
import { ApiResponse } from "@/types/api-response";
import { Project } from "@/types/project";

export type UpdateBasicInfoPayload = {
  title: string;
  description: string;
  status: string;
  duration: string;
  launchYear: string;
  demoUrl: string;
};

export type UpdateBasicInfoParams = {
  projectId: string;
  data: UpdateBasicInfoPayload;
};

export const updateBasicInfo = async ({ projectId, data }: UpdateBasicInfoParams) => {
  const response = await apiClient.patch<ApiResponse<Project>>(`projects/${projectId}/basic-info`, data);
  return response.data.data;
};

type UseUpdateBasicInfoParams = {
  mutationConfig?: MutationConfig<typeof updateBasicInfo>;
};

export const useupdateBasicInfo = (params: UseUpdateBasicInfoParams = {}) => {
  return useMutation({
    mutationFn: updateBasicInfo,

    ...params.mutationConfig,
  });
};
