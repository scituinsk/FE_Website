import axios, { AxiosInstance } from "axios";

/**
 * Ini adalah instance Axios yang dikonfigurasi untuk berkomunikasi dengan API backend.
 * Instance ini mendefinisikan pengaturan dasar untuk semua permintaan HTTP yang akan dikirim
 * oleh aplikasi (seperti Base URL, Headers, dan penanganan Cookie).
 *
 * @type {AxiosInstance}
 * @property {string} baseURL - URL dasar untuk permintaan API. Nilainya diambil dari
 * variabel lingkungan `NEXT_PUBLIC_BACKEND_URL`, atau default ke "http://localhost:2000" jika tidak tersedia.
 * @property {boolean} withCredentials - Mengizinkan pengiriman cookie dan kredensial otentikasi
 * lainnya (seperti header Authorizaton) secara cross-domain. Ini penting untuk sesi berbasis cookie.
 * @property {string} adapter - Menggunakan adapter "fetch" untuk memanfaatkan standar Web Fetch API.
 * @property {object} headers - Header HTTP default.
 * @property {string} headers.Content-Type - Secara default diatur ke "application/json".
 *
 * @example
 * // Penggunaan di file lain:
 * import apiClient from "@/lib/axios";
 *
 * // Melakukan permintaan GET:
 * const response = await apiClient.get('/users/me');
 *
 * // Melakukan permintaan POST:
 * const response = await apiClient.post('/data', { data: 'payload' });
 */
const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || "https://api.scituinsk.com",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
