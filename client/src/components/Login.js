import React from "react";
import { Form, Button, Row } from "react-bootstrap";

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <div className="loginContainer">
        <Form>
          <Form.Group>
            <Form.Label>Username:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Username"
              defaultValue=""
            />
            <Form.Label>Password:</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              defaultValue=""
            />
          </Form.Group>
          <Button type="submit">Login</Button>
        </Form>
      </div>
    </div>
  );
}
