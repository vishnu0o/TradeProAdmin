import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { authLoginReducer } from "./Redux/Reducer/AuthReducer";
import { courseCreateReducer, courseFindReducer } from "./Redux/Reducer/courseReducer";


let Middleware = [thunk];

const appReducer = combineReducers({
  authLogin: authLoginReducer,
  courseCreate:courseCreateReducer,
  courseFind:courseFindReducer
});

export const store = createStore(appReducer, applyMiddleware(...Middleware));
