import { GET_CARS } from "../action-types/car-action-types";

const dataURL = "http://localhost:3001/getcars";

export const addCars = async (dispatch) => {
  const response = await fetch(dataURL);
  const jsonData = await response.json();
  dispatch({
    type: GET_CARS,
    payload: jsonData,
  });
};
