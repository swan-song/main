import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_DATE_TIME,
  ADD_USER,
} from "../action-types/cart-types";

export const addUser = (dispatch, user) => {
  dispatch({
    type: ADD_USER,
    payload: user,
  });
};

export const addToCart = (dispatch, car) => {
  dispatch({
    type: ADD_TO_CART,
    payload: car,
  });
};

export const removeFromCart = (dispatch, car) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: car,
  });
};

export const setDateTime = (dispatch, hours, date) => {
  dispatch({
    type: SET_DATE_TIME,
    payload: [hours, date],
  });
};
