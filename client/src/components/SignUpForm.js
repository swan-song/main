import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Form, Row, InputGroup, Container } from "react-bootstrap";
import { Button } from "../components/styled-components/styled-components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUpForm() {
  const [validated, setValidated] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const history = useHistory();

  const [formValues, setFormValues] = useState({
    password2: "",
  });

  const [formErrors, setFormErrors] = useState({
    password2: null,
  });

  const setFormError = useCallback((key, error) => {
    setFormErrors((formErrors) => {
      return {
        ...formErrors,
        [key]: error,
      };
    });
  }, []);

  const setFormValue = useCallback((key, value) => {
    if (key === "password2") {
      const isValidPassword = value === password;

      setFormError(
        "password2",
        isValidPassword ? null : "Passwords must match"
      );
    }

    setFormValues((formValues) => {
      return {
        ...formValues,
        [key]: value,
      };
    });
  }, []);

  const handleSubmitData = async (event) => {
    console.log("fired");
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    event.preventDefault();
    console.log("after event");
    const first_name = firstName;
    const last_name = lastName;
    const body = {
      first_name,
      last_name,
      email,
      password,
    };

    const dataURL = "http://localhost:3001/users/create_user";
    console.log(dataURL);
    const response = await fetch(dataURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(body),
    });
  };

  return (
    <div>
      <h1>Register</h1>
      <Container fluid>
        <div className="signUpContainer">
          <Form noValidate validated={validated} onSubmit={handleSubmitData}>
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
                <Form.Control.Feedback type="invalid">
                  Please enter a first name
                </Form.Control.Feedback>
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
                <Form.Control.Feedback type="invalid">
                  Please enter a last name
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="3" controlId="validationCustomUsername">
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
              <Form.Group md="3" controlId="validationCustom03">
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
              <Form.Group md="3" controlId="validationCustom03">
                <Form.Label>Re-Enter Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  onChange={(e) => setFormValue("password2", e.target.value)}
                  placeholder="Re-Enter Password"
                  isInvalid={formErrors.password2 !== null}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.password2}
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
                  formValues.password2 === password
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
