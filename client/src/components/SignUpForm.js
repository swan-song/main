import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Form, Row, InputGroup, Button, Container } from "react-bootstrap";

export default function SignUpForm() {
  const [validated, setValidated] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };

  const handleSubmitData = async (event) => {
    event.preventDefault();
    const first_name = firstName;
    const last_name = lastName;
    const body = {
      first_name,
      last_name,
      email,
      password,
    };
    const dataURL = "http://localhost:3001/users/create_user";
    const response = await fetch(dataURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const dataResponse = await response.json();
    // if (response === 200) {
    history.push("/login");
    // } else {
    // <Redirect to="/register" />;

    console.log(response);
  };
  return (
    <div>
      <h1>Register</h1>
      <Container fluid>
        <div className="signUpContainer">
          <Form type="submit" onSubmit={handleSubmitData}>
            <Row className="mb-3">
              <Form.Group md="3" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  name="first_name"
                  required
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="3" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  name="last_name"
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="3" controlId="validationCustomUsername">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    name="email"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid email.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group md="3" controlId="validationCustom03">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid password.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="3" controlId="validationCustom03">
                <Form.Label>Re-Enter Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Re-Enter Password"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Passwords must match.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Button type="submit" onSubmit={Location.reload}>
              Register
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
}
