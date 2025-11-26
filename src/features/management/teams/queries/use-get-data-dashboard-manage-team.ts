import { queryOptions, useQuery } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { QueryConfig } from "@/lib/query-client";
import { ApiResponse } from "@/types/api-response";

/**
 * @typedef {object} Member
 * @property {number} id - ID unik anggota.
 * @property {string} name - Nama lengkap anggota.
 * @property {string} imageUrl - URL gambar profil anggota.
 */

/**
 * @typedef {object} Division
 * @property {number} id - ID unik divisi.
 * @property {string} name - Nama divisi.
 * @property {string} slug - Slug (nama ramah URL) divisi.
 * @property {string} description - Deskripsi singkat divisi.
 * @property {Member[]} members - Daftar anggota yang tergabung dalam divisi ini.
 * @property {object} _count
 * @property {number} _count.members - Jumlah total anggota dalam divisi ini.
 */

/**
 * Ini adalah tipe data dari response API untuk data dashboard manajemen tim.
 * Ini mencakup informasi tentang divisi dan anggota dalam setiap divisi, serta hitungan total.
 * @typedef {object} DataDashboardManagementUser
 * @property {Division[]} divisions - Daftar semua divisi yang dikelola.
 * @property {object} _count - Objek hitungan total.
 * @property {number} _count.allMembers - Jumlah total semua anggota di semua divisi.
 * @property {number} _count.divisions - Jumlah total divisi.
 */
export type DataDashboardManagementUser = {
  divisions: {
    id: number;
    name: string;
    slug: string;
    description: string;
    members: {
      id: number;
      name: string;
      imageUrl: string;
    }[];
    _count: {
      members: number;
    };
  }[];
  _count: {
    allMembers: number;
    divisions: number;
  };
};

/**
 * Fungsi untuk mengambil data dashboard manajemen tim dari API.
 * Fungsi ini mengirimkan permintaan GET ke endpoint "/teams/management-dashboard".
 *
 * @async
 * @function getDataDashboardManageTeam
 * @returns {Promise<DataDashboardManagementUser>} Data dashboard manajemen tim.
 */
export const getDataDashboardManageTeam = async () => {
  const response = await apiClient.get<ApiResponse<DataDashboardManagementUser>>("/teams/management-dashboard");
  return response.data.data;
};

/**
 * Fungsi untuk mendefinisikan Query Key unik pada query ini.
 *
 * @function getDataDashboardManageTeamQueryKey
 * @returns {(string | number)[]} Array kunci query untuk TanStack Query.
 */
export const getDataDashboardManageTeamQueryKey = () => ["data-dashboard-management-team"];

/**
 * Fungsi untuk mendefinisikan Query Options standar untuk pengambilan data dashboard tim.
 * Opsi ini mencakup `queryKey` dan `queryFn`.
 *
 * @function getDataDashboardManageTeamQueryOptions
 * @returns {import("@tanstack/react-query").QueryOptions<DataDashboardManagementUser>} Objek opsi query.
 */
const getDataDashboardManageTeamQueryOptions = () => {
  return queryOptions({
    queryKey: getDataDashboardManageTeamQueryKey(),
    queryFn: getDataDashboardManageTeam,
  });
};

/**
 * @typedef {object} useGetDataDashboardManageTeamParams
 * @property {QueryConfig<typeof getDataDashboardManageTeam>} [queryOptions] - Opsi konfigurasi TanStack Query tambahan atau untuk menimpa opsi standar.
 */
type useGetDataDashboardManageTeamParams = {
  queryOptions?: QueryConfig<typeof getDataDashboardManageTeam>;
};

/**
 * Hook kustom TanStack Query untuk memuat data dashboard manajemen tim.
 *
 * @function useGetDataDashboardManageTeam
 * @param {useGetDataDashboardManageTeamParams} [params={}] - Parameter yang memungkinkan penyesuaian opsi query.
 * @returns {import("@tanstack/react-query").UseQueryResult<DataDashboardManagementUser>} Hasil dari hook useQuery, termasuk data, status loading, dan error.
 *
 * @example
 * // Penggunaan dasar
 * const { data, isLoading } = useGetDataDashboardManageTeam();
 *
 * @example
 * // Mengatur staleTime khusus
 * const { data: teamData } = useGetDataDashboardManageTeam({
 * queryOptions: {
 * staleTime: 5 * 60 * 1000, // Data dianggap segar selama 5 menit
 * },
 * });
 */
export const useGetDataDashboardManageTeam = (params: useGetDataDashboardManageTeamParams = {}) => {
  return useQuery({
    ...getDataDashboardManageTeamQueryOptions(),
    ...params.queryOptions,
  });
};
