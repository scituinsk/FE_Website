import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import apiClient from "@/lib/axios";
import { MutationConfig } from "@/lib/query-client";
import { ApiResponse } from "@/types/api-response";
import { Project } from "@/types/project";

export type UseUpdateVisibility = {
  project_ids: number[];
  visibility: "PUBLIC" | "PRIVATE";
};

export const updateVisibility = async (data: UseUpdateVisibility) => {
  const response = await apiClient.post<ApiResponse<Project>>("/admin/projects/visibility", data);
  return response.data.data;
};

type UseUpdateVisibilityParams = {
  mutationConfig?: MutationConfig<typeof updateVisibility>;
};

export const useUpdateVisibility = (params: UseUpdateVisibilityParams = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    ...params.mutationConfig,
    mutationFn: updateVisibility,
    onSuccess: (...args) => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      toast.success("Visibilitas proyek berhasil diperbarui");

      params.mutationConfig?.onSuccess?.(...args);
    },
    onError: () => {
      toast.error("Gagal memperbarui visibilitas proyek");
    },
  });
};
