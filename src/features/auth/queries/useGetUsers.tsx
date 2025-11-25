import { queryOptions, useQuery } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { QueryConfig } from "@/lib/query-client";
import { ApiResponse } from "@/types/api-response";
import { User } from "@/types/user";

/**
 * Fungsi untuk mengambil daftar semua pengguna dari API.
 * Fungsi ini mengirimkan permintaan GET ke endpoint "/auth/users".
 *
 * @async
 * @function getUsers
 * @returns {Promise<User[]>} Array data pengguna.
 */
export const getUsers = async () => {
  const response = await apiClient.get<ApiResponse<User[]>>("/users");
  return response.data.data;
};

/**
 * Fungsi untuk mendefinisikan Query Key unik pada query daftar pengguna.
 *
 * @function getUsersQueryKey
 * @returns {(string)[]} Array kunci query untuk TanStack Query.
 */
export const getUsersQueryKey = () => ["users"];

/**
 * Fungsi untuk mendefinisikan Query Options standar untuk pengambilan daftar pengguna.
 * Opsi ini mencakup `queryKey` dan `queryFn`.
 *
 * @function getUsersQueryOptions
 * @returns {import("@tanstack/react-query").QueryOptions<User[]>} Objek opsi query.
 */
const getUsersQueryOptions = () => {
  return queryOptions({
    queryKey: getUsersQueryKey(),
    queryFn: getUsers,
  });
};

/**
 * @typedef {object} useGetUsersParams
 * @property {QueryConfig<typeof getUsers>} [queryOptions] - Opsi konfigurasi TanStack Query tambahan atau untuk menimpa opsi standar.
 */
type useGetUsersParams = {
  queryOptions?: QueryConfig<typeof getUsers>;
};

/**
 * Hook kustom TanStack Query untuk memuat daftar semua pengguna.
 * Hook ini biasanya digunakan untuk menampilkan tabel/list pengguna di halaman admin.
 *
 * @function useGetUsers
 * @param {useGetUsersParams} [params={}] - Parameter yang memungkinkan penyesuaian opsi query.
 * @returns {import("@tanstack/react-query").UseQueryResult<User[]>} Hasil dari hook useQuery, termasuk data users, status loading, dan error.
 *
 * @example
 * // Penggunaan dasar untuk menampilkan list pengguna
 * const { data: users, isLoading } = useGetUsers();
 */
export const useGetUsers = (params: useGetUsersParams = {}) => {
  return useQuery({
    ...getUsersQueryOptions(),
    ...params.queryOptions,
  });
};
