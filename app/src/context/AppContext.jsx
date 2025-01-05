import { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const url_backend = "http://localhost:8080/";

  const contextValue = {
    url_backend,
  }

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
