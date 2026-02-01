import { useMutation, useQueryClient } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { MutationConfig } from "@/lib/query-client";
import { ApiResponse } from "@/types/api-response";
import { DetailProject, getProjectByIdQueryKey } from "../queries/use-get-project-by-id";

export type UpdateProjectTestimonialPayload = {
  name: string;
  role: string;
  testimonial: string;
  rating: number;
  avatarUrl: string;
};

export type UpdateProjectTestimonialParams = {
  projectId: string;
  testimonialId: string;
  data: UpdateProjectTestimonialPayload;
};

type UpdateProjectTestimonialResponse = {
  id: number;
  projectId: number;
  name: string;
  role: string;
  avatarUrl: string;
  rating: number;
  testimonial: string;
  createdAt: string;
  updatedAt: string;
};

export const updateProjectTestimonial = async ({ projectId, testimonialId, data }: UpdateProjectTestimonialParams) => {
  const response = await apiClient.patch<ApiResponse<UpdateProjectTestimonialResponse>>(
    `/admin/projects/${projectId}/testimonials/${testimonialId}`,
    data,
  );
  return response.data.data;
};

type UseUpdateProjectTestimonialParams = {
  mutationConfig?: MutationConfig<typeof updateProjectTestimonial>;
};

export const useUpdateProjectTestimonial = (params: UseUpdateProjectTestimonialParams = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    ...params.mutationConfig,
    mutationFn: updateProjectTestimonial,
    onSuccess: (...args) => {
      const [data, variables] = args;

      // Update detail project cache
      queryClient.setQueryData<DetailProject>(getProjectByIdQueryKey({ projectId: variables.projectId }), (oldData) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          testimonials: oldData.testimonials.map((t) => (t.id === data.id ? data : t)),
        };
      });

      params.mutationConfig?.onSuccess?.(...args);
    },
  });
};
