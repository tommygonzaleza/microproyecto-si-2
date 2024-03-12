import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Register from "./views/register.jsx";
import { Dashboard } from "./views/dashboard";
import { Login } from "./views/login";
import { Videogames } from "./views/videogames.jsx";
import { Profile } from "./views/profile.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrivateRoute } from "./layout/PrivateRoute.jsx";
import { PublicRoute } from "./layout/PublicRoute.jsx";
import { app } from "./services/firebase";

const App = () => {
  const [accessToken, setAccessToken] = useState(null);
  
  useEffect(() => {
    let _token= sessionStorage.getItem('accessToken');
    setAccessToken(_token);
  }, [])

  const router = createBrowserRouter([
    {
      element: <PublicRoute accessToken={accessToken} />,
      children: [
        {
          path: "/",
          element: <Register accessToken={accessToken} setAccessToken={setAccessToken} />,
        },
        {
          path: "/login",
          element: <Login accessToken={accessToken} setAccessToken={setAccessToken} />,
        },
      ],
    },
    {
      element: <PrivateRoute accessToken={accessToken} setAccessToken={setAccessToken}  />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/videogames",
          element: <Videogames />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
