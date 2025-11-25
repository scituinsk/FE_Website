import { useEffect, useState } from "react";

/**
 * Custom hook untuk debounce nilai input.
 * Menunda update nilai sampai user berhenti mengetik dalam delay yang ditentukan.
 *
 * @template T - Type dari value yang akan di-debounce
 * @param {T} value - Nilai yang akan di-debounce
 * @param {number} delay - Delay dalam milliseconds (default: 500ms)
 * @returns {T} Nilai yang sudah di-debounce
 *
 * @example
 * const [searchQuery, setSearchQuery] = useState("");
 * const debouncedSearch = useDebounce(searchQuery, 500);
 *
 * // debouncedSearch hanya akan update 500ms setelah user berhenti mengetik
 * useEffect(() => {
 *   // API call dengan debouncedSearch
 * }, [debouncedSearch]);
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Set timeout untuk update debounced value
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup: cancel timeout jika value berubah sebelum delay selesai
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
