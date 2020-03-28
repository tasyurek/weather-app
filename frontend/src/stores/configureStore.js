import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import weatherReducer from "../reducers/weather";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  return createStore(
    combineReducers({
      data: weatherReducer
    }),
    //composeEnhancers(applyMiddleware(thunk))
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};
