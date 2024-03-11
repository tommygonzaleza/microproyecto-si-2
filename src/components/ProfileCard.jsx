import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { getVideogames, UpdateUserProfile } from "../services/firebase/api";

export default function ProfileCard({ userProfile, setUserProfile }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getAllVideoGames();
  }, []);

  const getAllVideoGames = async () => {
    let allVideoGames = await getVideogames();
    setGames(allVideoGames);
  };

  const SubmitForm = async (e) => {
    e.preventDefault();
    await UpdateUserProfile(userProfile, userProfile.uid);
  }

  return (
    <section
      style={{
        display: "flex",
        width: "80rem",
        gap: "1rem",
        padding: "10px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        boxShadow: "0 4px 30px rgba(122, 122, 122, 0.1)",
        backdropfilter: "blur(10.1px)",
        WebkitBackdropFilter: "blur(10.1px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        color: "whitesmoke",
      }}
    >
      <img
        src="https://lh3.googleusercontent.com/a/ACg8ocK_xmUM3IXzPBco7kM1ve1RMtD9qNmGLWiwP7zEIhHmd6s=s360-c-no"
        className="img-fluid"
      ></img>
      <footer
        style={{
          backgroundColor: "#4f4f4fa8",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          width: "-webkit-fill-available",
          color: "white",
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          justifyContent: "space-between",
        }}
      >
        <Form
          style={{
            backgroundColor: "rgb(124 124 124 / 85%)",
            marginTop: "7rem",
            marginBottom: "18rem",
          }}
          className="mx-auto col-md-6 col-12 mt-5 border p-3 rounded"
          onSubmit={async (e) => await SubmitForm(e)}
        >
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              onChange={(e) =>
                setUserProfile({
                  ...userProfile,
                  name: e.target.value,
                })
              }
              value={userProfile.name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastname">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter lastname"
              onChange={(e) =>
                setUserProfile({
                  ...userProfile,
                  lastname: e.target.value,
                })
              }
              value={userProfile.lastname}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Nombre de Usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              onChange={(e) =>
                setUserProfile({
                  ...userProfile,
                  username: e.target.value,
                })
              }
              value={userProfile.username}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicVideogame">
            <Form.Label>Videojuego Favorito</Form.Label>
            <Form.Select
              aria-label="Selecciona tu videojuego favorito"
              onChange={(e) =>
                setUserProfile({
                  ...userProfile,
                  favoriteVideogame: e.target.value,
                })
              }
              value={userProfile.favoriteVideogame}
            >
              <option disabled>Selecciona tu videojuego favorito</option>
              {games.map((item, index) => (
                <option key={index} value={item.id}>
                  {item.titulo}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Button
            variant="light"
            type="submit"
            className="w-100"
            style={{
              backgroundColor: "transparent",
            }}
          >
            UPDATE
          </Button>
        </Form>
      </footer>
    </section>
  );
}
