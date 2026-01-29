import { axiosPublic } from "@/lib/axios-public";
import { ApiResponse } from "@/types/api-response";
import { ProjectFullInformation } from "../types";
import { cache } from "react";

export const getProjectBySlug = cache(async (slug: string) => {
  const response = await axiosPublic.get<ApiResponse<ProjectFullInformation>>(`/projects/${slug}`);
  return response.data.data;
});
