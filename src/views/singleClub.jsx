import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  getSingleClub,
  getUserProfile,
  JoinClub,
  LeaveClub,
} from "../services/firebase/api";

export const SingleClub = () => {
  const [club, setClub] = useState({
    id: "",
    nombre: "",
    descripcion: "",
    videojuegos: [],
  });
  const [membresias, setMembresias] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchClub(id);
    fetchUserProfile();
  }, []);

  const fetchClub = async (id) => {
    let _club = await getSingleClub(id);
    setClub(_club);
  };

  const fetchUserProfile = async () => {
    let uid = sessionStorage.getItem("uid");
    let _userProfile = await getUserProfile(uid);
    setMembresias(_userProfile.membresias);
  };

  const joinNewClub = async (_club) => {
    let uid = sessionStorage.getItem("uid");
    await JoinClub(_club, uid);
    await fetchUserProfile();
  };

  const leaveNewClub = async (_club) => {
    let uid = sessionStorage.getItem("uid");
    await LeaveClub(_club, uid);
    await fetchUserProfile();
  };

  return (
    <div
      style={{
        backgroundColor: "rgb(166 1 101 / 80%)",
      }}
      className="p-4 text-white"
    >
        <Link to="/dashboard" className="text-white">
            {"<"}-- Regresar
        </Link>
      <div className="col-12">
        <h1>{club.nombre}</h1>
        <p>{club.descripcion}</p>
      </div>
      {!membresias.includes(club.id) ? (
        <button
          className="btn btn-outline-secondary"
          style={{
            color: "whitesmoke",
          }}
          onClick={() => joinNewClub(club)}
        >
          Unete!
        </button>
      ) : (
        <button
          className="btn btn-outline-secondary"
          style={{
            color: "whitesmoke",
          }}
          onClick={() => leaveNewClub(club)}
        >
          Dejar club :(
        </button>
      )}

      <h3 className="my-3">Juegos:</h3>
      <footer
        style={{
          backgroundColor: "#4f4f4fa8",
        }}
        className="rounded p-3"
      >
        {club.videojuegos.map((videojuego, index) => (
          <h5 key={index}>• {videojuego.titulo}</h5>
        ))}
      </footer>
    </div>
  );
};
