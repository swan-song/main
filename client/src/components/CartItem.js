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
import { Form, Col } from "react-bootstrap";

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
        <Info>Reservation Date: {date}</Info>
        <Info>Rental Duration: {hours} hours</Info>
        <Info>Total: ${props.car.rate * hours}</Info>
        <Link to="/garage">
          <Button onClick={() => removeFromCart(dispatch, props.car.id)}>
            Change Reservation
          </Button>
        </Link>
      </Container>

      <Container info>
        <Header>Reservation Details</Header>
        <Form>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control required />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, Suite, etc." />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control required />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control required />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control required />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control required />
            </Form.Group>
          </Form.Row>

          <Button variant="primary" type="submit">
            Confirm Reservation
          </Button>
        </Form>
      </Container>
    </div>
  );
}
