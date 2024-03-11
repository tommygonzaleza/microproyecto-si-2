import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { RegisterUser } from "../services/firebase/api";
import { ValidateEmail, ValidatePassword } from "../utils";

function Register() {
  const [registerInformation, setRegisterInformation] = useState({
    email: "",
    password: "",
  });

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
    if (reg.accessToken) setRegisterInformation({ email: "", password: "" });
  };

  return (<section style={{
    backgroundImage: "url(https://cdn.pixabay.com/photo/2014/11/13/15/23/minecraft-529459_640.jpg)",
    marginTop:"2rem",
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '10px',
    backgroundSize:"cover"
    
  }}>
    <Form style={{
      backgroundColor: "rgb(124 124 124 / 85%)",
      marginTop:"7rem",
      marginBottom:"18rem",
    }}
      className="mx-auto col-md-6 col-12 mt-5 border p-3 rounded"
      onSubmit={async (e) => await SubmitForm(e)}
    >
      <h1 className="text-center">Registrate ahora!</h1>
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
      <Button variant="light" type="submit" className="w-100" style={{
        backgroundColor:"transparent"
      }}>
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
      
      <Button variant="dark" style={{
        marginTop:"1rem",
        backgroundColor:"#9300004d",
        marginLeft: "6rem"
      }}>
        Inicia sesión con Google
      </Button></p>
    </Form></section>
  );
}

export default Register;
