import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Image, Header } from "./styled-components/styled-components";
import EmptyCart from "../assets/empty-cart.png";

export default function Cart() {
  const cart = useSelector((state) => state.Cart);

  return (
    <div>
      <Header>Your Cart</Header>
      {cart.cars.length !== 0 ? (
        cart.cars.map((car) => <CartItem car={car} key={car.id} />)
      ) : (
        <Image src={EmptyCart} />
      )}
    </div>
  );
}
