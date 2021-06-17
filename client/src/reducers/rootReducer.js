import { combineReducers } from "redux";
import Cart from "./cartReducer";
import Cars from "./carsReducer";
import SingleCar from "./singleCarReducer";

const rootReducer = combineReducers({
  Cart,
  Cars,
  SingleCar,
});

export default rootReducer;
