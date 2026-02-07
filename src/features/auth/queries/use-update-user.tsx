import { useMutation, useQueryClient } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { MutationConfig } from "@/lib/query-client";
import { ApiResponse } from "@/types/api-response";
import { UpdateUserRequest, User } from "@/types/user";
import { getUsersQueryKey } from "./use-get-users";

type UpdateUserParams = {
  userId: number;
  data: UpdateUserRequest;
};

export const updateUser = async ({ userId, data }: UpdateUserParams) => {
  const response = await apiClient.patch<ApiResponse<User>>(`/admin/users`, {
    userId,
    ...data,
  });
  return response.data.data;
};

type useUpdateUserParams = {
  mutationConfig?: MutationConfig<typeof updateUser>;
};

export const useUpdateUser = (params: useUpdateUserParams = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getUsersQueryKey() });
    },
    ...params.mutationConfig,
  });
};
