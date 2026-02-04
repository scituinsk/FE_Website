"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { useIsFetching } from "@tanstack/react-query";

interface LoadingBarContextType {
  isLoading: boolean;
  showLoading: () => void;
  hideLoading: () => void;
}

const LoadingBarContext = createContext<LoadingBarContextType | undefined>(undefined);

export const useLoadingBar = () => {
  const context = useContext(LoadingBarContext);
  if (!context) {
    throw new Error("useLoadingBar must be used within LoadingBarProvider");
  }
  return context;
};

interface LoadingBarProviderProps {
  children: ReactNode;
  enableTanstackSupport?: boolean;
}

export const LoadingBarProvider = ({ children, enableTanstackSupport = false }: LoadingBarProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const isFetching = useIsFetching();

  const showLoading = () => setIsLoading(true);
  const hideLoading = () => setIsLoading(false);

  // Automatically show/hide loading bar based on Tanstack Query fetching state
  useEffect(() => {
    if (enableTanstackSupport) {
      if (isFetching > 0) {
        setIsLoading(true);
      } else {
        setIsLoading(false);
      }
    }
  }, [isFetching, enableTanstackSupport]);

  return <LoadingBarContext.Provider value={{ isLoading, showLoading, hideLoading }}>{children}</LoadingBarContext.Provider>;
};
