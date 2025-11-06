import { useMutation } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { MutationConfig } from "@/lib/query-client";

import { ApiResponse } from "@/types/api-response";

type LogoutResponse = null;

export const logout = async () => {
  const response = await apiClient.post<ApiResponse<LogoutResponse>>("/auth/signout");
  return response.data.data;
};

type useLogoutParams = {
  mutationConfig?: MutationConfig<typeof logout>;
};

export const useLogout = (params: useLogoutParams = {}) => {
  return useMutation({
    mutationFn: logout,
    ...params.mutationConfig,
  });
};
