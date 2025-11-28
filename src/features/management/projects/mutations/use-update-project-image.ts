import { useMutation, useQueryClient } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { MutationConfig } from "@/lib/query-client";
import { ApiResponse } from "@/types/api-response";
import { DetailProject, getProjectByIdQueryKey } from "../queries/use-get-project-by-id";

export type UpdateProjectImageParams = {
  projectId: string;
  imageId: string;
  data: {
    isPrimary?: boolean;
    isUsed?: boolean;
  };
};

type UpdateProjectImageResponse = {
  id: number;
  projectId: number;
  imageUrl: string;
  isPrimary: boolean;
  isUsed: boolean;
  createdAt: string;
  updatedAt: string;
};

export const updateProjectImage = async ({ projectId, imageId, data }: UpdateProjectImageParams) => {
  const response = await apiClient.patch<ApiResponse<UpdateProjectImageResponse>>(`/projects/${projectId}/images/${imageId}`, data);
  return response.data.data;
};

type UseUpdateProjectImageParams = {
  mutationConfig?: MutationConfig<typeof updateProjectImage>;
};

export const useUpdateProjectImage = (params: UseUpdateProjectImageParams = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    ...params.mutationConfig,
    mutationFn: updateProjectImage,
    onSuccess: (...args) => {
      const [data, variables] = args;

      // Update detail project cache
      queryClient.setQueryData<DetailProject>(getProjectByIdQueryKey({ projectId: variables.projectId }), (oldData) => {
        if (!oldData) return oldData;

        // If setting as primary, remove primary from other images
        const updatedImages = oldData.images.map((img) => {
          if (img.id === data.id) {
            return data;
          } else if (data.isPrimary && img.isPrimary) {
            return { ...img, isPrimary: false };
          }
          return img;
        });

        return {
          ...oldData,
          images: updatedImages,
        };
      });

      // Invalidate projects list cache
      queryClient.invalidateQueries({ queryKey: ["projects"] });

      params.mutationConfig?.onSuccess?.(...args);
    },
  });
};
