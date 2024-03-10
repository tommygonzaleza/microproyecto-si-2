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

  return (
    <Form
      className="mx-auto col-4 mt-5 border p-3 rounded"
      onSubmit={async (e) => await SubmitForm(e)}
    >
      <h1 className="text-center">Register now!</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
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
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
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
      <Button variant="primary" type="submit" className="w-100">
        REGISTER
      </Button>
      <p>
        Already a member?{" "}
        <Link
          className="text-primary"
          style={{ cursor: "pointer" }}
          to="/login"
        >
          Login here
        </Link>
      </p>
    </Form>
  );
}

export default Register;
