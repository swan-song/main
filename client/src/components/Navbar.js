import React from "react";
import { Navbar as RBNavbar, Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { supabase } from "../supabaseClient";
import { Button } from "./styled-components/styled-components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Navbar() {
  const user = useSelector((state) => state.Cart.users);
  const history = useHistory();
  const refreshPage = () => {
    window.location.reload(false);
  };
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      history.push("/account")
    }
    refreshPage();
  };
  if (user === "") {
    return (
      <div>
        <RBNavbar bg="light" expand="lg">
          <Link to="/">
            <RBNavbar.Brand href="/">Branding</RBNavbar.Brand>
          </Link>
          <RBNavbar.Toggle aria-controls="basic-navbar-nav" />
          <RBNavbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/">
                <Nav.Link href="/">Home</Nav.Link>
              </Link>
              <Link to="/garage">
                <Nav.Link href="/garage">Garage</Nav.Link>
              </Link>
              <Link to="/account">
                <Nav.Link href="/account">Account</Nav.Link>
              </Link>
              <Link to="/cart">
                <Nav.Link href="/cart">Cart</Nav.Link>
              </Link>
            </Nav>
          </RBNavbar.Collapse>
        </RBNavbar>
      </div>
    );
  } else
    return (
      <div>
        <RBNavbar bg="light" expand="lg">
          <Link to="/">
            <RBNavbar.Brand href="/">Branding</RBNavbar.Brand>
          </Link>
          <RBNavbar.Toggle aria-controls="basic-navbar-nav" />
          <RBNavbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/">
                <Nav.Link href="/">Home</Nav.Link>
              </Link>
              <Link to="/garage">
                <Nav.Link href="/garage">Garage</Nav.Link>
              </Link>
              <Link to="/cart">
                <Nav.Link href="/cart">Cart</Nav.Link>
              </Link>
              <Button onClick={signOut}>Sign Out</Button>
            </Nav>
          </RBNavbar.Collapse>
        </RBNavbar>
      </div>
    );
}