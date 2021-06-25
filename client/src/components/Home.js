import React from "react";
import {
  Header,
  Info,
  Button,
  Container,
  SubHeader,
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
          <SubHeader light>
            We don't have a mile cap on our rentals so you can take the car as
            far as you'd like!
          </SubHeader>
        </Container>
      </Container>

      <Container home>
        <Container banner bannerThree>
          <Header dark>BEST PRICE</Header>
          <SubHeader dark>
            We've got some of the most competitive prices, and we'll beat or
            match any price in town!
          </SubHeader>
        </Container>
      </Container>

      <Container home>
        <Container banner bannerFour>
          <Header light>LOCAL DELIVERY</Header>
          <SubHeader light>
            We'll deliver your car directly to you wherever you are!
          </SubHeader>
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
