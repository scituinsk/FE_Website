import { useMutation, useQueryClient } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { MutationConfig } from "@/lib/query-client";
import { ApiResponse } from "@/types/api-response";
import { CreateUserRequest, User } from "@/types/user";
import { getUsersQueryKey } from "./useGetUsers";

export const createUser = async (data: CreateUserRequest) => {
  const response = await apiClient.post<ApiResponse<User>>("/users", data);
  return response.data.data;
};

type useCreateUserParams = {
  mutationConfig?: MutationConfig<typeof createUser>;
};

export const useCreateUser = (params: useCreateUserParams = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getUsersQueryKey() });
    },
    ...params.mutationConfig,
  });
};
