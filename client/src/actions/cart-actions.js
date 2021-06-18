import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_HOUR,
} from "../action-types/cart-types";

export const addToCart = (dispatch, car, cart) => {
  dispatch({
    type: ADD_TO_CART,
    payload: car,
  });
};

export const removeFromCart = (dispatch, car, cart) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: car,
  });
};

export const addHour = (dispatch, hours) => {
  const updatedHours = hours;
  dispatch({
    type: ADD_HOUR,
    payload: updatedHours,
  });
};
