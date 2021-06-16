import React from "react";
import { Navbar as RBNavbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Garage from "./Garage";

export default function Navbar() {
  return (
    <div>
      <RBNavbar bg="light" expand="lg">
        <RBNavbar.Brand href="#home">Branding</RBNavbar.Brand>
        <RBNavbar.Toggle aria-controls="basic-navbar-nav" />
        <RBNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Garage</Nav.Link>
          </Nav>
        </RBNavbar.Collapse>
      </RBNavbar>
    </div>
  );
}
