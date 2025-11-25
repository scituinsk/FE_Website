import { useMutation } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { MutationConfig } from "@/lib/query-client";
import { ApiResponse } from "@/types/api-response";
import { Project } from "@/types/project";

/**
 * @typedef {object} UpdateSlugPayload
 * @property {string} slug - Slug baru untuk project.
 */
export type UpdateSlugPayload = {
  slug: string;
};

/**
 * @typedef {object} UpdateSlugParams
 * @property {string} projectId - ID project yang akan diupdate slugnya.
 * @property {UpdateSlugPayload} data - Data slug baru.
 */
export type UpdateSlugParams = {
  projectId: string;
  data: UpdateSlugPayload;
};

/**
 * Fungsi untuk mengubah slug project melalui API.
 * Fungsi ini mengirimkan permintaan PATCH ke endpoint "/projects/change-slug/:id".
 *
 * @async
 * @function updateSlug
 * @param {UpdateSlugParams} params - Parameter yang berisi projectId dan data slug baru.
 * @returns {Promise<Project>} Data project yang telah diupdate.
 */
export const updateSlug = async ({ projectId, data }: UpdateSlugParams) => {
  const response = await apiClient.patch<ApiResponse<Project>>(`/projects/change-slug/${projectId}`, data);
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
