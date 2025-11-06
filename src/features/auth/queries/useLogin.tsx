import { useMutation } from "@tanstack/react-query";

import apiClient from "@/lib/axios";
import { MutationConfig } from "@/lib/query-client";

import { ApiResponse } from "@/types/api-response";

type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};

type LoginRequest = {
  username: string;
  password: string;
};

export const login = async (loginRequest: LoginRequest) => {
  const response = await apiClient.post<ApiResponse<LoginResponse>>("/auth/signin", loginRequest);
  return response.data.data;
};

type useLoginParams = {
  mutationConfig?: MutationConfig<typeof login>;
};

export const useLogin = (params: useLoginParams = {}) => {
  return useMutation({
    mutationFn: login,
    ...params.mutationConfig,
  });
};
