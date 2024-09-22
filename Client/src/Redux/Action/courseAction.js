import axios from "../../Axios/config";
import {
  COURSE_CHAPTER_CREATE_ERR,
  COURSE_CHAPTER_CREATE_REQUEST,
  COURSE_CHAPTER_CREATE_SUCCESS,
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

// courseCreate Action
export const courseCreateAction = (formData) => async (dispatch, getState) => {
  try {
    dispatch({ type: COURSE_CREATE_REQUEST });

    let isUserExist = localStorage.getItem("loginInfo")
      ? JSON.parse(localStorage.getItem("loginInfo"))
      : null;

    const config = {
      headers: {
        Authorization: `Bearer ${isUserExist?.token}`,
        "Content-Type": "multipart/form-data"
      }
    };

    let { data } = await axios.post("/course/createCourse", formData, config);

    dispatch({ type: COURSE_CREATE_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.response, "error.response");
    dispatch({ type: COURSE_CREATE_ERR, payload: error.response?.data });
  }
};

// courseFind Action
export const courseFindAction = (formData) => async (dispatch, getState) => {
  try {
    dispatch({ type: COURSE_FIND_REQUEST });

    let isUserExist = localStorage.getItem("loginInfo")
      ? JSON.parse(localStorage.getItem("loginInfo"))
      : null;

    const config = {
      headers: {
        Authorization: `Bearer ${isUserExist?.token}`
      }
    };

    let { data } = await axios.get("/course/findCourse", config);

    dispatch({ type: COURSE_FIND_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.response, "error.response");
    dispatch({ type: COURSE_FIND_ERR, payload: error.response?.data });
  }
};

// courseFindOne Action
export const courseFindOneAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: COURSE_FINDONE_REQUEST });

    let isUserExist = localStorage.getItem("loginInfo")
      ? JSON.parse(localStorage.getItem("loginInfo"))
      : null;

    const config = {
      headers: {
        Authorization: `Bearer ${isUserExist?.token}`
      }
    };

    let { data } = await axios.get(`/course/findOneCourse?id=${id}`, config);

    dispatch({ type: COURSE_FINDONE_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.response, "error.response");
    dispatch({ type: COURSE_FINDONE_ERR, payload: error.response?.data });
  }
};

// courseUpdate Action

export const courseUpdateAction = (formData) => async (dispatch, getState) => {
  try {
    dispatch({ type: COURSE_UPDATE_REQUEST });

    let isUserExist = localStorage.getItem("loginInfo")
      ? JSON.parse(localStorage.getItem("loginInfo"))
      : null;

    const config = {
      headers: {
        Authorization: `Bearer ${isUserExist?.token}`,
        "Content-Type": "multipart/form-data"
      }
    };

    let { data } = await axios.put("/course/editCourse", formData, config);

    dispatch({ type: COURSE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.response, "error.response");
    dispatch({ type: COURSE_UPDATE_ERR, payload: error.response?.data });
  }
};

// courseLesson create Action

export const courseLessonCreateAction =
  (selectedLanguage,lesson, id) => async (dispatch, getState) => {
    try {
      dispatch({ type: COURSE_LESSON_CREATE_REQUEST });

      let isUserExist = localStorage.getItem("loginInfo")
        ? JSON.parse(localStorage.getItem("loginInfo"))
        : null;

      const config = {
        headers: {
          Authorization: `Bearer ${isUserExist?.token}`
        }
      };

      let { data } = await axios.post(
        "/course/createLesson",
        { selectedLanguage,lesson, id },
        config
      );

      dispatch({ type: COURSE_LESSON_CREATE_SUCCESS, payload: data });
    } catch (error) {
      console.log(error.response, "error.response");
      dispatch({
        type: COURSE_LESSON_CREATE_ERR,
        payload: error.response?.data
      });
    }
  };

// courseLesson update Action

export const courseLessonUpdateAction =
  (lesson, courseId, lessonId) => async (dispatch, getState) => {
    try {
      dispatch({ type: COURSE_LESSON_UPDATE_REQUEST });

      let isUserExist = localStorage.getItem("loginInfo")
        ? JSON.parse(localStorage.getItem("loginInfo"))
        : null;

      const config = {
        headers: {
          Authorization: `Bearer ${isUserExist?.token}`
        }
      };

      let { data } = await axios.put(
        "/course/updateLesson",
        { lesson, courseId, lessonId },
        config
      );

      dispatch({ type: COURSE_LESSON_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      console.log(error.response, "error.response");
      dispatch({
        type: COURSE_LESSON_UPDATE_ERR,
        payload: error.response?.data
      });
    }
  };

// courseLesson delete Action

export const courseLessonDeleteAction =
  (courseId, lessonId) => async (dispatch, getState) => {
    try {
      dispatch({ type: COURSE_LESSON_DELETE_REQUEST });

      let isUserExist = localStorage.getItem("loginInfo")
        ? JSON.parse(localStorage.getItem("loginInfo"))
        : null;

      const config = {
        headers: {
          Authorization: `Bearer ${isUserExist?.token}`
        }
      };

      let { data } = await axios.delete(
        `/course/deleteLesson?courseId=${courseId}&&lessonId=${lessonId}`,
        config
      );

      dispatch({ type: COURSE_LESSON_DELETE_SUCCESS, payload: data });
    } catch (error) {
      console.log(error.response, "error.response");
      dispatch({
        type: COURSE_LESSON_DELETE_ERR,
        payload: error.response?.data
      });
    }
  };

// courseChapter create Action

export const courseChapterCreateAction =
  (formData) => async (dispatch, getState) => {
    try {
      dispatch({ type: COURSE_CHAPTER_CREATE_REQUEST });

      let isUserExist = localStorage.getItem("loginInfo")
        ? JSON.parse(localStorage.getItem("loginInfo"))
        : null;

      const config = {
        headers: {
          Authorization: `Bearer ${isUserExist?.token}`,
          "Content-Type": "multipart/form-data"
        }
      };

      let { data } = await axios.post(
        "/course/createChapter",
        formData,
        config
      );

      dispatch({ type: COURSE_CHAPTER_CREATE_SUCCESS, payload: data });
    } catch (error) {
      console.log(error.response, "error.response");
      dispatch({
        type: COURSE_CHAPTER_CREATE_ERR,
        payload: error.response?.data
      });
    }
  };

// courseChapter update Action

export const courseChapterUpdateAction =
  (formData) => async (dispatch, getState) => {
    try {
      dispatch({ type: COURSE_CHAPTER_UPDATE_REQUEST });

      let isUserExist = localStorage.getItem("loginInfo")
        ? JSON.parse(localStorage.getItem("loginInfo"))
        : null;

      const config = {
        headers: {
          Authorization: `Bearer ${isUserExist?.token}`,
          "Content-Type": "multipart/form-data"
        }
      };

      let { data } = await axios.put("/course/updateChapter", formData, config);

      dispatch({ type: COURSE_CHAPTER_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      console.log(error.response, "error.response");
      dispatch({
        type: COURSE_CHAPTER_UPDATE_ERR,
        payload: error.response?.data
      });
    }
  };

// courseChapter delete Action

export const courseChapterDeleteAction =
  (courseId, lessonId, chapterId) => async (dispatch, getState) => {
    try {
      dispatch({ type: COURSE_CHAPTER_UPDATE_REQUEST });

      let isUserExist = localStorage.getItem("loginInfo")
        ? JSON.parse(localStorage.getItem("loginInfo"))
        : null;

      const config = {
        headers: {
          Authorization: `Bearer ${isUserExist?.token}`
        }
      };

      let { data } = await axios.delete(
        `/course/deleteChapter?courseId=${courseId}&&lessonId=${lessonId}&&chapterId=${chapterId}`,
        config
      );

      dispatch({ type: COURSE_CHAPTER_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      console.log(error.response, "error.response");
      dispatch({
        type: COURSE_CHAPTER_UPDATE_ERR,
        payload: error.response?.data
      });
    }
  };
