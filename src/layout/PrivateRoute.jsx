import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../utils"

console.log('isAuthenticated', isAuthenticated())

export const PrivateRoute = () => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};