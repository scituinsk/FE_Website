import { useMutation, useQueryClient } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { MutationConfig } from "@/lib/query-client";
import { ApiResponse } from "@/types/api-response";
import { DetailProject, getProjectByIdQueryKey } from "../queries/use-get-project-by-id";

export type CreateProjectTestimonialPayload = {
  name: string;
  role: string;
  testimonial: string;
  rating: number;
  avatarUrl: string;
};

export type CreateProjectTestimonialParams = {
  projectId: string;
  data: CreateProjectTestimonialPayload;
};

type CreateProjectTestimonialResponse = {
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

export const createProjectTestimonial = async ({ projectId, data }: CreateProjectTestimonialParams) => {
  const response = await apiClient.post<ApiResponse<CreateProjectTestimonialResponse>>(`/projects/${projectId}/testimonials`, data);
  return response.data.data;
};

type UseCreateProjectTestimonialParams = {
  mutationConfig?: MutationConfig<typeof createProjectTestimonial>;
};

export const useCreateProjectTestimonial = (params: UseCreateProjectTestimonialParams = {}) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createProjectTestimonial,
    ...params.mutationConfig,
    onSuccess: (...args) => {
      const [data, variables] = args;

      // Update detail project cache
      queryClient.setQueryData<DetailProject>(getProjectByIdQueryKey({ projectId: variables.projectId }), (oldData) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          testimonials: [...oldData.testimonials, data],
        };
      });

      params.mutationConfig?.onSuccess?.(...args);
    },
  });
};
