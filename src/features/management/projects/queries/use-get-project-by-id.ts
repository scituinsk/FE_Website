import { queryOptions, useQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";

import apiClient from "@/lib/axios";
import { QueryConfig } from "@/lib/query-client";

import { ApiResponse } from "@/types/api-response";

export interface GetProjectByIdParams {
  projectId: string;
}

export interface DetailProject {
  id: number;
  title: string;
  description: string;
  about: string;
  slug: string;
  duration: string;
  launchYear: string;
  demoUrl: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  images: Image[];
  technologies: Technology[];
  challenges: Challenge[];
  keyFeatures: KeyFeature[];
  results: Result[];
  testimonials: Testimonial[];
}

interface Image {
  id: number;
  path: string;
  url: string;
  originalFileName: string;
  fileType: string;
  fileSize: number;
  isPrimary: boolean;
  isUsed: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Technology {
  id: number;
  name: string;
  logoUrl: string;
  createdAt: string;
  updatedAt: string;
}

interface Challenge {
  id: number;
  projectId: number;
  challenge: string;
  createdAt: string;
  updatedAt: string;
}

interface KeyFeature {
  id: number;
  projectId: number;
  feature: string;
  createdAt: string;
  updatedAt: string;
}

interface Result {
  id: number;
  projectId: number;
  result: string;
  createdAt: string;
  updatedAt: string;
}

interface Testimonial {
  id: number;
  projectId: number;
  name: string;
  role: string;
  avatarUrl: string;
  rating: number;
  testimonial: string;
  createdAt: string;
  updatedAt: string;
}

export const getProjectById = async (params: GetProjectByIdParams) => {
  try {
    const response = await apiClient.get<ApiResponse<DetailProject>>(`/admin/projects/${params.projectId}`);
    return response.data.data;
  } catch (error: any) {
    if (error.response?.status === 404 || error.response?.status === 400) {
      notFound();
    }
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
