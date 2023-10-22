import { createContext, useState } from "react";

export const MainContext = createContext();

export const GlobalContext = ({ children }) => {
  const [user2, setUser2] = useState(" ????");


  return (
    <MainContext.Provider
      value={{
        autenticado: !!user2,
        setUser2,
        user2
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
