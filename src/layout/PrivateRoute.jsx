import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../utils";

export const PrivateRoute = () => {
  return isAuthenticated() ? (
    <div className="container" style={{ height: "100vh" }}>
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};
