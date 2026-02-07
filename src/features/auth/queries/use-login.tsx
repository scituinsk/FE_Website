import { useMutation } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { MutationConfig } from "@/lib/query-client";

import { ApiResponse } from "@/types/api-response";

/**
 * @typedef {object} LoginResponse
 * @property {string} accessToken - Token akses JWT (JSON Web Token) yang digunakan untuk otentikasi permintaan selanjutnya.
 * @property {string} refreshToken - Token penyegaran yang digunakan untuk mendapatkan token akses baru tanpa harus login ulang.
 */
type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};

/**
 * @typedef {object} LoginRequest
 * @property {string} email - email pengguna untuk login.
 * @property {string} password - Kata sandi pengguna.
 */
type LoginRequest = {
  email: string;
  password: string;
};

/**
 * Fungsi untuk melakukan permintaan login pengguna ke API.
 * Fungsi ini mengirimkan permintaan POST ke endpoint "/auth/signin" dengan kredensial pengguna.
 *
 * @async
 * @function login
 * @param {LoginRequest} loginRequest - Objek yang berisi username dan password.
 * @returns {Promise<LoginResponse>} Objek yang berisi accessToken dan refreshToken.
 */
export const login = async (loginRequest: LoginRequest) => {
  const response = await apiClient.post<ApiResponse<LoginResponse>>("/auth/signin", loginRequest);
  return response.data.data;
};

/**
 * @typedef {object} useLoginParams
 * @property {MutationConfig<typeof login>} [mutationConfig] - Opsi konfigurasi TanStack Query Mutation tambahan atau untuk menimpa opsi standar.
 */
type useLoginParams = {
  mutationConfig?: MutationConfig<typeof login>;
};

/**
 * Hook kustom TanStack Query untuk menangani proses otentikasi (login) pengguna.
 * Hook ini dapat digunakan untuk menjalankan fungsi `login` dan mengelola status mutasi (loading, error, success).
 *
 * @function useLogin
 * @param {useLoginParams} [params={}] - Parameter yang memungkinkan penyesuaian opsi mutasi, seperti `onSuccess` atau `onError`.
 * @returns {import("@tanstack/react-query").UseMutationResult<LoginResponse, Error, LoginRequest>} Hasil dari hook useMutation.
 *
 * @example
 * // Penggunaan hook di komponen:
 * const { mutate: executeLogin, isPending } = useLogin({
 * mutationConfig: {
 * onSuccess: (data) => {
 * console.log("Login berhasil! Token:", data.accessToken);
 * },
 * }
 * });
 *
 * // Panggilan mutasi:
 * // executeLogin({ username: "contohuser", password: "password123" });
 */
export const useLogin = (params: useLoginParams = {}) => {
  return useMutation({
    mutationFn: login,
    ...params.mutationConfig,
  });
};
