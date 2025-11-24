import { useMutation, useQueryClient } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { MutationConfig } from "@/lib/query-client";
import { ApiResponse } from "@/types/api-response";
import { UpdateUserRequest, User } from "@/types/user";
import { getUsersQueryKey } from "./useGetUsers";

/**
 * @typedef {object} UpdateUserParams
 * @property {string} userId - ID pengguna yang akan diupdate.
 * @property {UpdateUserRequest} data - Data yang akan diupdate.
 */
type UpdateUserParams = {
  userId: number;
  data: UpdateUserRequest;
};

/**
 * Fungsi untuk mengupdate data pengguna melalui API.
 * Fungsi ini mengirimkan permintaan PUT/PATCH ke endpoint "/auth/users/:userId".
 *
 * @async
 * @function updateUser
 * @param {UpdateUserParams} params - Parameter yang berisi userId dan data update.
 * @returns {Promise<User>} Data pengguna yang telah diupdate.
 */
export const updateUser = async ({ userId, data }: UpdateUserParams) => {
  const response = await apiClient.patch<ApiResponse<User>>(`/users`, {
    userId,
    ...data,
  });
  return response.data.data;
};

/**
 * @typedef {object} useUpdateUserParams
 * @property {MutationConfig<typeof updateUser>} [mutationConfig] - Opsi konfigurasi TanStack Query Mutation tambahan.
 */
type useUpdateUserParams = {
  mutationConfig?: MutationConfig<typeof updateUser>;
};

/**
 * Hook kustom TanStack Query untuk mengupdate data pengguna.
 * Hook ini secara otomatis akan me-refresh daftar pengguna setelah berhasil update.
 *
 * @function useUpdateUser
 * @param {useUpdateUserParams} [params={}] - Parameter yang memungkinkan penyesuaian opsi mutasi.
 * @returns {import("@tanstack/react-query").UseMutationResult<User, Error, UpdateUserParams>} Hasil dari hook useMutation.
 *
 * @example
 * const { mutate: updateUser, isPending } = useUpdateUser({
 *   mutationConfig: {
 *     onSuccess: () => {
 *       toast.success("User berhasil diupdate!");
 *     }
 *   }
 * });
 */
export const useUpdateUser = (params: useUpdateUserParams = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getUsersQueryKey() });
    },
    ...params.mutationConfig,
  });
};
