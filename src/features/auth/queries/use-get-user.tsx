import { queryOptions, useQuery } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { QueryConfig } from "@/lib/query-client";
import { ApiResponse } from "@/types/api-response";
import { User } from "@/types/user";

/**
 * Fungsi untuk mendapatkan detail pengguna berdasarkan ID melalui API.
 * Fungsi ini mengirimkan permintaan GET ke endpoint "/admin/users/:userId".
 *
 * @async
 * @function getUser
 * @param {number} userId - ID pengguna yang akan diambil.
 * @returns {Promise<User>} Data pengguna.
 */
export const getUser = async (userId: number) => {
  const response = await apiClient.get<ApiResponse<User>>(`/admin/users/${userId}`);
  return response.data.data;
};

export const getUserQueryKey = (userId: number) => {
  return ["user", userId] as const;
};

export const getUserQueryOptions = (userId: number) => {
  return queryOptions({
    queryKey: getUserQueryKey(userId),
    queryFn: () => getUser(userId),
  });
};

type UseGetUserParams = {
  userId: number;
  queryConfig?: QueryConfig<typeof getUser>;
};

/**
 * Hook kustom TanStack Query untuk mendapatkan detail pengguna berdasarkan ID.
 *
 * @function useGetUser
 * @param {UseGetUserParams} params - Parameter yang berisi userId dan opsi query tambahan.
 * @returns {import("@tanstack/react-query").UseQueryResult<User, Error>} Hasil dari hook useQuery.
 *
 * @example
 * const { data: user, isLoading } = useGetUser({
 *   userId: 123
 * });
 */
export const useGetUser = ({ userId, queryConfig }: UseGetUserParams) => {
  return useQuery({
    ...getUserQueryOptions(userId),
    ...queryConfig,
  });
};
