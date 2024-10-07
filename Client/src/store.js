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
  courseQuizCreateReducer,
  courseQuizDeleteReducer,
  courseUpdateReducer
} from "./Redux/Reducer/courseReducer";
import { referralLeveCreateReducer, referralLevelFindReducer } from "./Redux/Reducer/referralReducer";

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
  courseChapterDelete: courseChapterDeleteReducer,
  courseQuizCreate:courseQuizCreateReducer,
  courseQuizDelete:courseQuizDeleteReducer,
  referralLeveCreate:referralLeveCreateReducer,
  referralLevelFind:referralLevelFindReducer

});

export const store = createStore(appReducer, applyMiddleware(...Middleware));
