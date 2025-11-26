import { queryOptions, useQuery } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { QueryConfig } from "@/lib/query-client";
import { TechStackApiResponse } from "@/types/tech-stack";

export interface GetTechStacksParams {
  search?: string;
}

export const getTechStacks = async (params: GetTechStacksParams = {}) => {
  const { search = "" } = params;

  const response = await apiClient.get<TechStackApiResponse>("/projects/tech-stacks/lists", {
    params: {
      search,
    },
  });

  return response.data;
};

export const getTechStacksQueryKey = (params: GetTechStacksParams = {}) => {
  return ["tech-stacks", params] as const;
};

export const getTechStacksQueryOptions = (params: GetTechStacksParams = {}) => {
  return queryOptions({
    queryKey: getTechStacksQueryKey(params),
    queryFn: () => getTechStacks(params),
  });
};

type UseGetTechStacksParams = {
  params?: GetTechStacksParams;
  queryOptions?: QueryConfig<typeof getTechStacksQueryOptions>;
};

export const useGetTechStacks = (config: UseGetTechStacksParams = {}) => {
  const { params = {}, queryOptions } = config;

  return useQuery({
    ...getTechStacksQueryOptions(params),
    ...queryOptions,
  });
};
