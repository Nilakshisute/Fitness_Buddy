import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";

const PrivateRoute = ({ component: Component }) => {
  return auth.currentUser ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
