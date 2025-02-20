import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./FireBaseAuth/FirebaseAuth";

function Private({ children }) {
  const { currentUser, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return;
  }

  if (currentUser) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
}

export default Private;
