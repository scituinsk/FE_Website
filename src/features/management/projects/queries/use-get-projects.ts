import { queryOptions, useQuery } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { QueryConfig } from "@/lib/query-client";
import { PaginatedData } from "@/types/api-response";
import { Project } from "@/types/project";

export interface GetProjectsParams {
  page?: number;
  search?: string;
  per_page?: string;
  sort_by?: string;
  sort_dir?: string;
}

export const getProjects = async (params: GetProjectsParams = {}) => {
  const { page = 1, search = "", per_page = 10 } = params;

  const response = await apiClient.get<PaginatedData<Project>>("/projects", {
    params: {
      page,
      search,
      per_page,
    },
  });

  return response.data;
};

export const getProjectsQueryKey = (params: GetProjectsParams = {}) => {
  return ["projects", params] as const;
};

export const getProjectsQueryOptions = (params: GetProjectsParams = {}) => {
  return queryOptions({
    queryKey: getProjectsQueryKey(params),
    queryFn: () => getProjects(params),
  });
};

type UseGetProjectsParams = {
  params?: GetProjectsParams;
  queryOptions?: QueryConfig<typeof getProjects>;
};

export const useGetProjects = (config: UseGetProjectsParams = {}) => {
  const { params = {}, queryOptions } = config;

  return useQuery({
    ...getProjectsQueryOptions(params),
    ...queryOptions,
  });
};
