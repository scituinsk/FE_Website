import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

/**
 * Fungsi utilitas untuk menggabungkan dan membersihkan string class CSS.
 *
 * Fungsi ini mengkombinasikan fungsionalitas dari dua pustaka:
 * 1. **clsx**: Menggabungkan berbagai tipe input class (string, array, objek) menjadi satu string class yang bersih.
 * 2. **tailwind-merge**: Menyaring (purging) class Tailwind yang berlebihan atau bertentangan (misalnya, jika Anda memiliki "p-4" dan "p-8",
 * fungsi ini akan memastikan hanya "p-8" yang tersisa, sesuai dengan urutan yang benar).
 *
 * @function cn
 * @param {...ClassValue} inputs - Array atau parameter yang dapat berisi string, array string, atau objek (seperti yang diterima oleh `clsx`).
 * @returns {string} String class CSS yang telah digabungkan dan dibersihkan, siap digunakan oleh Tailwind CSS.
 *
 * @example
 * // Penggunaan dasar:
 * const className = cn("text-red-500", "font-bold");
 * // Hasil: "text-red-500 font-bold"
 *
 * @example
 * // Contoh membersihkan konflik Tailwind:
 * const className = cn("bg-red-500", "p-4", "bg-blue-500", "p-8");
 * // twMerge akan menangani konflik:
 * // Hasil: "p-8 bg-blue-500" (bg-blue mengganti bg-red, p-8 mengganti p-4)
 *
 * @example
 * // Penggunaan bersyarat (conditional):
 * const isActive = true;
 * const className = cn("flex", isActive && "text-white", !isActive && "text-gray-400");
 * // Hasil (jika isActive true): "flex text-white"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
