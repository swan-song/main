import React from "react";
import M4 from "../assets/bmw-m4.png";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <nav
        class="navbar has-shadow is-black"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src={M4}></img>
          </a>

          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div class="navbar-menu is-active">
          <a class="navbar-item">Home</a>
          <a class="navbar-item">Garage</a>
          <a class="navbar-item">Account</a>
        </div>
      </nav>
    </div>
  );
}
