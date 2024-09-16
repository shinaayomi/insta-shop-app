"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface AppGlobalStateContextType {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

const AppGlobalStateContext = createContext<
  AppGlobalStateContextType | undefined
>(undefined);

const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);

  return (
    <AppGlobalStateContext.Provider value={{ token, setToken }}>
      {children}
    </AppGlobalStateContext.Provider>
  );
};

const useGlobalState = () => useContext(AppGlobalStateContext);

export { GlobalStateProvider, useGlobalState };
