import { axiosPublic } from "@/lib/axios-public";
import { PaginatedApiResponse } from "@/types/api-response";
import { ProjectMinimalInfo } from "../types";

type ProjectResponse = PaginatedApiResponse<ProjectMinimalInfo[]>;

interface GetProjectsParams {
  search?: string;
  limit?: string;
  sort_by?: "created_at" | "updated_at" | "launch_year";
  sort_order?: "asc" | "desc";
}

export const getProjects = async ({ limit, search, sort_by, sort_order }: GetProjectsParams) => {
  const response = await axiosPublic.get<ProjectResponse>("/projects", {
    params: {
      search,
      per_page: limit,
      sort_by,
      sort_order,
    },
  });
  return response.data;
};
