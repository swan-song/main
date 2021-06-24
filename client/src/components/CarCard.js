import React from "react";
import { useDispatch } from "react-redux";
import {
  Image,
  SubHeader,
  Button,
  Container,
} from "./styled-components/styled-components";
import { Link } from "react-router-dom";
import { selectCar } from "../actions/car-actions";

export default function CarCard(props) {
  const dispatch = useDispatch();

  return (
    <div>
      <Container car>
        <Container image>
          <Image src={props.car.image} />
        </Container>
        <SubHeader>{props.car.title}</SubHeader>
        <Link to="/cars/:id">
          <Button details onClick={() => selectCar(dispatch, props.car)}>
            Details
          </Button>
        </Link>
      </Container>
    </div>
  );
}
