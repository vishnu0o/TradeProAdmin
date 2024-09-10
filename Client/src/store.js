import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { authLoginReducer } from "./Redux/Reducer/AuthReducer";
import { courseChapterCreateReducer, courseCreateReducer, courseFindOneReducer, courseFindReducer, courseLessonCreateReducer, courseUpdateReducer } from "./Redux/Reducer/courseReducer";


let Middleware = [thunk];

const appReducer = combineReducers({
  authLogin: authLoginReducer,
  courseCreate:courseCreateReducer,
  courseFind:courseFindReducer,
  courseFindOne:courseFindOneReducer,
  courseUpdate:courseUpdateReducer,
  courseLessonCreate:courseLessonCreateReducer,
  courseChapterCreate:courseChapterCreateReducer
});

export const store = createStore(appReducer, applyMiddleware(...Middleware));
