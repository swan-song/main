import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_DATE_TIME,
  ADD_USER,
} from "../action-types/cart-types";

const initialState = { users: "", cars: [], hours: 0, date: "" };

const Cart = (state = initialState, action) => {
  let newState = state;

  switch (action.type) {
    case ADD_TO_CART:
      newState = {
        ...state,
        cars: [(state.cars = action.payload)],
      };
      break;
    case REMOVE_FROM_CART:
      newState = {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload),
      };
      break;
    case SET_DATE_TIME:
      newState = {
        ...state,
        hours: (state.hours = action.payload[0]),
        date: (state.date = action.payload[1]),
      };
      break;
    case ADD_USER:
      newState = {
        ...state,
        users: (state.users = action.payload),
      };
      break;
    default:
      break;
  }

  return newState;
};

export default Cart;
