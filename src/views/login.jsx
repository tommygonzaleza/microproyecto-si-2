import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, Navigate, redirect } from "react-router-dom";
import { LoginUser } from "../services/firebase/api";
import { ValidateEmail, ValidatePassword } from "../utils";

export function Login() {
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
  };

  return (
    <Form
      className="mx-auto col-md-6 col-12 mt-5 border p-3 rounded"
      onSubmit={async (e) => await SubmitForm(e)}
    >
      <h1 className="text-center">LOGIN</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
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
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
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
      <Button variant="primary" type="submit" className="w-100">
        LOGIN
      </Button>
      <p>
        Don't have an account?{" "}
        <Link
          className="text-primary"
          style={{ cursor: "pointer" }}
          to="/"
        >
          Register here
        </Link>
      </p>
    </Form>
  );
}
