'use client';

import React, { createContext, useContext, useMemo, useState } from "react";

type IContext = {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
};

const DEAFULT_VALUES = {
  isLogged: false,
  setIsLogged: () => false,
};

export const DrawerContext = createContext<IContext>(DEAFULT_VALUES);

export const DrawerProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogged, setIsLogged] = useState(false);
  const memoValues = useMemo(
    () => ({
      isLogged,
      setIsLogged,
    }),
    [isLogged]
  );
  const memoChildren = useMemo(() => children, [children]);

  return (
    <DrawerContext.Provider value={memoValues}>
      {memoChildren}
    </DrawerContext.Provider>
  );
};

export function useDrawerContext() {
  return useContext(DrawerContext);
}

export default DrawerProvider;
