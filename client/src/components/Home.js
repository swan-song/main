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
      <Container car image banner>
        <Header home>Your Dream Car Awaits</Header>
        <Info home>
          Rent the car of your dreams, and drive like never before.
        </Info>
        <Link to="/garage">
          <Button>Reserve The Car of Your Dreams Now!</Button>
        </Link>
      </Container>
      <Container car image bannerTwo>
        <Header home>UNLIMITED MILES</Header>
        <Info home>
          We don't have a mile cap on our rentals! Pay by the hour, and take the
          car as far as you'd like! Just make sure you bring it back of course.
        </Info>
      </Container>
      <Container car image bannerThree>
        <Header home>BEST PRICE</Header>
        <Info home>
          We've got some of the most competitive prices in this small, but fair
          market. Compare our prices to all the competitors, and we can
          guarantee you won't go anywhere else for your luxury rentals!
        </Info>
      </Container>
      <Container car image bannerFour>
        <Header home>LOCAL DELIVERY</Header>
        <Info home>
          Once you complete the rental process, we will deliver your car to the
          location of your choice. Just please, don't send us into the middle of
          a field where you plan on doing something drastic. We've got
          protection for that 😁.
        </Info>
      </Container>
      <Container car image bannerFive>
        <Header home>CHECK OUT OUR CAR COLLECTION</Header>
        <Link to="/garage">
          <Button>Our Fleet</Button>
        </Link>
      </Container>
    </div>
  );
}
