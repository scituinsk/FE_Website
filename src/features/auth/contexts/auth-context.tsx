"use client";

import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { createContext, useContext, useLayoutEffect, useRef, useState } from "react";

import apiClient from "@/lib/axios";

import { Skeleton } from "@/components/ui/skeleton";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarAdminSkeleton } from "@/features/management/common/sidebar-admin-skeleton";
import { CurrentSession, useGetCurrentSession } from "../queries/useGetCurrentSession";

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

interface QueueItem {
  resolve: (value?: unknown) => void;
  reject: (error?: unknown) => void;
}

interface AuthContextType {
  user: CurrentSession | null;
  isLoggedIn: boolean;
  isAuthError: boolean;
  resetAuthError: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoggedIn: false,
  isAuthError: false,
  resetAuthError: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { data: session, isLoading } = useGetCurrentSession();
  const [isAuthError, setIsAuthError] = useState(false);

  // Refs untuk menghindari multiple interceptor registration
  const interceptorSetup = useRef(false);
  const isRefreshing = useRef(false);
  const failedQueue = useRef<QueueItem[]>([]);

  // Track apakah user pernah login - ini key untuk mencegah refresh yang tidak perlu
  const hasEverBeenAuthenticated = useRef(false);

  const resetAuthError = () => {
    setIsAuthError(false);
  };

  const processQueue = (error: AxiosError | null, token: string | null = null): void => {
    failedQueue.current.forEach((prom) => {
      if (error) {
        prom.reject(error);
      } else {
        prom.resolve(token);
      }
    });

    failedQueue.current = [];
  };

  // Update tracking ketika session berubah
  useLayoutEffect(() => {
    if (session) {
      hasEverBeenAuthenticated.current = true;
    }
  }, [session]);

  useLayoutEffect(() => {
    // Pastikan interceptor hanya di-setup sekali
    if (interceptorSetup.current) return;

    interceptorSetup.current = true;

    // Request Interceptor
    const requestInterceptor = apiClient.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // Bisa tambahkan logic tambahan di sini jika perlu
        // Misalnya: menambahkan access token dari state management
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    // Response Interceptor
    const responseInterceptor = apiClient.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      async (error: AxiosError) => {
        const originalRequest = error.config as CustomAxiosRequestConfig;

        // Handle 401 Unauthorized
        if (error.response?.status === 401 && originalRequest && !originalRequest._retry) {
          // Cegah infinite loop jika refresh endpoint yang gagal
          if (originalRequest.url?.includes("/auth/refresh")) {
            isRefreshing.current = false;
            hasEverBeenAuthenticated.current = false; // Reset status
            setIsAuthError(true);
            return Promise.reject(error);
          }

          // Jika sedang refresh, masukkan request ke queue
          if (isRefreshing.current) {
            return new Promise((resolve, reject) => {
              failedQueue.current.push({ resolve, reject });
            })
              .then(() => {
                return apiClient(originalRequest);
              })
              .catch((err) => {
                return Promise.reject(err);
              });
          }

          // Tandai request sebagai retry dan mulai refresh
          originalRequest._retry = true;
          isRefreshing.current = true;

          try {
            // Attempt to refresh the token
            // Cookie dengan refresh token akan otomatis terkirim
            await apiClient.post("/auth/refresh");

            // Reset flag dan process queue
            isRefreshing.current = false;
            processQueue(null);

            // Retry original request
            return apiClient(originalRequest);
          } catch (refreshError) {
            // Reset flag dan process queue dengan error
            isRefreshing.current = false;
            hasEverBeenAuthenticated.current = false; // Reset status
            processQueue(refreshError as AxiosError);

            // Set auth error state instead of redirect
            setIsAuthError(true);

            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      }
    );

    return () => {
      apiClient.interceptors.request.eject(requestInterceptor);
      apiClient.interceptors.response.eject(responseInterceptor);
      interceptorSetup.current = false;
    };
  }, []);

  const isLoggedIn = !!session && !isAuthError;

  if (isLoading) {
    return (
      <SidebarProvider>
        <SidebarAdminSkeleton />
        <main className="flex-1">
          <div className="h-16 bg-sidebar border-b flex items-center px-6"></div>
          <div className="flex flex-col">
            <Skeleton className="h-8 w-1/3 mt-8 mx-6" />
          </div>
        </main>
      </SidebarProvider>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        user: session as CurrentSession,
        isLoggedIn,
        isAuthError,
        resetAuthError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
