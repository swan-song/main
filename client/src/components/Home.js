import React from "react";
import {
  Image,
  Header,
  Info,
  Button,
  Container,
} from "./styled-components/styled-components";
import M4 from "../assets/bmw-m4.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <Image src={M4} />
      <Button>Reserve Your Dream Car Now</Button>
      <Header>UNLIMITED MILES</Header>
      <Info>Info</Info>
      <Header>BEST PRICE</Header>
      <Info>Info</Info>
      <Header>LOCAL DELIVERY</Header>
      <Info>Info</Info>
      <Header>CHECK OUR CAR COLLECTION</Header>
      <Link to="/garage">
        <Button>Our Fleet</Button>
      </Link>
    </div>
  );
}
