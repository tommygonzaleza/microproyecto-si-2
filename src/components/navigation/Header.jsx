import React from "react";
import { Link } from "react-router-dom";
import { LogoutUser } from "../../services/firebase/api";

export default function Header({ setAccessToken }) {
  const handleClick = async () => {
    await LogoutUser();
    setAccessToken(null);
  };

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top navbar-dark"
      style={{
        backgroundColor: "#242424",
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          COTTOM PICKERS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Club
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/videogames">
                Videojuegos
              </Link>
            </li>
          </ul>
          <Link
            className="btn btn-outline-secondary"
            to="/profile"
            style={{
              color: "whitesmoke",
              marginRight: "1rem",
            }}
          >
            Perfil
          </Link>
          <button
            className="btn btn-outline-secondary"
            style={{
              color: "whitesmoke",
            }}
            onClick={async () => await handleClick()}
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </nav>
  );
}
