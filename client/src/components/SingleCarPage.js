import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Image,
  Container,
  Header,
  Info,
  Button,
  Input,
} from "./styled-components/styled-components";
import { Link } from "react-router-dom";
import { addToCart, setDateTime } from "../actions/cart-actions";
import { Modal } from "react-bootstrap";

export default function SingleCarPage() {
  const selectedCar = useSelector((state) => state.SingleCar);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [hours, setHours] = useState(0);
  const [date, setDate] = useState("");

  return (
    <div>
      <Container image>
        <Image src={selectedCar.image} />
      </Container>
      <Container info>
        <Header>{selectedCar.title}</Header>
        <Info>{selectedCar.description}</Info>
        <Info>{selectedCar.transmission}</Info>
        <Info>Top Speed: {selectedCar.top_speed}</Info>
        <Info>Rate: ${selectedCar.rate}/hr</Info>
        <Button variant="primary" onClick={handleShow}>
          Reserve
        </Button>
      </Container>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Reservation Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Input type="date" onChange={(e) => setDate(e.target.value)} />
            <Input
              type="number"
              onChange={(e) => setHours(e.target.valueAsNumber)}
              placeholder="hours"
            />
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link to="/cart">
            <Button
              variant="primary"
              onClick={() => {
                addToCart(dispatch, selectedCar);
                setDateTime(dispatch, hours, date);
              }}
            >
              Proceed to Checkout
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
