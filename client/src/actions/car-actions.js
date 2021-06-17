import { GET_CARS, SELECT_CAR } from "../action-types/car-action-types";

const dataURL = "http://localhost:3001/getcars";

export const getCars = async (dispatch) => {
  const response = await fetch(dataURL);
  const jsonData = await response.json();
  dispatch({
    type: GET_CARS,
    payload: jsonData,
  });
};

export const selectCar = async (dispatch, car) => {
  return dispatch({
    type: SELECT_CAR,
    payload: car,
  });
};
