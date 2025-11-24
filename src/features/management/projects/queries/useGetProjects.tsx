import { queryOptions, useQuery } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { QueryConfig } from "@/lib/query-client";
import { ApiResponse } from "@/types/api-response";

type Project = {
  id: number;
  title: string;
  description: string;
  about: any;
  slug: string;
  duration: any;
  launchDate: any;
  demoUrl: string;
  status: string;
  technologies: {
    id: number;
    name: string;
    logoUrl: string;
    createdAt: string;
    updatedAt: string;
  }[];
  images: string[];
  createdAt: string;
  updatedAt: string;
};

export const getProjects = async () => {
  const response = await apiClient.get<ApiResponse<Project[]>>("/projects");
  return response.data.data;
};

export const getProjectsQueryKey = () => ["projects"];

const getProjectsQueryOptions = () => {
  return queryOptions({
    queryKey: getProjectsQueryKey(),
    queryFn: getProjects,
  });
};

type useGetProjectsParams = {
  queryOptions?: QueryConfig<typeof getProjects>;
};

export const useGetProjects = (params: useGetProjectsParams = {}) => {
  return useQuery({
    ...getProjectsQueryOptions(),
    ...params.queryOptions,
  });
};
