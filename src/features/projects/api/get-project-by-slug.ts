import { axiosPublic } from "@/lib/axios-public";
import { ApiResponse } from "@/types/api-response";
import { ProjectFullInformation } from "../types";

export const getProjectBySlug = async (slug: string) => {
  const response = await axiosPublic.get<ApiResponse<ProjectFullInformation>>(`/projects/slug/${slug}`);
  return response.data.data;
};
