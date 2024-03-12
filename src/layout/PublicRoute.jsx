
import React from 'react';
import { Outlet,Navigate } from 'react-router-dom';

export const PublicRoute = ({accessToken}) => {
    return accessToken ? <Navigate to="/dashboard" /> : (
        <div className="container" style={{height: "100vh"}}>
            <Outlet />
        </div>
    )
}