import { useMutation, useQueryClient } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { MutationConfig } from "@/lib/query-client";
import { ApiResponse } from "@/types/api-response";
import { CreateUserRequest, User } from "@/types/user";
import { getUsersQueryKey } from "./useGetUsers";

/**
 * Fungsi untuk membuat pengguna baru melalui API.
 * Fungsi ini mengirimkan permintaan POST ke endpoint "/auth/signup".
 *
 * @async
 * @function createUser
 * @param {CreateUserRequest} data - Data pengguna baru yang akan dibuat.
 * @returns {Promise<User>} Data pengguna yang telah dibuat.
 */
export const createUser = async (data: CreateUserRequest) => {
  const response = await apiClient.post<ApiResponse<User>>("/auth/signup", data);
  return response.data.data;
};

/**
 * @typedef {object} useCreateUserParams
 * @property {MutationConfig<typeof createUser>} [mutationConfig] - Opsi konfigurasi TanStack Query Mutation tambahan.
 */
type useCreateUserParams = {
  mutationConfig?: MutationConfig<typeof createUser>;
};

/**
 * Hook kustom TanStack Query untuk membuat pengguna baru.
 * Hook ini secara otomatis akan me-refresh daftar pengguna setelah berhasil membuat user.
 *
 * @function useCreateUser
 * @param {useCreateUserParams} [params={}] - Parameter yang memungkinkan penyesuaian opsi mutasi.
 * @returns {import("@tanstack/react-query").UseMutationResult<User, Error, CreateUserRequest>} Hasil dari hook useMutation.
 *
 * @example
 * const { mutate: createUser, isPending } = useCreateUser({
 *   mutationConfig: {
 *     onSuccess: () => {
 *       toast.success("User berhasil dibuat!");
 *     }
 *   }
 * });
 */
export const useCreateUser = (params: useCreateUserParams = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getUsersQueryKey() });
    },
    ...params.mutationConfig,
  });
};
