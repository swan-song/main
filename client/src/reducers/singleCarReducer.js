import { SELECT_CAR } from "../action-types/car-action-types";

const initialState = [];

const SingleCar = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CAR:
      return (state = action.payload);
    default:
      return state;
  }
};

export default SingleCar;
