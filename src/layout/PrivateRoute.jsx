import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../utils";

export const PrivateRoute = () => {
  return isAuthenticated() ? (
    <div>
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};
