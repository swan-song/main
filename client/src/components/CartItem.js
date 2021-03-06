import React, { useCallback, useState } from "react";
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
import stateCodes from "../constants/stateCodes";
import { supabase } from "../supabaseClient";
import { toast } from "react-toastify";
import { useHistory } from "react-router";

export default function CartItem(props) {
  const dispatch = useDispatch();
  const carName = useSelector((state) => state.Cart.cars[0].title);
  const hours = useSelector((state) => state.Cart.hours);
  const date = useSelector((state) => state.Cart.date);
  const history = useHistory();
  const userEmail = useSelector((state) => state.Cart.users);
  const total = props.car.rate * hours;

  const [formValues, setFormValues] = useState({
    user_email: userEmail,
    carName: carName,
    date: date,
    hours: hours,
    total: total,
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });

  console.log(formValues);

  const [formErrors, setFormErrors] = useState({
    address1: null,
    address2: null,
    city: null,
    state: null,
    zip: null,
    phone: null,
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
    if (key === "address1") {
      const isValidAddress1 = value.length > 0;

      setFormError(
        "address1",
        isValidAddress1 ? null : "Please enter a valid address"
      );
    } else if (key === "city") {
      const isValidCity = value.length > 0;

      setFormError("city", isValidCity ? null : "Please enter a city");
    } else if (key === "phone") {
      const isValidPhoneNumber = value.length === 10;

      setFormError(
        "phone",
        isValidPhoneNumber
          ? null
          : "Please enter a valid 10-digit phone number (numbers only)"
      );
    } else if (key === "zip") {
      const isValidZip = value.length === 5;

      setFormError("zip", isValidZip ? null : "Please enter a valid zip code");
    }

    setFormValues((formValues) => {
      return {
        ...formValues,
        [key]: value,
      };
    });
  }, []);

  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
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

    const { data, error } = await supabase
      .from("reservations")
      .insert([formValues]);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Reservation successfully added");
      history.push("/confirmation");
    }
  };

  return (
    <div>
      <Container car>
        <Container image>
          <Image src={props.car.image} />
        </Container>
        <Header>{props.car.title}</Header>
        <Info>Reservation Date: {date}</Info>
        <Info>Rental Duration: {hours} hours</Info>
        <Info>Total: ${total}</Info>
        <Link to="/garage">
          <Button onClick={() => removeFromCart(dispatch, props.car.id)}>
            Change Reservation
          </Button>
        </Link>
      </Container>

      <Container info>
        <Header>Reservation Details</Header>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              required
              onChange={(e) => setFormValue("address1", e.target.value)}
              isInvalid={formErrors.address1 !== null}
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.address1}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control
              placeholder="Apartment, Suite, etc."
              onChange={(e) => setFormValue("address2", e.target.value)}
            />
          </Form.Group>

          <Form.Row>
            <Col xs={9}>
              <Form.Group controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  required
                  onChange={(e) => setFormValue("city", e.target.value)}
                  isInvalid={formErrors.city !== null}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.city}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control
                as="select"
                required
                onChange={(e) => setFormValue("state", e.target.value)}
              >
                <option disabled>Select one...</option>
                {stateCodes.map((stateCode, index) => (
                  <option key={index} value={stateCode}>
                    {stateCode}
                  </option>
                ))}
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {formErrors.state}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Col xs={5}>
              <Form.Group controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  required
                  onChange={(e) => setFormValue("zip", e.target.value)}
                  isInvalid={formErrors.zip !== null}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.zip}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                required
                onChange={(e) => setFormValue("phone", e.target.value)}
                isInvalid={formErrors.phone !== null}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.phone}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Button>Confirm Reservation</Button>
        </Form>
      </Container>
    </div>
  );
}
