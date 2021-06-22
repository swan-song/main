import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Button } from "../components/styled-components/styled-components";

export default function Login() {
  const [email, setemail] = useState({});
  const [password, setpassword] = useState({});
  const dispatch = useDispatch();
  const loginUser = async (e) => {
    e.preventDefault()
    const login = await fetch("http://localhost:3001/login", {
      method: "POST",
      body: { email, password },
    });
    // if the user exists, return 200 that means user logs in
    // the json we get back should be the user object as a whole
    const json = await login.json();
    // create reducer to set user info to the store if they log in correctly
    // if (res.response stateus is 200, push them to new page you go to when logged in)
    dispatch({ type: "SET_USER_INFO", payload: json[0] });

    // if they don't exist, error
  };
  return (
    <div>
      <h1>Login</h1>
      <div className="loginContainer">
        <Form onSubmit={loginUser}> 
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
