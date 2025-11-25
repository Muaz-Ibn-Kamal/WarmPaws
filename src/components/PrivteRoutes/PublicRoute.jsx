import React, { useContext } from "react";
import { AuthContext } from "../AouthContex/AouthContex";

const PublicRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user) {
    return <Navigate to={"/login"}></Navigate>;
  }

  return children;
};

export default PublicRoute;
