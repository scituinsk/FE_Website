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
 * @property {string} launchYear - Tahun peluncuran project.
 * @property {string} duration - Durasi pengerjaan project.
 * @property {string} [linkDemo] - URL demo project (optional).
 */
export type CreateProjectPayload = {
  title: string;
  description: string;
  slug: string;
  launchYear: string;
  duration: string;
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

type UseCreateProjectParams = {
  mutationConfig?: MutationConfig<typeof createProject>;
};

export const useCreateProject = (params: UseCreateProjectParams = {}) => {
  return useMutation({
    mutationFn: createProject,

    ...params.mutationConfig,
  });
};
