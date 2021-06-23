import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Button } from "../components/styled-components/styled-components";
import { supabase } from "../supabaseClient";

export default function Login() {
  const [email, setemail] = useState({});
  const [password, setpassword] = useState({});
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    const { user, session, error } = await supabase.auth.signIn({
      email: { email },
      password: { password },
    })
  }

  return (
    <div>
      <h1>Login</h1>
      <div className="loginContainer">
        <Form onSubmit={handleLogin}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Email"
              defaultValue=""
              onChange={(e) => setemail(e.target.value)}
            />
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              defaultValue=""
              onChange={(e) => setpassword(e.target.value)}
            />
          </Form.Group>
          <Button type="submit">Login</Button>
        </Form>
      </div>
    </div>
  );
}
