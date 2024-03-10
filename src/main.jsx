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
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdV7f9uRwic6chtr7yvJyh0DIKcz3SYto",
  authDomain: "microproyecto-si-2.firebaseapp.com",
  projectId: "microproyecto-si-2",
  storageBucket: "microproyecto-si-2.appspot.com",
  messagingSenderId: "969671975337",
  appId: "1:969671975337:web:4c36543dfc1dd3ea9424b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
