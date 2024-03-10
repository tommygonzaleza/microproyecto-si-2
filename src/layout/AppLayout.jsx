
import React from 'react';
import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
    return (
        <div className="container-fluid bg-light">
            <Outlet />
        </div>
    )
}