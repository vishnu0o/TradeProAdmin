import {
  COURSE_CREATE_ERR,
  COURSE_CREATE_REQUEST,
  COURSE_CREATE_SUCCESS,
  COURSE_FIND_ERR,
  COURSE_FIND_REQUEST,
  COURSE_FIND_SUCCESS
} from "../Constants/courseConstants";

export const courseCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSE_CREATE_REQUEST:
      return {
        ...state,
        courseCreateLoading: true
      };
    case COURSE_CREATE_SUCCESS:
      return {
        ...state,
        courseCreateLoading: false,
        courseCreateSuccess: action.payload
      };
    case COURSE_CREATE_ERR:
      return {
        ...state,
        courseCreateLoading: false,
        courseCreateErr: action.payload
      };
    default:
      return state;
  }
};


export const courseFindReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSE_FIND_REQUEST:
      return {
        ...state,
        courseFindLoading: true
      };
    case COURSE_FIND_SUCCESS:
      return {
        ...state,
        courseFindLoading: false,
        courseFindSuccess: action.payload
      };
    case COURSE_FIND_ERR:
      return {
        ...state,
        courseFindLoading: false,
        courseFindErr: action.payload
      };
    default:
      return state;
  }
};