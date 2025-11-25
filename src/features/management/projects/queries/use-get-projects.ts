import { queryOptions, useQuery } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { QueryConfig } from "@/lib/query-client";
import { PaginatedData } from "@/types/api-response";
import { Project } from "@/types/project";

export interface GetProjectsParams {
  page?: number;
  search?: string;
  per_page?: number;
}

/**
 * Fungsi untuk mengambil daftar projects dari API dengan pagination dan search.
 *
 * @async
 * @function getProjects
 * @param {GetProjectsParams} params - Parameter untuk pagination dan search
 * @returns {Promise<PaginatedData<Project>>} Data projects dengan pagination info
 */
export const getProjects = async (params: GetProjectsParams = {}) => {
  const { page = 1, search = "", per_page = 10 } = params;

  const response = await apiClient.get<PaginatedData<Project>>("/projects", {
    params: {
      page,
      search,
      per_page,
    },
  });

  return response.data;
};

/**
 * Fungsi untuk mendefinisikan Query Key unik pada query ini.
 *
 * @function getProjectsQueryKey
 * @param {GetProjectsParams} params - Parameter query
 * @returns {(string | GetProjectsParams)[]} Array kunci query untuk TanStack Query.
 */
export const getProjectsQueryKey = (params: GetProjectsParams = {}) => {
  return ["projects", params] as const;
};

/**
 * Fungsi untuk mendefinisikan Query Options standar untuk pengambilan projects.
 *
 * @function getProjectsQueryOptions
 * @param {GetProjectsParams} params - Parameter query
 * @returns {import("@tanstack/react-query").QueryOptions} Objek opsi query.
 */
export const getProjectsQueryOptions = (params: GetProjectsParams = {}) => {
  return queryOptions({
    queryKey: getProjectsQueryKey(params),
    queryFn: () => getProjects(params),
  });
};

type UseGetProjectsParams = {
  params?: GetProjectsParams;
  queryOptions?: QueryConfig<typeof getProjects>;
};

/**
 * Hook kustom TanStack Query untuk memuat daftar projects dengan pagination dan search.
 *
 * @function useGetProjects
 * @param {UseGetProjectsParams} config - Parameter yang memungkinkan penyesuaian params dan opsi query.
 * @returns {import("@tanstack/react-query").UseQueryResult<PaginatedData<Project>>} Hasil dari hook useQuery
 *
 * @example
 * // Penggunaan dasar
 * const { data, isLoading } = useGetProjects({
 *   params: { page: 1, search: "web", per_page: 10 }
 * });
 *
 * @example
 * // Dengan nuqs
 * const [page] = useQueryState("page", parseAsInteger.withDefault(1));
 * const [search] = useQueryState("search", parseAsString.withDefault(""));
 *
 * const { data } = useGetProjects({
 *   params: { page, search, per_page: 10 }
 * });
 */
export const useGetProjects = (config: UseGetProjectsParams = {}) => {
  const { params = {}, queryOptions } = config;

  return useQuery({
    ...getProjectsQueryOptions(params),
    ...queryOptions,
  });
};
