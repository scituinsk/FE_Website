import { useMutation, useQueryClient } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { MutationConfig } from "@/lib/query-client";
import { ApiResponse } from "@/types/api-response";
import { getUsersQueryKey } from "./useGetUsers";

/**
 * Fungsi untuk menghapus pengguna melalui API.
 * Fungsi ini mengirimkan permintaan DELETE ke endpoint "/auth/users/:userId".
 *
 * @async
 * @function deleteUser
 * @param {string} userId - ID pengguna yang akan dihapus.
 * @returns {Promise<void>}
 */
export const deleteUser = async (userId: string) => {
  const response = await apiClient.delete<ApiResponse<void>>(`/auth/users/${userId}`);
  return response.data.data;
};

/**
 * @typedef {object} useDeleteUserParams
 * @property {MutationConfig<typeof deleteUser>} [mutationConfig] - Opsi konfigurasi TanStack Query Mutation tambahan.
 */
type useDeleteUserParams = {
  mutationConfig?: MutationConfig<typeof deleteUser>;
};

/**
 * Hook kustom TanStack Query untuk menghapus pengguna.
 * Hook ini secara otomatis akan me-refresh daftar pengguna setelah berhasil menghapus user.
 *
 * @function useDeleteUser
 * @param {useDeleteUserParams} [params={}] - Parameter yang memungkinkan penyesuaian opsi mutasi.
 * @returns {import("@tanstack/react-query").UseMutationResult<void, Error, string>} Hasil dari hook useMutation.
 *
 * @example
 * const { mutate: deleteUser, isPending } = useDeleteUser({
 *   mutationConfig: {
 *     onSuccess: () => {
 *       toast.success("User berhasil dihapus!");
 *     }
 *   }
 * });
 */
export const useDeleteUser = (params: useDeleteUserParams = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getUsersQueryKey() });
    },
    ...params.mutationConfig,
  });
};
