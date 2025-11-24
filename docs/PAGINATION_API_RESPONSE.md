# Pagination API Response - Documentation

## Overview

Dokumentasi ini menjelaskan cara menggunakan utility types untuk API response dengan pagination yang telah dibuat.

## Type Utilities

### 1. `ApiResponse<T>` (Base Type)

Type dasar untuk response API tanpa pagination.

```typescript
export interface ApiResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}
```

**Contoh Response:**

```json
{
  "statusCode": 200,
  "message": "Success",
  "data": { ... }
}
```

### 2. `PaginationMeta`

Interface untuk metadata pagination.

```typescript
export interface PaginationMeta {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
}
```

### 3. `PaginatedApiResponse<T>`

Type untuk API response yang memiliki pagination.

```typescript
export interface PaginatedApiResponse<T> extends ApiResponse<T> {
  pagination: PaginationMeta;
}
```

**Contoh Response:**

```json
{
  "statusCode": 200,
  "message": "Success",
  "data": [...],
  "pagination": {
    "page": 1,
    "perPage": 10,
    "total": 100,
    "totalPages": 10
  }
}
```

### 4. Utility Types

#### `WithPagination<T>`

Alias untuk `PaginatedApiResponse<T>` - lebih deskriptif untuk penggunaan.

```typescript
export type WithPagination<T> = PaginatedApiResponse<T>;
```

#### `PaginatedData<T>`

Khusus untuk array data dengan pagination (use case paling umum).

```typescript
export type PaginatedData<T> = PaginatedApiResponse<T[]>;
```

**Contoh Penggunaan:**

```typescript
// Untuk list projects
const response: PaginatedData<Project>;

// Equivalent dengan:
const response: PaginatedApiResponse<Project[]>;
```

#### `MaybePaginated<T>`

Untuk endpoint yang bisa mengembalikan response dengan atau tanpa pagination.

```typescript
export type MaybePaginated<T> = ApiResponse<T> | PaginatedApiResponse<T>;
```

## Implementasi dengan React Query & Nuqs

### 1. Setup Query Function

```typescript
import { PaginatedData } from "@/types/api-response";
import { Project } from "@/types/project";

export interface GetProjectsParams {
  page?: number;
  search?: string;
  per_page?: number;
}

export const getProjects = async (params: GetProjectsParams = {}) => {
  const { page = 1, search = "", per_page = 10 } = params;

  const response = await apiClient.get<PaginatedData<Project>>("/projects", {
    params: { page, search, per_page },
  });

  return response.data;
};
```

### 2. Setup Query Hook

```typescript
export const useGetProjects = (config: UseGetProjectsParams = {}) => {
  const { params = {}, queryOptions } = config;

  return useQuery({
    queryKey: ["projects", params],
    queryFn: () => getProjects(params),
    ...queryOptions,
  });
};
```

### 3. Implementasi di Component dengan Nuqs

```typescript
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";
import { useGetProjects } from "../queries/useGetProjects";

export const ManagementProjectsPage = () => {
  // URL state management dengan nuqs
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [search, setSearch] = useQueryState("search", parseAsString.withDefault(""));

  // Fetch data dengan pagination
  const { data, isLoading } = useGetProjects({
    params: {
      page,
      search,
      per_page: 10,
    },
  });

  // Akses data dan pagination
  const projects = data?.data;
  const pagination = data?.pagination;

  return (
    <div>
      {/* Search Input */}
      <Input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1); // Reset ke page 1 saat search
        }}
      />

      {/* Display Projects */}
      <ProjectGrid
        projects={projects}
        isLoading={isLoading}
      />

      {/* Pagination Info */}
      {pagination && (
        <div>
          Showing {pagination.perPage * (pagination.page - 1) + 1} -{Math.min(pagination.perPage * pagination.page, pagination.total)} of{" "}
          {pagination.total}
        </div>
      )}

      {/* Pagination Controls */}
      {pagination && pagination.totalPages > 1 && (
        <Pagination>
          <PaginationPrevious
            onClick={() => setPage(Math.max(1, page - 1))}
            disabled={page === 1}
          />

          {/* Page numbers */}
          {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((pageNum) => (
            <PaginationLink
              key={pageNum}
              onClick={() => setPage(pageNum)}
              isActive={page === pageNum}
            >
              {pageNum}
            </PaginationLink>
          ))}

          <PaginationNext
            onClick={() => setPage(Math.min(pagination.totalPages, page + 1))}
            disabled={page === pagination.totalPages}
          />
        </Pagination>
      )}
    </div>
  );
};
```

## Contoh Use Cases

### Use Case 1: Simple List dengan Pagination

```typescript
// Query
const { data } = useGetProjects({
  params: { page: 1, per_page: 10 },
});

// Type: PaginatedData<Project>
// data.data -> Project[]
// data.pagination -> PaginationMeta
```

### Use Case 2: Search dengan Pagination

```typescript
const [search, setSearch] = useQueryState("search", parseAsString.withDefault(""));
const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));

const { data } = useGetProjects({
  params: { page, search, per_page: 10 },
});
```

### Use Case 3: Dynamic Per Page

```typescript
const [perPage, setPerPage] = useQueryState("per_page", parseAsInteger.withDefault(10));

const { data } = useGetProjects({
  params: { page, search, per_page: perPage },
});
```

## Keuntungan Menggunakan Nuqs

1. **URL Sync**: State tersimpan di URL, bisa di-share dan di-bookmark
2. **Browser Navigation**: Support browser back/forward
3. **Type Safe**: Parsing otomatis dengan type safety
4. **SSR Friendly**: Bekerja dengan Next.js App Router
5. **Minimal Re-render**: Hanya re-render saat state berubah

## API Endpoint Format

```
GET /projects?page=1&search=web&per_page=10
```

**Expected Response:**

```json
{
  "statusCode": 200,
  "message": "Success",
  "data": [
    {
      "id": 15,
      "title": "ModaWave E-Commerce",
      "description": "Website e-commerce fashion modern...",
      "slug": "modawave-ecommerce",
      "demoUrl": "https://shop.modawave.com",
      "status": "BETA_LAUNCH",
      "technologies": [...],
      "images": [...]
    }
  ],
  "pagination": {
    "page": 1,
    "perPage": 10,
    "total": 1,
    "totalPages": 1
  }
}
```

## Tips & Best Practices

1. **Reset Page on Search**: Selalu reset page ke 1 saat melakukan search
2. **Loading States**: Tampilkan loading indicator saat fetching
3. **Empty States**: Berikan feedback jika tidak ada data
4. **Error Handling**: Handle error response dengan proper message
5. **Debounce Search**: Gunakan debounce untuk search input (optional)
6. **Cache Management**: React Query otomatis handle caching berdasarkan query key

## Debugging

### Melihat Current State

```typescript
console.log("Current Page:", page);
console.log("Search Query:", search);
console.log("Total Items:", data?.pagination?.total);
console.log("Total Pages:", data?.pagination?.totalPages);
```

### Query Key untuk Cache

```typescript
// Query key akan berbeda untuk setiap kombinasi params
["projects", { page: 1, search: "web", per_page: 10 }][("projects", { page: 2, search: "web", per_page: 10 })][
  ("projects", { page: 1, search: "mobile", per_page: 10 })
];
```

## Migration dari Code Lama

### Before (useState)

```typescript
const [searchQuery, setSearchQuery] = useState("");
const [page, setPage] = useState(1);

// State tidak sync dengan URL
// Tidak bisa share/bookmark
// Manual handling semua state
```

### After (nuqs)

```typescript
const [search, setSearch] = useQueryState("search", parseAsString.withDefault(""));
const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));

// State sync dengan URL
// Bisa share/bookmark
// Browser back/forward works
// Type safe
```

## Referensi

- [nuqs Documentation](https://nuqs.47ng.com/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Next.js App Router](https://nextjs.org/docs/app)
