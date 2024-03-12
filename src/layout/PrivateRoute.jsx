import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/navigation/Header";

export const PrivateRoute = ({ accessToken, setAccessToken }) => {
  return accessToken ? (
    <div>
      <Header accessToken={accessToken} setAccessToken={setAccessToken} />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};
