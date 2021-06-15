import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_HOUR,
} from "../action-types/cart-types";

export const addToCart = (dispatch, car, cart) => {
  if (cart.cars.includes(car)) {
    addHour(dispatch, car);
  } else {
    dispatch({
      type: ADD_TO_CART,
      payload: car,
    });
  }
};

export const removeFromCart = (dispatch, car, cart) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: car,
  });
};

export const addHour = (dispatch, car) => {
  const newCar = car;
  newCar.hours = car.hours + 1;
  dispatch({
    type: ADD_HOUR,
    payload: newCar,
  });
};
