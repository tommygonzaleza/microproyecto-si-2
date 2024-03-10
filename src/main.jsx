import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './views/app.jsx';
import { Dashboard } from './views/dashboard';
import { Register } from './views/register';
import { Login } from './views/login';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { PrivateRoute } from './layout/PrivateRoute.jsx';
import { AppLayout } from './layout/AppLayout.jsx';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
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
