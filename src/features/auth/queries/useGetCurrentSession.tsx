import apiClient from "@/lib/axios";
import { QueryConfig } from "@/lib/query-client";
import { ApiResponse } from "@/types/api-response";
import { queryOptions, useQuery } from "@tanstack/react-query";

/**
 * @typedef {object} CurrentSession
 * @property {string} userId - ID unik pengguna yang sedang login.
 * @property {string} name - Nama lengkap pengguna.
 * @property {string} username - Username pengguna.
 * @property {string | null} avatar - URL gambar avatar pengguna, atau null jika tidak ada.
 * @property {"USER" | "ADMIN"} role - Peran (role) pengguna dalam sistem.
 */
export type CurrentSession = {
  userId: string;
  name: string;
  username: string;
  avatar: string | null;
  role: "SUPER_ADMIN" | "ADMIN";
};

/**
 * Fungsi untuk mengambil data sesi pengguna yang sedang aktif (current session) dari API.
 * Fungsi ini mengirimkan permintaan GET ke endpoint "/auth/session".
 *
 * @async
 * @function getCurrentSession
 * @returns {Promise<CurrentSession>} Data sesi pengguna saat ini.
 */
export const getCurrentSession = async () => {
  const response = await apiClient.get<ApiResponse<CurrentSession>>("/auth/session");
  return response.data.data;
};

/**
 * Fungsi untuk mendefinisikan Query Key unik pada query sesi saat ini.
 *
 * @function getCurrentSessionQueryKey
 * @returns {(string)[]} Array kunci query untuk TanStack Query.
 */
export const getCurrentSessionQueryKey = () => ["current-session"];

/**
 * Fungsi untuk mendefinisikan Query Options standar untuk pengambilan sesi saat ini.
 * Opsi ini mencakup `queryKey` dan `queryFn`.
 *
 * @function getCurrentSessionQueryOptions
 * @returns {import("@tanstack/react-query").QueryOptions<CurrentSession>} Objek opsi query.
 */
const getCurrentSessionQueryOptions = () => {
  return queryOptions({
    queryKey: getCurrentSessionQueryKey(),
    queryFn: getCurrentSession,
  });
};

/**
 * @typedef {object} useGetCurrentSessionParams
 * @property {QueryConfig<typeof getCurrentSession>} [queryOptions] - Opsi konfigurasi TanStack Query tambahan atau untuk menimpa opsi standar.
 */
type useGetCurrentSessionParams = {
  queryOptions?: QueryConfig<typeof getCurrentSession>;
};

/**
 * Hook kustom TanStack Query untuk memuat data sesi pengguna yang sedang aktif.
 * Hook ini biasanya digunakan di seluruh aplikasi untuk mengakses detail pengguna yang terautentikasi.
 *
 * @function useGetCurrentSession
 * @param {useGetCurrentSessionParams} [params={}] - Parameter yang memungkinkan penyesuaian opsi query.
 * @returns {import("@tanstack/react-query").UseQueryResult<CurrentSession>} Hasil dari hook useQuery, termasuk data sesi, status loading, dan error.
 *
 * @example
 * // Penggunaan dasar untuk menampilkan nama pengguna
 * const { data: session, isLoading } = useGetCurrentSession();
 *
 * @example
 * // Menambahkan opsi 'staleTime'
 * const { data: session } = useGetCurrentSession({
 * queryOptions: {
 * staleTime: Infinity // Data sesi dianggap tidak akan berubah selama sesi aktif.
 * },
 * });
 */
export const useGetCurrentSession = (params: useGetCurrentSessionParams = {}) => {
  return useQuery({
    ...getCurrentSessionQueryOptions(),
    ...params.queryOptions,
  });
};
