
import React from 'react';
import { Outlet,Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils';

export const AppLayout = () => {
    return isAuthenticated() ? <Navigate to="/dashboard" /> : (
        <div className="container" style={{height: "100vh"}}>
            <Outlet />
        </div>
    )
}