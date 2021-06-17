import React from "react";
import Login from "../components/Login";
import { Header, Button } from "./styled-components/styled-components";
import { Link } from "react-router-dom";

export default function Account() {
  return (
    <div>
      <Login />
      <Header>New Customer?</Header>
      <Link to="/signup">
        <Button>Create an Account</Button>
      </Link>
    </div>
  );
}
