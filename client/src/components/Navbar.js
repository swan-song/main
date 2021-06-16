import React from "react";
import { Navbar as RBNavbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navbar() {
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
            <Link to="/login">
              <Nav.Link href="/login">Login</Nav.Link>
            </Link>
            <Link to="/signup">
              <Nav.Link href="/signup">Signup</Nav.Link>
            </Link>
          </Nav>
        </RBNavbar.Collapse>
      </RBNavbar>
    </div>
  );
}
