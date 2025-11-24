export interface ApiResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}

export interface PaginationMeta {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
}

export interface PaginatedApiResponse<T> extends ApiResponse<T> {
  pagination: PaginationMeta;
}

// Utility type untuk mengubah ApiResponse biasa menjadi PaginatedApiResponse
export type WithPagination<T> = PaginatedApiResponse<T>;

// Utility type untuk array data dengan pagination
export type PaginatedData<T> = PaginatedApiResponse<T[]>;

// Utility type untuk optional pagination
export type MaybePaginated<T> = ApiResponse<T> | PaginatedApiResponse<T>;
