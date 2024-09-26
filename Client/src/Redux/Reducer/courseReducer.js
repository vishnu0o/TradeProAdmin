import {
  COURSE_CHAPTER_CREATE_ERR,
  COURSE_CHAPTER_CREATE_REQUEST,
  COURSE_CHAPTER_CREATE_SUCCESS,
  COURSE_CHAPTER_DELETE_ERR,
  COURSE_CHAPTER_DELETE_REQUEST,
  COURSE_CHAPTER_DELETE_SUCCESS,
  COURSE_CHAPTER_UPDATE_ERR,
  COURSE_CHAPTER_UPDATE_REQUEST,
  COURSE_CHAPTER_UPDATE_SUCCESS,
  COURSE_CREATE_ERR,
  COURSE_CREATE_REQUEST,
  COURSE_CREATE_SUCCESS,
  COURSE_FIND_ERR,
  COURSE_FIND_REQUEST,
  COURSE_FIND_SUCCESS,
  COURSE_FINDONE_ERR,
  COURSE_FINDONE_REQUEST,
  COURSE_FINDONE_SUCCESS,
  COURSE_LANGUAGE_FINDONE_ERR,
  COURSE_LANGUAGE_FINDONE_REQUEST,
  COURSE_LANGUAGE_FINDONE_SUCCESS,
  COURSE_LESSON_CREATE_ERR,
  COURSE_LESSON_CREATE_REQUEST,
  COURSE_LESSON_CREATE_SUCCESS,
  COURSE_LESSON_DELETE_ERR,
  COURSE_LESSON_DELETE_REQUEST,
  COURSE_LESSON_DELETE_SUCCESS,
  COURSE_LESSON_UPDATE_ERR,
  COURSE_LESSON_UPDATE_REQUEST,
  COURSE_LESSON_UPDATE_SUCCESS,
  COURSE_UPDATE_ERR,
  COURSE_UPDATE_REQUEST,
  COURSE_UPDATE_SUCCESS
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


export const courseFindOneReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSE_FINDONE_REQUEST:
      return {
        ...state,
        courseFindOneLoading: true
      };
    case COURSE_FINDONE_SUCCESS:
      return {
        ...state,
        courseFindOneLoading: false,
        courseFindOneSuccess: action.payload
      };
    case COURSE_FINDONE_ERR:
      return {
        ...state,
        courseFindOneLoading: false,
        courseFindOneErr: action.payload
      };
    default:
      return state;
  }
};


export const courselanguageFindOneReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSE_LANGUAGE_FINDONE_REQUEST:
      return {
        ...state,
        courselanguageFindOneLoading: true
      };
    case COURSE_LANGUAGE_FINDONE_SUCCESS:
      return {
        ...state,
        courselanguageFindOneLoading: false,
        courselanguageFindOneSuccess: action.payload
      };
    case COURSE_LANGUAGE_FINDONE_ERR:
      return {
        ...state,
        courselanguageFindOneLoading: false,
        courselanguageFindOneErr: action.payload
      };
    default:
      return state;
  }
};

export const courseUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSE_UPDATE_REQUEST:
      return {
        ...state,
        courseUpdateLoading: true
      };
    case COURSE_UPDATE_SUCCESS:
      return {
        ...state,
        courseUpdateLoading: false,
        courseUpdateSuccess: action.payload
      };
    case COURSE_UPDATE_ERR:
      return {
        ...state,
        courseUpdateLoading: false,
        courseUpdateErr: action.payload
      };
    default:
      return state;
  }
};


export const courseLessonCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSE_LESSON_CREATE_REQUEST:
      return {
        ...state,
        courseLessonCreateLoading: true
      };
    case COURSE_LESSON_CREATE_SUCCESS:
      return {
        ...state,
        courseLessonCreateLoading: false,
        courseLessonCreateSuccess: action.payload
      };
    case COURSE_LESSON_CREATE_ERR:
      return {
        ...state,
        courseLessonCreateLoading: false,
        courseLessonCreateErr: action.payload
      };
    default:
      return state;
  }
};

export const courseLessonUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSE_LESSON_UPDATE_REQUEST:
      return {
        ...state,
        courseLessonUpdateLoading: true
      };
    case COURSE_LESSON_UPDATE_SUCCESS:
      return {
        ...state,
        courseLessonUpdateLoading: false,
        courseLessonUpdateSuccess: action.payload
      };
    case COURSE_LESSON_UPDATE_ERR:
      return {
        ...state,
        courseLessonUpdateLoading: false,
        courseLessonUpdateErr: action.payload
      };
    default:
      return state;
  }
};


export const courseLessonDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSE_LESSON_DELETE_REQUEST:
      return {
        ...state,
        courseLessonDeleteLoading: true
      };
    case COURSE_LESSON_DELETE_SUCCESS:
      return {
        ...state,
        courseLessonDeleteLoading: false,
        courseLessonDeleteSuccess: action.payload
      };
    case COURSE_LESSON_DELETE_ERR:
      return {
        ...state,
        courseLessonDeleteLoading: false,
        courseLessonDeleteErr: action.payload
      };
    default:
      return state;
  }
};

export const courseChapterCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSE_CHAPTER_CREATE_REQUEST:
      return {
        ...state,
        courseChapterCreateLoading: true
      };
    case COURSE_CHAPTER_CREATE_SUCCESS:
      return {
        ...state,
        courseChapterCreateLoading: false,
        courseChapterCreateSuccess: action.payload
      };
    case COURSE_CHAPTER_CREATE_ERR:
      return {
        ...state,
        courseChapterCreateLoading: false,
        courseChapterCreateErr: action.payload
      };
    default:
      return state;
  }
};



export const courseChapterUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSE_CHAPTER_UPDATE_REQUEST:
      return {
        ...state,
        courseChapterUpdateLoading: true
      };
    case COURSE_CHAPTER_UPDATE_SUCCESS:
      return {
        ...state,
        courseChapterUpdateLoading: false,
        courseChapterUpdateSuccess: action.payload
      };
    case COURSE_CHAPTER_UPDATE_ERR:
      return {
        ...state,
        courseChapterUpdateLoading: false,
        courseChapterUpdateErr: action.payload
      };
    default:
      return state;
  }
};


export const courseChapterDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSE_CHAPTER_DELETE_REQUEST:
      return {
        ...state,
        courseChapterDeleteLoading: true
      };
    case COURSE_CHAPTER_DELETE_SUCCESS:
      return {
        ...state,
        courseChapterDeleteLoading: false,
        courseChapterDeleteSuccess: action.payload
      };
    case COURSE_CHAPTER_DELETE_ERR:
      return {
        ...state,
        courseChapterDeleteLoading: false,
        courseChapterDeleteErr: action.payload
      };
    default:
      return state;
  }
};