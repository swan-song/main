import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Form, Row, InputGroup, Container } from "react-bootstrap";
import { Button } from "../components/styled-components/styled-components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { supabase } from "../supabaseClient";

export default function SignUpForm() {
  const [validated, setValidated] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  let history = useHistory();

  const handleSubmitData = async (event) => {
    // console.log("fired");
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }
    // setValidated(true);

    event.preventDefault();
    // console.log("after event");
    const first_name = firstName;
    const last_name = lastName;
    const body = {
      first_name,
      last_name,
      email,
      password,
    };

    // const { data, error } = await supabase
    //   .from('users')
    //   .insert([
    //     body
    //   ])

    const { user, session, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    // const dataURL = "http://localhost:3001/users/create_user";
    // const response = await fetch(dataURL, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    //   body: JSON.stringify(body),
    // });
    // console.log(response);
    // if (response.status === 200) {
    //   history.push("/login");
    // } else {
    //   console.log("Error in signing you up", { response });
    //   history.push("/signup");
    // }
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
              <Form.Group md="3" controlId="validationFirstName">
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
              <Form.Group md="3" controlId="validationLastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  name="last_name"
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a last name
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="3" controlId="validationEmail">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    required
                    name="email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid email
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group md="3" controlId="validationPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  name="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a password
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="3" controlId="validationPsswordTwo">
                <Form.Label>Re-Enter Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  onChange={(e) => setPasswordTwo("password2", e.target.value)}
                  placeholder="Re-Enter Password"
                />
                <Form.Control.Feedback type="invalid">
                  Passwords must match
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button
              type="submit"
              onClick={() => {
                if (
                  firstName.length > 0 &&
                  lastName.length > 0 &&
                  email.length > 0 &&
                  password.length > 0 &&
                  passwordTwo === password
                ) {
                  toast.success("success");
                } else {
                  toast.error("error");
                }
              }}
            >
              Register
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
}
