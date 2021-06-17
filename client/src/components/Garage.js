import React, { useEffect } from "react";
import CarCard from "./CarCard";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "../components/styled-components/styled-components";
import { getCars } from "../actions/car-actions";

export default function Garage() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.Cars.rows);

  useEffect(() => {
    getCars(dispatch);
  }, []);

  return (
    <div>
      <h1>Garage</h1>
      {cars ? cars.map((car) => <CarCard car={car} key={car.id} />) : "loading"}
    </div>
  );
}
