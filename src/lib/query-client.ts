import { isServer, QueryClient, UseMutationOptions } from "@tanstack/react-query";

/**
 * Fungsi pembantu (helper) untuk membuat instance QueryClient baru dengan defaultOptions yang ditentukan.
 *
 * @function makeQueryClient
 * @returns {QueryClient} Instance QueryClient baru.
 */
function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // Dengan SSR (Server-Side Rendering), kita mengatur staleTime > 0 (60 detik)
        // untuk mencegah refetching segera di sisi klien setelah hidrasi.
        staleTime: 60 * 1000,
        // Menonaktifkan retry secara default, dapat ditimpa di setiap query.
        retry: false,
      },
    },
  });
}

/**
 * Variabel untuk menyimpan instance QueryClient di sisi browser (client).
 * Digunakan untuk memastikan hanya ada satu instance QueryClient di seluruh aplikasi klien.
 *
 * @type {QueryClient | undefined}
 */
let browserQueryClient: QueryClient | undefined = undefined;

/**
 * Fungsi untuk mendapatkan instance QueryClient yang tepat, tergantung lingkungan (Server atau Browser).
 * - Di sisi Server, selalu membuat instance baru untuk menghindari berbagi status antar permintaan.
 * - Di sisi Browser, menggunakan instance yang sudah ada (`browserQueryClient`) atau membuat yang baru jika belum ada.
 *
 * @function getQueryClient
 * @returns {QueryClient} Instance QueryClient yang sesuai.
 */
function getQueryClient() {
  if (isServer) {
    // Server: selalu buat klien query baru
    return makeQueryClient();
  } else {
    // Browser: buat klien baru jika belum ada
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

/**
 * Instance QueryClient yang digunakan di seluruh aplikasi.
 * Pengambilan instance klien diatur oleh `getQueryClient()`.
 *
 * Catatan: Hindari penggunaan `useState` untuk inisialisasi di root karena dapat
 * menyebabkan client dibuang jika terjadi suspensi.
 *
 * @constant {QueryClient} queryClient
 */
export const queryClient = getQueryClient();

/**
 * Utility Type: Mendapatkan tipe data yang dikembalikan oleh Promise dari fungsi asynchronous.
 *
 * @typedef {Awaited<ReturnType<FnType>>} ApiFnReturnType
 * @template FnType - Tipe fungsi async (misalnya, fungsi fetcher API).
 */
export type ApiFnReturnType<FnType extends (...args: any) => Promise<any>> = Awaited<ReturnType<FnType>>;

/**
 * Utility Type: Tipe konfigurasi untuk opsi `useQuery`, mengecualikan `queryKey` dan `queryFn`
 * karena properti ini sudah didefinisikan dalam fungsi `queryOptions`.
 *
 * @typedef {Omit<ReturnType<T>, "queryKey" | "queryFn">} QueryConfig
 * @template T - Tipe fungsi yang mengembalikan objek `queryOptions`.
 */
export type QueryConfig<T extends (...args: any[]) => any> = Omit<ReturnType<T>, "queryKey" | "queryFn">;

/**
 * Utility Type: Tipe konfigurasi untuk opsi `useMutation`,
 * menyesuaikan tipe `UseMutationOptions` TanStack Query agar sesuai dengan
 * tipe pengembalian (success data), error, dan parameter (payload) dari fungsi mutasi API (`MutationFnType`).
 *
 * @typedef {UseMutationOptions<ApiFnReturnType<MutationFnType>, Error, Parameters<MutationFnType>[0]>} MutationConfig
 * @template MutationFnType - Tipe fungsi mutasi async (misalnya, fungsi post/put API).
 */
export type MutationConfig<MutationFnType extends (...args: any) => Promise<any>> = UseMutationOptions<
  ApiFnReturnType<MutationFnType>,
  Error,
  Parameters<MutationFnType>[0]
>;
