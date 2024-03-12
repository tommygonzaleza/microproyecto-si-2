import React, { useState, useEffect } from "react";
import CardGame from "../components/CardGame";
import { getVideogames } from "../services/firebase/api";

export const Videogames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    let _games = await getVideogames();
    setGames(_games);
  };

  return (
    <section
      style={{
        backgroundImage:
          "url(https://cdn.pixabay.com/photo/2019/04/12/08/44/pacman-4121590_1280.png)",
      }}
    >
      <section
        style={{
          marginTop: "1rem",
          padding: "3rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "10px",
        }}
      >
        {games.map((game, index) => (
          <CardGame key={index} game={game} />
        ))}
      </section>
    </section>
  );
};
