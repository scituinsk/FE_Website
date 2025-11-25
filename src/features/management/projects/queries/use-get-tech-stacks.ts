import { queryOptions, useQuery } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { QueryConfig } from "@/lib/query-client";
import { TechStackApiResponse } from "@/types/tech-stack";

export interface GetTechStacksParams {
  search?: string;
}

/**
 * Fungsi untuk mengambil daftar tech stacks dari API dengan search.
 *
 * @async
 * @function getTechStacks
 * @param {GetTechStacksParams} params - Parameter untuk search
 * @returns {Promise<TechStackApiResponse>} Data tech stacks dari API
 */
export const getTechStacks = async (params: GetTechStacksParams = {}) => {
  const { search = "" } = params;

  const response = await apiClient.get<TechStackApiResponse>("/projects/tech-stacks/lists", {
    params: {
      search,
    },
  });

  return response.data;
};

/**
 * Fungsi untuk mendefinisikan Query Key unik pada query ini.
 *
 * @function getTechStacksQueryKey
 * @param {GetTechStacksParams} params - Parameter query
 * @returns {(string | GetTechStacksParams)[]} Array kunci query untuk TanStack Query.
 */
export const getTechStacksQueryKey = (params: GetTechStacksParams = {}) => {
  return ["tech-stacks", params] as const;
};

/**
 * Fungsi untuk mendefinisikan Query Options standar untuk pengambilan tech stacks.
 *
 * @function getTechStacksQueryOptions
 * @param {GetTechStacksParams} params - Parameter query
 * @returns {import("@tanstack/react-query").QueryOptions} Objek opsi query.
 */
export const getTechStacksQueryOptions = (params: GetTechStacksParams = {}) => {
  return queryOptions({
    queryKey: getTechStacksQueryKey(params),
    queryFn: () => getTechStacks(params),
  });
};

type UseGetTechStacksParams = {
  params?: GetTechStacksParams;
  queryOptions?: QueryConfig<typeof getTechStacksQueryOptions>;
};

/**
 * Hook kustom TanStack Query untuk memuat daftar tech stacks dengan search.
 *
 * @function useGetTechStacks
 * @param {UseGetTechStacksParams} config - Parameter yang memungkinkan penyesuaian params dan opsi query.
 * @returns {import("@tanstack/react-query").UseQueryResult<TechStackApiResponse>} Hasil dari hook useQuery
 *
 * @example
 * // Penggunaan dasar
 * const { data, isLoading } = useGetTechStacks({
 *   params: { search: "next" }
 * });
 *
 * @example
 * // Dengan debounce search
 * const [searchQuery, setSearchQuery] = useState("");
 * const { data } = useGetTechStacks({
 *   params: { search: searchQuery }
 * });
 */
export const useGetTechStacks = (config: UseGetTechStacksParams = {}) => {
  const { params = {}, queryOptions } = config;

  return useQuery({
    ...getTechStacksQueryOptions(params),
    ...queryOptions,
  });
};
