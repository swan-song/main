import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_DATE_TIME,
} from "../action-types/cart-types";

const initialState = { cars: [], total: 0, hours: 0, date: "" };

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
    default:
      break;
  }

  // const singleCarTotals = newState.cars.map((car) => car.hours * car.price);
  // const updatedTotal = singleCarTotals.reduce((sum, car) => sum + car, 0);

  // newState.total = updatedTotal;

  // const cartHours = newState.cars.map((car) => car.hours);
  // const updatedCartHours = cartHours.reduce((sum, product) => sum + product, 0);
  // newState.cars = updatedCartHours;

  return newState;
};

export default Cart;
