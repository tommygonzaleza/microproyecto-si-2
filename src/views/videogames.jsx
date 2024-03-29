import React, { useState, useEffect } from "react";
import CardGame from "../components/CardGame";
import { getVideogames } from "../services/firebase/api";

export const Videogames = () => {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    let _games = await getVideogames();
    setGames(_games);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

const filteredGames = games.filter(
  (game) =>
    (game.titulo && typeof game.titulo === 'string' && game.titulo.toLowerCase().includes(search.toLowerCase())) ||
    (game.genero && typeof game.genero === 'string' && game.genero.toLowerCase().includes(search.toLowerCase()))
);

  return (
    <section
      style={{
        backgroundImage:
          "url(https://cdn.pixabay.com/photo/2019/04/12/08/44/pacman-4121590_1280.png)",
      }}
    >
      <input type="text" value={search} placeholder="Nombre videojuego" onChange={handleSearch}
      style={{
        marginTop:"2rem",
        marginLeft:"2rem",
      }} />
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
        {filteredGames.map((game, index) => (
          <CardGame key={index} game={game} />
        ))}
      </section>
    </section>
  );
};