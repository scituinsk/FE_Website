import { queryOptions, useQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";

import apiClient from "@/lib/axios";
import { QueryConfig } from "@/lib/query-client";

import { Project } from "@/types/project";
import { ApiResponse } from "@/types/api-response";

export interface GetProjectByIdParams {
  projectId: string;
}

export const getProjectById = async (params: GetProjectByIdParams) => {
  try {
    const response = await apiClient.get<ApiResponse<Project>>(`/projects/${params.projectId}`);
    return response.data.data;
  } catch (error: any) {
    if (error.response?.status === 404 || error.response?.status === 400) {
      notFound();
    }
    // Let error boundary handle 500 and other errors
    throw error;
  }
};

export const getProjectByIdQueryKey = (params: GetProjectByIdParams) => {
  return [params] as const;
};

export const getProjectByIdQueryOptions = (params: GetProjectByIdParams) => {
  return queryOptions({
    queryKey: getProjectByIdQueryKey(params),
    queryFn: () => getProjectById(params),
    throwOnError: true,
  });
};

type UseGetProjectByIdParams = {
  params: GetProjectByIdParams;
  queryOptions?: QueryConfig<typeof getProjectById>;
};

export const useGetProjectById = (config: UseGetProjectByIdParams) => {
  const { params, queryOptions } = config;

  return useQuery({
    ...getProjectByIdQueryOptions(params),
    ...queryOptions,
  });
};
