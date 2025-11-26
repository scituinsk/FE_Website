import { useMutation } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { MutationConfig } from "@/lib/query-client";
import { ApiResponse } from "@/types/api-response";

export type GetPresignedUrlPayload = {
  fileName: string;
  fileType: string;
  fileSize: number;
};

export type GetPresignedUrlParams = {
  projectId: string;
  data: GetPresignedUrlPayload;
};

type PresignedUrlResponse = {
  id: number;
  uploadUrl: string;
  fileUrl: string;
  key: string;
};

export const getPresignedUrl = async ({ projectId, data }: GetPresignedUrlParams) => {
  const response = await apiClient.post<ApiResponse<PresignedUrlResponse>>(`/projects/${projectId}/images/upload`, data);
  return response.data.data;
};

type UseGetPresignedUrlParams = {
  mutationConfig?: MutationConfig<typeof getPresignedUrl>;
};

export const useGetPresignedUrl = (params: UseGetPresignedUrlParams = {}) => {
  return useMutation({
    mutationFn: getPresignedUrl,
    ...params.mutationConfig,
  });
};
