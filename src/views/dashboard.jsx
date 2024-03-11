import "../styles/app.css";
import React, {useEffect, useState} from "react";
import Header from "../components/navigation/Header";
import CardClub from "../components/CardClub";
import { getCollectionData } from "../services/firebase/api";

export function Dashboard() {
  const [games, setGames] = useState([]);
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    getData("videojuegos", setGames);
    getData("clubs", setClubs);
  }, [])

  const getData = async (collectionName, setState) => {
    let _data = [];
    let newData = await getCollectionData(collectionName, _data);
    setState(newData);
  };

  console.log(clubs)

  return (
    <section
      style={{
        backgroundColor: "#560000",
      }}
    >
      <Header></Header>
      <section
        style={{
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2014/04/03/00/39/tetris-308986_640.png)",
          // backgroundSize: "cover",
          marginTop: "1rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "10px",
          backgroundColor: "#560000",
        }}
      >
        {clubs.map((club, index) => (
          <CardClub key={index} club={club} />
        ))}
      </section>
    </section>
  );
}
