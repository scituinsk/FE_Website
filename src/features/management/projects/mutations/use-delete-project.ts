import { useMutation } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { MutationConfig } from "@/lib/query-client";
import { ApiResponse } from "@/types/api-response";

/**
 * Fungsi untuk menghapus project melalui API.
 * Fungsi ini mengirimkan permintaan DELETE ke endpoint "/projects/:id".
 *
 * @async
 * @function deleteProject
 * @param {string} projectId - ID project yang akan dihapus.
 * @returns {Promise<void>} Promise yang resolve ketika project berhasil dihapus.
 */
export const deleteProject = async (projectId: string) => {
  const response = await apiClient.delete<ApiResponse<void>>(`/projects/${projectId}`);
  return response.data;
};

type UseDeleteProjectParams = {
  mutationConfig?: MutationConfig<typeof deleteProject>;
};

export const useDeleteProject = (params: UseDeleteProjectParams = {}) => {
  return useMutation({
    mutationFn: deleteProject,

    ...params.mutationConfig,
  });
};
