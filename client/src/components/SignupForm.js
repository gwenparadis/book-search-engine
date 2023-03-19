import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const SignupForm = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    const mutationResponse = await addUser({
      variables: {
        username: formState.username,
        email: formState.email,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="username">Username</Form.Label>
          <input
            placeholder="Your username"
            name="username"
            type="username"
            className="form-label form-control"
            onChange={handleInputChange}
          />
          <Form.Control.Feedback type="invalid">
            Username is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email</Form.Label>
          <input
            placeholder="Your email"
            name="email"
            type="email"
            className="form-label form-control"
            onChange={handleInputChange}
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="password">Password</Form.Label>
          <input
            placeholder="Your password"
            name="password"
            type="password"
            className="form-label form-control"
            onChange={handleInputChange}
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
};

export default SignupForm;
