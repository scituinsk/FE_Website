import { axiosPublic } from "@/lib/axios-public";
import { PaginatedApiResponse } from "@/types/api-response";
import { ProjectMinimalInfo } from "../types";

type ProjectResponse = PaginatedApiResponse<ProjectMinimalInfo[]>;

export const getProjects = async (search?: string, limit?: string) => {
  const response = await axiosPublic.get<ProjectResponse>("/projects", {
    params: {
      search,
      limit,
    },
  });
  return response.data;
};
