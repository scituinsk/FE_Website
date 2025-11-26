import { useMutation, useQueryClient } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { MutationConfig } from "@/lib/query-client";
import { ApiResponse } from "@/types/api-response";
import { DetailProject, getProjectByIdQueryKey } from "../queries/use-get-project-by-id";

export type ConfirmImageUploadParams = {
  projectId: string;
  imageId: string;
};

type ConfirmImageUploadResponse = {
  id: number;
  projectId: number;
  imageUrl: string;
  isPrimary: boolean;
  isUsed: boolean;
  createdAt: string;
  updatedAt: string;
};

export const confirmImageUpload = async ({ projectId, imageId }: ConfirmImageUploadParams) => {
  const response = await apiClient.post<ApiResponse<ConfirmImageUploadResponse>>(`/projects/${projectId}/images/${imageId}/confirm`);
  return response.data.data;
};

type UseConfirmImageUploadParams = {
  mutationConfig?: MutationConfig<typeof confirmImageUpload>;
};

export const useConfirmImageUpload = (params: UseConfirmImageUploadParams = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    ...params.mutationConfig,
    mutationFn: confirmImageUpload,
    onSuccess: (...args) => {
      const [data, variables] = args;

      // Update detail project cache
      queryClient.setQueryData<DetailProject>(getProjectByIdQueryKey({ projectId: variables.projectId }), (oldData) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          images: [...oldData.images, data],
        };
      });

      params.mutationConfig?.onSuccess?.(...args);
    },
  });
};
