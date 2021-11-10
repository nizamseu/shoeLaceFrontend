import React, { createContext } from "react";
import useFirebase from "../../Hooks/useFirebase";

export const AuthContext = createContext(null);

const ContextProvider = ({ children }) => {
  const AllData = useFirebase();
  return (
    <AuthContext.Provider value={AllData}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;
