import { keepPreviousData, queryOptions, useQuery } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { QueryConfig } from "@/lib/query-client";
import { PaginatedData } from "@/types/api-response";
import { User } from "@/types/user";

export interface GetUsersParams {
  page?: number;
  search?: string;
  per_page?: string;
  sort_by?: string;
  sort_dir?: string;
}

export const getUsers = async (params: GetUsersParams = {}) => {
  const { page = 1, search = "", per_page = 10, sort_by, sort_dir } = params;

  const response = await apiClient.get<PaginatedData<User>>("/admin/users", {
    params: {
      page,
      search,
      per_page,
      sort_by,
      sort_dir,
    },
  });

  return response.data;
};

export const getUsersQueryKey = (params: GetUsersParams = {}) => {
  return ["users", params] as const;
};

export const getUsersQueryOptions = (params: GetUsersParams = {}) => {
  return queryOptions({
    queryKey: getUsersQueryKey(params),
    queryFn: () => getUsers(params),
  });
};

type UseGetUsersParams = {
  params?: GetUsersParams;
  queryOptions?: QueryConfig<typeof getUsers>;
};

export const useGetUsers = (config: UseGetUsersParams = {}) => {
  const { params = {}, queryOptions } = config;

  return useQuery({
    ...getUsersQueryOptions(params),
    ...queryOptions,
    placeholderData: keepPreviousData,
  });
};
