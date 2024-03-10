import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Register from './views/register.jsx';
import { Dashboard } from './views/dashboard';
import { Login } from './views/login';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { PrivateRoute } from './layout/PrivateRoute.jsx';
import { AppLayout } from './layout/AppLayout.jsx';
import { app } from './services/firebase';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: '/dashboard',
            element: <Dashboard />
          }
        ]
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
