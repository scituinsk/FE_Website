import { useMutation } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { MutationConfig } from "@/lib/query-client";
import { ApiResponse } from "@/types/api-response";
import { Project } from "@/types/project";

/**
 * @typedef {object} CreateProjectPayload
 * @property {string} title - Judul project.
 * @property {string} description - Deskripsi project.
 * @property {string} slug - Slug untuk URL project.
 * @property {string} [linkDemo] - URL demo project (optional).
 */
export type CreateProjectPayload = {
  title: string;
  description: string;
  slug: string;
  linkDemo?: string;
};

/**
 * Fungsi untuk membuat project baru melalui API.
 * Fungsi ini mengirimkan permintaan POST ke endpoint "/projects".
 *
 * @async
 * @function createProject
 * @param {CreateProjectPayload} data - Data project yang akan dibuat.
 * @returns {Promise<Project>} Data project yang telah dibuat.
 */
export const createProject = async (data: CreateProjectPayload) => {
  const response = await apiClient.post<ApiResponse<Project>>("/projects", data);
  return response.data.data;
};

/**
 * @typedef {object} UseCreateProjectParams
 * @property {MutationConfig<typeof createProject>} [mutationConfig] - Opsi konfigurasi TanStack Query Mutation tambahan.
 */
type UseCreateProjectParams = {
  mutationConfig?: MutationConfig<typeof createProject>;
};

/**
 * Hook kustom TanStack Query untuk membuat project baru.
 * Hook ini secara otomatis akan me-refresh daftar projects setelah berhasil create.
 *
 * @function useCreateProject
 * @param {UseCreateProjectParams} [params={}] - Parameter yang memungkinkan penyesuaian opsi mutasi.
 * @returns {import("@tanstack/react-query").UseMutationResult<Project, Error, CreateProjectPayload>} Hasil dari hook useMutation.
 *
 * @example
 * const { mutate: createProject, isPending } = useCreateProject({
 *   mutationConfig: {
 *     onSuccess: () => {
 *       toast.success("Project berhasil dibuat!");
 *     }
 *   }
 * });
 *
 * @example
 * // Penggunaan dengan error handling
 * const { mutate, isPending, isError, error } = useCreateProject({
 *   mutationConfig: {
 *     onError: (error) => {
 *       toast.error(error.message);
 *     }
 *   }
 * });
 */
export const useCreateProject = (params: UseCreateProjectParams = {}) => {
  return useMutation({
    mutationFn: createProject,

    ...params.mutationConfig,
  });
};
