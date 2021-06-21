import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./cartDuck";
import notificationReducer from "./notificationDuck";
import productReducer from "./productsDuck";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
  notification: notificationReducer,
});


const generateStore = () => {
  const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
  return store;
}

const store = generateStore();

export default store;