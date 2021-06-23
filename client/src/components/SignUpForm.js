import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Form, Row, InputGroup, Container } from "react-bootstrap";
import { Button } from "../components/styled-components/styled-components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { supabase } from "../supabaseClient";
import { useDispatch } from "react-redux";
import { addUser } from "../actions/cart-actions";

export default function SignUpForm() {
  const [validated, setValidated] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmitData = async (event) => {
    event.preventDefault();
    const first_name = firstName;
    const last_name = lastName;

    const { user, session, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      addUser(dispatch, user.email);
      toast.success(`Welcome ${first_name}!`, {
        position: toast.POSITION.TOP_CENTER,
      });
      history.push("/");
    }
  };
  return (
    <div>
      <h1>Register</h1>
      <Container fluid>
        <div className="signUpContainer">
          <Form
            // noValidate
            // required
            // validated={validated}
            onSubmit={handleSubmitData}
          >
            <Row className="mb-3">
              <Form.Group md="3" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  name="first_name"
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
                    type="email"
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
            <Button type="submit">Register</Button>
          </Form>
        </div>
      </Container>
    </div>
  );
}
