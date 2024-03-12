import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LoginUser, SignInWithGoogle } from "../services/firebase/api";
import { ValidateEmail, ValidatePassword } from "../utils";

export function Login({ setAccessToken }) {
  const [loginInformation, setLoginInformation] = useState({
    email: "",
    password: "",
  });

  const SubmitForm = async (e) => {
    e.preventDefault();
    if (!ValidateEmail(loginInformation.email)) {
      alert("Please use a valid email");
      return;
    }
    if (!ValidatePassword(loginInformation.password)) {
      alert("Please use a valid password");
      return;
    }
    let reg = await LoginUser(loginInformation);
    if (reg.accessToken) setLoginInformation({ email: "", password: "" });
    setAccessToken(reg.accessToken);
  };

  return (
    <section
      style={{
        backgroundImage:
          "url(https://cdn.pixabay.com/photo/2015/12/23/22/36/minecraft-1106252_1280.jpg)",
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
        className="mx-auto col-md-6 col-12 mt-5 border p-3 rounded"
        style={{
          backgroundColor: "rgb(124 124 124 / 85%)",
          marginTop: "7rem",
          marginBottom: "18rem",
        }}
        onSubmit={async (e) => await SubmitForm(e)}
      >
        <h1 className="text-center">Inicia sesión</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Dirección de correo electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) =>
              setLoginInformation({
                ...loginInformation,
                email: e.target.value,
              })
            }
            value={loginInformation.email}
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
              setLoginInformation({
                ...loginInformation,
                password: e.target.value,
              })
            }
            value={loginInformation.password}
          />
        </Form.Group>
        <Button
          variant="dark"
          type="submit"
          className="w-100"
          style={{
            marginTop: "1rem",
            backgroundColor: "#9300004d",
          }}
        >
          Inicia sesión
        </Button>
        <Button
            variant="dark"
            className="mt-2 w-100"
            style={{
              backgroundColor: "#9300004d",
            }}
            onClick={async () => {
              const response = await SignInWithGoogle()
              setAccessToken(response.accessToken);
            }}
          >
            Inicia sesión con Google
          </Button>
        <p>
          No tienes una cuenta?{" "}
          <Link className="text-primary" style={{ cursor: "pointer" }} to="/">
            Registrate aquí
          </Link>
        </p>
      </Form>
    </section>
  );
}
