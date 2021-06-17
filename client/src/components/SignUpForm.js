import React, { useState } from "react";
import { Form, Row, InputGroup, Button, Container } from "react-bootstrap";

export default function SignUpForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div>
      <h1>Register</h1>
      <Container fluid>
        <div className="signUpContainer">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group md="3" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control required type="text" placeholder="First name" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="3" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control required type="text" placeholder="Last name" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="3" controlId="validationCustomUsername">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
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
                <Form.Control type="password" placeholder="Password" required />
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

            <Button type="submit">Register</Button>
          </Form>
        </div>
      </Container>
    </div>
  );
}
