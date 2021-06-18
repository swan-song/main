import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Image,
  Container,
  Header,
  Info,
  Button,
} from "./styled-components/styled-components";
import { Link } from "react-router-dom";
import { addToCart, addHour } from "../actions/cart-actions";
import { Modal } from "react-bootstrap";

export default function SingleCarPage() {
  const selectedCar = useSelector((state) => state.SingleCar);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [hours, setHours] = useState(0);

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
      <Button variant="primary" onClick={handleShow}>
        Reserve
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Rental Duration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="number"
            onChange={(e) => setHours(e.target.valueAsNumber)}
            placeholder="hours"
          ></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link to="/cart">
            <Button
              onClick={() => {
                addToCart(dispatch, selectedCar);
                addHour(dispatch, hours);
              }}
            >
              Confirm Reservation
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
