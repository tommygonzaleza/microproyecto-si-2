import React from "react";
import { LogoutUser } from "../../services/firebase/api";


export default function Header() {
  const handleClick = async () => {
      await LogoutUser();
  };  
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top navbar-dark"
      style={{
        backgroundColor: "#242424",
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          NombrePagina
        </a>
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
              <a className="nav-link" href="/dashboard">
                Club
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/videogames">
                Videojuegos
              </a>
            </li>
          </ul>
          <a
            className="btn btn-outline-secondary"
            href="/profile"
            style={{
              color: "whitesmoke",
              marginRight: "1rem"
            }}
          >
            Perfil
          </a>
          <button
            className="btn btn-outline-secondary"
            style={{
              color: "whitesmoke",
            }}
            onClick={handleClick}
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </nav>
  );
}
