import React, { useState, useEffect } from "react";
import { getSingleClub, getUserProfile, JoinClub, LeaveClub } from "../services/firebase/api";
import { Link } from "react-router-dom";

export default function CardClub({ club }) {
  const [games, setGames] = useState([]);
  const [joinedClubs, setJoinedClubs] = useState([]);

  useEffect(() => {
    fetchClub();
    fetchUserProfile();
  }, []);

  useEffect(() => {
    sessionStorage.setItem("joinedClubs", joinedClubs);
  }, [joinedClubs])

  const fetchClub = async () => {
    let _club = await getSingleClub(club.id);
    setGames(_club.videojuegos);
  };

  const fetchUserProfile = async () => {
    let uid = sessionStorage.getItem("uid");
    let _userProfile = await getUserProfile(uid);
    setJoinedClubs(_userProfile.membresias);
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
    <section
      style={{
        backgroundColor: "rgb(166 1 101 / 80%)",
        width: "fit-content",
        borderRadius: "10px",
      }}
    >
      <section
        style={{
          maxWidth: "25rem",
          display: "flex",
          gap: "1rem",
          padding: "10px",
          width: "fit-content",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          borderRadius: "10px",
          boxShadow: "0 4px 30px rgba(122, 122, 122, 0.1)",
          backdropfilter: "blur(10.1px)",
          WebkitBackdropFilter: "blur(10.1px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          // backgroundColor: "rgb(194 0 118 / 80%)",
        }}
      >
        <div
          style={{
            padding: "20px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <h1>{club.nombre}</h1>
          <p>{club.descripcion}</p>
        </div>
        <div className="row">
        {!joinedClubs.includes(club.id) ? (
          <button
            className="btn btn-outline-secondary ms-3"
            style={{
              color: "whitesmoke",
            }}
            onClick={() => joinNewClub(club)}
          >
            Unete!
          </button>
        ) : (
          <button
            className="btn btn-outline-secondary ms-3"
            style={{
              color: "whitesmoke",
            }}
            onClick={() => leaveNewClub(club)}
          >
            Dejar club :(
          </button>
        )}
        </div>
        <div className="row">
            <Link to={`/club/${club.id}`} className="btn btn-outline-secondary ms-3 pointer">
              Ver más!
            </Link>
        </div>
        <h3
          style={{
            color: "whitesmoke",
          }}
        >
          Juegos:
        </h3>
        <footer
          style={{
            backgroundColor: "#4f4f4fa8",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            width: "-webkit-fill-available",
            color: "white",
            display: "flex",
            flexDirection: "column",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            gap: "1rem",
          }}
        >
          {games.map((videojuego, index) => (
            <h5 key={index}>• {videojuego.titulo}</h5>
          ))}
        </footer>
      </section>
    </section>
  );
}
