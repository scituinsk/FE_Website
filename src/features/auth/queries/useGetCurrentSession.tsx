import apiClient from "@/lib/axios";
import { QueryConfig } from "@/lib/query-client";
import { ApiResponse } from "@/types/api-response";
import { queryOptions, useQuery } from "@tanstack/react-query";
export type CurrentSession = {
  userId: string;
  name: string;
  username: string;
  avatar: string | null;
  role: "USER" | "ADMIN";
};

export const getCurrentSession = async () => {
  const response = await apiClient.get<ApiResponse<CurrentSession>>("/auth/session");
  return response.data.data;
};

export const getCurrentSessionQueryKey = () => ["current-session"];

const getCurrentSessionQueryOptions = () => {
  return queryOptions({
    queryKey: getCurrentSessionQueryKey(),
    queryFn: getCurrentSession,
  });
};

type useGetCurrentSessionParams = {
  queryOptions?: QueryConfig<typeof getCurrentSession>;
};

export const useGetCurrentSession = (params: useGetCurrentSessionParams = {}) => {
  return useQuery({
    ...getCurrentSessionQueryOptions(),
    ...params.queryOptions,
  });
};
