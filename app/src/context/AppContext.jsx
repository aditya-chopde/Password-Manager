import { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const url_backend = "https://password-manager-backend-8mfv.onrender.com/";

  const contextValue = {
    url_backend,
  }

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
