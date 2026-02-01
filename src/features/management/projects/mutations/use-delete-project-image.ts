import { useMutation, useQueryClient } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { MutationConfig } from "@/lib/query-client";
import { ApiResponse } from "@/types/api-response";
import { DetailProject, getProjectByIdQueryKey } from "../queries/use-get-project-by-id";

export type DeleteProjectImageParams = {
  projectId: string;
  imageId: string;
};

type DeleteProjectImageResponse = {
  message: string;
};

export const deleteProjectImage = async ({ projectId, imageId }: DeleteProjectImageParams) => {
  const response = await apiClient.delete<ApiResponse<DeleteProjectImageResponse>>(`/admin/projects/${projectId}/images/${imageId}`);
  return response.data.data;
};

type UseDeleteProjectImageParams = {
  mutationConfig?: MutationConfig<typeof deleteProjectImage>;
};

export const useDeleteProjectImage = (params: UseDeleteProjectImageParams = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    ...params.mutationConfig,
    mutationFn: deleteProjectImage,
    onSuccess: (...args) => {
      const [, variables] = args;

      // Update detail project cache
      queryClient.setQueryData<DetailProject>(getProjectByIdQueryKey({ projectId: variables.projectId }), (oldData) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          images: oldData.images.filter((img) => img.id.toString() !== variables.imageId),
        };
      });

      // Invalidate projects list cache
      queryClient.invalidateQueries({ queryKey: ["projects"] });

      params.mutationConfig?.onSuccess?.(...args);
    },
  });
};
