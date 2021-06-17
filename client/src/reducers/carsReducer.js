import { GET_CARS } from "../action-types/car-action-types";

const initialState = [];

const Cars = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARS:
      return (state = action.payload);
    default:
      return state;
  }
};

export default Cars;
