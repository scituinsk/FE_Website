import { useMutation, useQueryClient } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { MutationConfig } from "@/lib/query-client";
import { ApiResponse } from "@/types/api-response";
import { getUsersQueryKey } from "./use-get-users";

export const deleteUser = async (userId: number) => {
  const response = await apiClient.delete<ApiResponse<void>>(`/admin/users/${userId}`);
  return response.data.data;
};

type useDeleteUserParams = {
  mutationConfig?: MutationConfig<typeof deleteUser>;
};

export const useDeleteUser = (params: useDeleteUserParams = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getUsersQueryKey() });
    },
    ...params.mutationConfig,
  });
};
