import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Image,
  Container,
  Header,
  Info,
  Button,
} from "./styled-components/styled-components";
import { addToCart, setDateTime } from "../actions/cart-actions";
import { Modal, Form, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export default function SingleCarPage() {
  const selectedCar = useSelector((state) => state.SingleCar);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const user = useSelector((state) => state.Cart.users);

  const [formValues, setFormValues] = useState({
    date: "",
    duration: "",
  });

  const [formErrors, setFormErrors] = useState({
    date: null,
    duration: null,
  });

  const setFormError = useCallback((key, error) => {
    setFormErrors((formErrors) => {
      return {
        ...formErrors,
        [key]: error,
      };
    });
  }, []);

  const setFormValue = useCallback((key, value) => {
    if (key === "date") {
      const isValidDate = value.length === 10;

      setFormError("date", isValidDate ? null : "Please enter a date");
    } else if (key === "duration") {
      const isValidDuration = value > 0;

      setFormError(
        "duration",
        isValidDuration ? null : "Please enter in hours (1hr minimum)"
      );
    }

    setFormValues((formValues) => {
      return {
        ...formValues,
        [key]: value,
      };
    });
  });

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    let hasErrors = !form.checkValidity();

    if (hasErrors === false) {
      const formErrorsValues = Object.values(formErrors);
      formErrorsValues.forEach((formErrorsValue) => {
        if (formErrorsValue !== null) {
          hasErrors = true;
        }
      });
    }

    setValidated(!hasErrors);

    if (hasErrors) {
      event.preventDefault();
      event.stopPropagation();

      return;
    }
  };

  if (user === "") {
    return (
      <div>
        <Container car>
          <Container image>
            <Image src={selectedCar.image} />
          </Container>
        </Container>
        <Container info>
          <Header>{selectedCar.title}</Header>
          <Info>{selectedCar.description}</Info>
          <Info>{selectedCar.transmission}</Info>
          <Info>Top Speed: {selectedCar.top_speed}</Info>
          <Info>Rate: ${selectedCar.rate}/hr</Info>
          <Button onClick={() => history.push("/account")}>
            Login to Reserve
          </Button>
        </Container>
      </div>
    );
  } else
    return (
      <div>
        <Container car>
          <Container image>
            <Image src={selectedCar.image} />
          </Container>
        </Container>
        <Container info>
          <Header>{selectedCar.title}</Header>
          <Info>{selectedCar.description}</Info>
          <Info>{selectedCar.transmission}</Info>
          <Info>Top Speed: {selectedCar.top_speed}</Info>
          <Info>Rate: ${selectedCar.rate}/hr</Info>
          <Button onClick={handleShow}>Reserve</Button>
        </Container>

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Reservation Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Row>
                  <Col>
                    <Form.Group controlId="formGridDate">
                      <Form.Label>Date</Form.Label>
                      <Form.Control
                        required
                        type="date"
                        onChange={(e) => setFormValue("date", e.target.value)}
                        isInvalid={formErrors.date !== null}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formErrors.date}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group controlId="formGridDuration">
                      <Form.Label>Duration</Form.Label>
                      <Form.Control
                        required
                        type="number"
                        onChange={(e) =>
                          setFormValue("duration", e.target.valueAsNumber)
                        }
                        placeholder="hours"
                        isInvalid={formErrors.duration !== null}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formErrors.duration}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Form.Row>

                <Button
                  type="submit"
                  onClick={() => {
                    if (
                      formValues.date.length === 10 &&
                      formValues.duration >= 1
                    ) {
                      addToCart(dispatch, selectedCar);
                      setDateTime(
                        dispatch,
                        formValues.duration,
                        formValues.date
                      );
                      history.push("/cart");
                      toast.success("Car successfully added", {
                        toastId: 1,
                      });
                    } else {
                      toast.error("Please complete form", {
                        toastId: 2,
                      });
                    }
                  }}
                >
                  Proceed to Checkout
                </Button>
              </Form>
            </Container>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    );
}
