import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, Navigate, redirect } from "react-router-dom";
import { RegisterUser, getVideogames } from "../services/firebase/api";
import { ValidateEmail, ValidatePassword } from "../utils";

function Register({ setAccessToken }) {
  const [games, setGames] = useState([]);
  const [registerInformation, setRegisterInformation] = useState({
    email: "",
    password: "",
    name: "",
    lastname: "",
    username: "",
    favoriteVideogame: "",
  });

  useEffect(() => {
    getAllVideoGames();
  }, []);

  const getAllVideoGames = async () => {
    let allVideoGames = await getVideogames();
    setGames(allVideoGames);
  };

  const SubmitForm = async (e) => {
    e.preventDefault();
    if (!ValidateEmail(registerInformation.email)) {
      alert("Please use a valid email");
      return;
    }
    if (!ValidatePassword(registerInformation.password)) {
      alert("Please use a valid password");
      return;
    }
    let reg = await RegisterUser(registerInformation);
    if (reg.accessToken)
      setRegisterInformation({
        email: "",
        password: "",
        name: "",
        lastname: "",
        username: "",
        favoriteVideogame: "",
      });
    setAccessToken(reg.accessToken);
  };

  return (
    <section
      style={{
        backgroundImage:
          "url(https://cdn.pixabay.com/photo/2014/11/13/15/23/minecraft-529459_640.jpg)",
        marginTop: "2rem",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "10px",
        backgroundSize: "cover",
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
        <h1 className="text-center">Registrate ahora!</h1>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={(e) =>
              setRegisterInformation({
                ...registerInformation,
                name: e.target.value,
              })
            }
            value={registerInformation.name}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastname">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter lastname"
            onChange={(e) =>
              setRegisterInformation({
                ...registerInformation,
                lastname: e.target.value,
              })
            }
            value={registerInformation.lastname}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Nombre de Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            onChange={(e) =>
              setRegisterInformation({
                ...registerInformation,
                username: e.target.value,
              })
            }
            value={registerInformation.username}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicVideogame">
          <Form.Label>Videojuego Favorito</Form.Label>
          <Form.Select
            aria-label="Selecciona tu videojuego favorito"
            onChange={(e) =>
              setRegisterInformation({
                ...registerInformation,
                favoriteVideogame: e.target.value,
              })
            }
            value={registerInformation.favoriteVideogame}
          >
            <option disabled>Selecciona tu videojuego favorito</option>
            {games.map((item, index) => (
              <option key={index} value={item.id}>
                {item.titulo}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Dirección de correo electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) =>
              setRegisterInformation({
                ...registerInformation,
                email: e.target.value,
              })
            }
            value={registerInformation.email}
          />
          <Form.Text className="text-muted">
            Nunca vamos a compartir tu email con nadie.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setRegisterInformation({
                ...registerInformation,
                password: e.target.value,
              })
            }
            value={registerInformation.password}
          />
        </Form.Group>
        <Button
          variant="light"
          type="submit"
          className="w-100"
          style={{
            backgroundColor: "transparent",
          }}
        >
          REGISTRATE
        </Button>
        <p>
          Ya eres miembro?{" "}
          <Link
            className="text-primary"
            style={{ cursor: "pointer" }}
            to="/login"
          >
            Inicia sesión aquí
          </Link>
          <Button
            variant="dark"
            style={{
              marginTop: "1rem",
              backgroundColor: "#9300004d",
              marginLeft: "6rem",
            }}
          >
            Inicia sesión con Google
          </Button>
        </p>
      </Form>
    </section>
  );
}

export default Register;
