import { useMutation, useQueryClient } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { MutationConfig } from "@/lib/query-client";
import { ApiResponse } from "@/types/api-response";
import { DetailProject, getProjectByIdQueryKey } from "../queries/use-get-project-by-id";

export type DeleteProjectTestimonialParams = {
  projectId: string;
  testimonialId: string;
};

type DeleteProjectTestimonialResponse = {
  message: string;
};

export const deleteProjectTestimonial = async ({ projectId, testimonialId }: DeleteProjectTestimonialParams) => {
  const response = await apiClient.delete<ApiResponse<DeleteProjectTestimonialResponse>>(
    `/admin/projects/${projectId}/testimonials/${testimonialId}`,
  );
  return response.data.data;
};

type UseDeleteProjectTestimonialParams = {
  mutationConfig?: MutationConfig<typeof deleteProjectTestimonial>;
};

export const useDeleteProjectTestimonial = (params: UseDeleteProjectTestimonialParams = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    ...params.mutationConfig,
    mutationFn: deleteProjectTestimonial,
    onSuccess: (...args) => {
      const [, variables] = args;

      // Update detail project cache - remove deleted testimonial
      queryClient.setQueryData<DetailProject>(getProjectByIdQueryKey({ projectId: variables.projectId }), (oldData) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          testimonials: oldData.testimonials.filter((t) => t.id.toString() !== variables.testimonialId),
        };
      });

      params.mutationConfig?.onSuccess?.(...args);
    },
  });
};
