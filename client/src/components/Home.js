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
      <Header>Homepage</Header>
      <Container image>
        <Image src={M4} />
      </Container>
      <Link to="/garage">
        <Button>Reserve Your Dream Car Now</Button>
      </Link>
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
