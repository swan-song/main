import React from "react";
import {
  Image,
  Header,
  Button,
  Container,
} from "./styled-components/styled-components";

export default function CarCard(props) {
  return (
    <div>
      <Container car>
        <Container image>
          <Image src={props.car.image} />
        </Container>
        <Header>{props.car.title}</Header>
        <Button details>Details</Button>
      </Container>
    </div>
  );
}
