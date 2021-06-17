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

export default function CartItem(props) {
  const dispatch = useDispatch();
  const hours = useSelector((state) => state.Cart.hours);
  return (
    <div>
      <Container car>
        <Container image>
          <Image src={props.car.image} />
        </Container>
        <Header>{props.car.title}</Header>
        {hours.map((hour) => (
          <Info>Rental Duration: {hour} hours</Info>
        ))}
        <Button onClick={() => removeFromCart(dispatch, props.car.id)}>
          Remove Car
        </Button>
      </Container>
    </div>
  );
}
