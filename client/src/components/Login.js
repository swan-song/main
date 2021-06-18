import React from "react";
import { Form, Button } from "react-bootstrap";

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <div className="loginContainer">
        <Form>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Email"
              defaultValue=""
            />
            <Form.Label>Password</Form.Label>
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
