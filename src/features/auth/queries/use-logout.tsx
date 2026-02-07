import { useMutation } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { MutationConfig } from "@/lib/query-client";

import { ApiResponse } from "@/types/api-response";

/**
 * @typedef {null} LogoutResponse
 * Respon dari API setelah logout biasanya kosong atau null, hanya menandakan keberhasilan.
 */
type LogoutResponse = null;

/**
 * Fungsi untuk melakukan permintaan logout (keluar) pengguna ke API.
 * Fungsi ini mengirimkan permintaan POST ke endpoint "/auth/signout".
 *
 * @async
 * @function logout
 * @returns {Promise<LogoutResponse>} Mengembalikan null atau data kosong jika berhasil.
 */
export const logout = async () => {
  const response = await apiClient.post<ApiResponse<LogoutResponse>>("/auth/signout");
  return response.data.data;
};

/**
 * @typedef {object} useLogoutParams
 * @property {MutationConfig<typeof logout>} [mutationConfig] - Opsi konfigurasi TanStack Query Mutation tambahan atau untuk menimpa opsi standar.
 */
type useLogoutParams = {
  mutationConfig?: MutationConfig<typeof logout>;
};

/**
 * Hook kustom TanStack Query untuk menangani proses logout pengguna.
 * Hook ini sangat berguna untuk membersihkan sesi di sisi server dan menjalankan aksi pembersihan lokal (seperti menghapus token dan mengarahkan pengguna).
 *
 * @function useLogout
 * @param {useLogoutParams} [params={}] - Parameter yang memungkinkan penyesuaian opsi mutasi, seperti `onSuccess` atau `onError`.
 * @returns {import("@tanstack/react-query").UseMutationResult<LogoutResponse, Error, void>} Hasil dari hook useMutation.
 *
 * @example
 * // Penggunaan hook di komponen:
 * const queryClient = useQueryClient();
 * const { mutate: executeLogout, isPending } = useLogout({
 * mutationConfig: {
 * onSuccess: () => {
 * // Aksi setelah berhasil logout (misalnya, hapus token lokal, bersihkan cache query, dan redirect)
 * localStorage.removeItem('authToken');
 * queryClient.clear();
 * console.log("Pengguna berhasil keluar.");
 * },
 * }
 * });
 *
 * // Panggilan mutasi:
 * // executeLogout();
 */
export const useLogout = (params: useLogoutParams = {}) => {
  return useMutation({
    mutationFn: logout,
    ...params.mutationConfig,
  });
};
