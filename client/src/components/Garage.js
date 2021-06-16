import React from "react";
import CarCard from "./CarCard";
import { useSelector } from "react-redux";
import { Container } from "../components/styled-components/styled-components";

export default function Garage() {
  const cars = useSelector((state) => state.Cars);
  return (
    <div>
      <h1>Garage</h1>
      <Container>
        {cars.cars.map((car) => (
          <CarCard car={car} key={car.id} />
        ))}
      </Container>
    </div>
  );
}
