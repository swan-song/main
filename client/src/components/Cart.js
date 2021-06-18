import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function Cart() {
  const cart = useSelector((state) => state.Cart);

  return (
    <div>
      <h1>Reservations</h1>
      {cart.cars.map((car) => (
        <CartItem car={car} key={car.id} />
      ))}
    </div>
  );
}
