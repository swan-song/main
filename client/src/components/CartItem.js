import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Image,
  Container,
  Header,
  Button,
  Info,
} from "./styled-components/styled-components";
import { removeFromCart } from "../actions/cart-actions";
import { Link } from "react-router-dom";

export default function CartItem(props) {
  const dispatch = useDispatch();
  const hours = useSelector((state) => state.Cart.hours);
  const date = useSelector((state) => state.Cart.date);

  return (
    <div>
      <Container car>
        <Container image>
          <Image src={props.car.image} />
        </Container>
        <Header>{props.car.title}</Header>
        <Info>Rental Date: {date}</Info>
        <Info>Rental Duration: {hours} hours</Info>
        <Info>Total: ${props.car.rate * hours}</Info>
        <Link to="/garage">
          <Button onClick={() => removeFromCart(dispatch, props.car.id)}>
            Change Reservation
          </Button>
        </Link>
      </Container>
    </div>
  );
}
