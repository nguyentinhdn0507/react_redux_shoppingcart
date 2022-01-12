import { combineReducers } from "redux";
import products from "./products";
import cart from "./cart";
import messageWeb from "./messageWeb";

const appReducers = combineReducers({
  products,
  cart,
  messageWeb,
});

export default appReducers;
