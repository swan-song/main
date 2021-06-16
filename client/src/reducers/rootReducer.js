import { combineReducers } from "redux";
import Cart from "./cartReducer";
import Cars from "./carsReducer";

const rootReducer = combineReducers({
  Cart,
  Cars,
});

export default rootReducer;
