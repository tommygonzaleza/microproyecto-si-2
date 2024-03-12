import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  getSingleClub,
  getUserProfile,
  JoinClub,
  LeaveClub,
} from "../services/firebase/api";

export const SingleClub = () => {
  const { id } = useParams();
  const [club, setClub] = useState({
    id,
    nombre: "",
    descripcion: "",
    videojuegos: [],
  });
  const [joinedClubs, setJoinedClubs] = useState([]);

  useEffect(() => {
    fetchClub(id);
    fetchUserProfile();
  }, []);

  useEffect(() => {
    sessionStorage.setItem("joinedClubs", joinedClubs);
  }, [joinedClubs]);

  const fetchClub = async (id) => {
    let _club = await getSingleClub(id);
    setClub(_club);
  };

  const fetchUserProfile = async () => {
    let uid = sessionStorage.getItem("uid");
    let _userProfile = await getUserProfile(uid);
    setJoinedClubs(_userProfile.membresias);
  };

  const joinNewClub = async (_club) => {
    let uid = sessionStorage.getItem("uid");
    await JoinClub({..._club, id}, uid);
    await fetchUserProfile();
  };

  const leaveNewClub = async (_club) => {
    let uid = sessionStorage.getItem("uid");
    await LeaveClub({..._club, id}, uid);
    await fetchUserProfile();
  };

  console.log("joinedClubs", joinedClubs);

  return (
    <section
      style={{
        backgroundColor: "rgb(166 1 101 / 80%)",
        backgroundSize: "cover",
        backgroundImage: "url(https://cdn.pixabay.com/photo/2015/12/23/22/39/minecraft-1106262_1280.png)",
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
      {!joinedClubs.includes(id) ? (
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
          marginBottom:"20rem"
        }}
        className="rounded p-3"
      >
        {club.videojuegos.map((videojuego, index) => (
          <h5 key={index}>• {videojuego.titulo}</h5>
        ))}
      </footer>
    </section>
  );
};
