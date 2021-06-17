import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Image,
  Container,
  Header,
  Info,
  Button,
} from "./styled-components/styled-components";

export default function SingleCarPage() {
  const selectedCar = useSelector((state) => state.SingleCar);
  return (
    <div>
      <Container image>
        <Image src={selectedCar.image} />
      </Container>
      <Header>{selectedCar.title}</Header>
      <Info>{selectedCar.description}</Info>
      <Info>{selectedCar.transmission}</Info>
      <Info>{selectedCar.top_speed}</Info>
      <Info>${selectedCar.rate}/hr</Info>
      <Button>Reserve</Button>
    </div>
  );
}
