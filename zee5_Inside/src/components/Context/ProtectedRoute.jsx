import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";

export const ProtectedRoute = ({ children }) => {
  const auth = useAuth();
  console.log("children", children);

  if (!auth.user) {
    return <Navigate to="/login" />;
  }
  return children;
};
