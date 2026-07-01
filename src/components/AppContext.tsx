import { createContext, useContext, useMemo, useState } from "react";

type AppContext = {
  scaleFactor: number;
  setScaleFactor: (scaleFactor: number) => void;
};

const defaultValue: AppContext = {
  scaleFactor: 4,
  setScaleFactor: () => {},
};

const AppContext = createContext<AppContext>(defaultValue);

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [scaleFactor, setScaleFactor] = useState(defaultValue.scaleFactor);

  const value = useMemo<AppContext>(() => ({ scaleFactor, setScaleFactor }), [scaleFactor, setScaleFactor]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => useContext(AppContext);
