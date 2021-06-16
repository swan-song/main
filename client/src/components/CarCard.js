import React from "react";
import { Image, Header, Info } from "./styled-components/styled-components";

export default function CarCard(props) {
  return (
    <div>
      <Image src={props.car.image} />
      <Header>{props.car.title}</Header>
    </div>
  );
}
