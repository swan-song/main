import { ADD_TO_CART, REMOVE_FROM_CART } from "../action-types/cart-types";

const initialState = { cars: [], total: 0 };

const Cart = (state = initialState, action) => {
  let newState = state;

  switch (action.type) {
    case ADD_TO_CART:
      newState = {
        ...state,
        cars: [...state.cars, action.payload],
      };
      break;
    case REMOVE_FROM_CART:
      newState = {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload),
      };
      break;
  }

  return newState;
};

export default Cart;
