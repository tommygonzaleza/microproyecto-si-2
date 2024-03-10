
import React from 'react';
import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
    return (
        <div className="container-fluid" style={{height: "100vh"}}>
            <Outlet />
        </div>
    )
}