import React from "react";
import {
  Header,
  Info,
  Button,
  Container,
} from "./styled-components/styled-components";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Container home>
        <Container banner>
          <Header dark>What are you driving today?</Header>
          <Link to="/garage">
            <Button light>RESERVE YOUR DREAM CAR NOW</Button>
          </Link>
        </Container>
      </Container>

      <Container home>
        <Container banner bannerTwo>
          <Header light>UNLIMITED MILES</Header>
          <Info light>
            We don't have a mile cap on our rentals! Pay by the hour, and take
            the car as far as you'd like! Just make sure you bring it back of
            course.
          </Info>
        </Container>
      </Container>

      <Container home>
        <Container banner bannerThree>
          <Header dark>BEST PRICE</Header>
          <Info dark>
            We've got some of the most competitive prices in this small, but
            fair market. Compare our prices to all the competitors, and we can
            guarantee you won't go anywhere else for your luxury rentals!
          </Info>
        </Container>
      </Container>

      <Container home>
        <Container banner bannerFour>
          <Header light>LOCAL DELIVERY</Header>
          <Info light>
            Once you complete the rental process, we will deliver your car to
            the location of your choice. Just please, don't send us into the
            middle of a field where you plan on doing something drastic. We've
            got protection for that 😁.
          </Info>
        </Container>
      </Container>

      <Container home>
        <Container banner bannerFive>
          <Header dark>CHECK OUT OUR CAR COLLECTION</Header>
          <Link to="/garage">
            <Button dark>
              <strong>CAR COLLECTION</strong>
            </Button>
          </Link>
        </Container>
      </Container>
    </div>
  );
}
