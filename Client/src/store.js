import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { authLoginReducer } from "./Redux/Reducer/AuthReducer";
import {
  courseChapterCreateReducer,
  courseChapterDeleteReducer,
  courseChapterUpdateReducer,
  courseCreateReducer,
  courseFindOneReducer,
  courseFindReducer,
  courselanguageFindOneReducer,
  courseLessonCreateReducer,
  courseLessonDeleteReducer,
  courseLessonUpdateReducer,
  courseUpdateReducer
} from "./Redux/Reducer/courseReducer";

let Middleware = [thunk];

const appReducer = combineReducers({
  authLogin: authLoginReducer,
  courseCreate: courseCreateReducer,
  courseFind: courseFindReducer,
  courseFindOne: courseFindOneReducer,
  courselanguageFindOne:courselanguageFindOneReducer,
  courseUpdate: courseUpdateReducer,
  courseLessonCreate: courseLessonCreateReducer,
  courseLessonUpdate: courseLessonUpdateReducer,
  courseLessonDelete: courseLessonDeleteReducer,
  courseChapterCreate: courseChapterCreateReducer,
  courseChapterUpdate: courseChapterUpdateReducer,
  courseChapterDelete: courseChapterDeleteReducer
});

export const store = createStore(appReducer, applyMiddleware(...Middleware));
