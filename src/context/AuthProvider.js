import React from "react";
import { createContext } from "react";
import useFirebase from "../hooks/useFirebase";
import useServices from "../hooks/useServices";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const allContext = useFirebase();
  const {services} = useServices();
  const data = { allContext, services };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
