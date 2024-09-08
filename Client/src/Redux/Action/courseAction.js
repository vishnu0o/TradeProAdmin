import axios from "../../Axios/config";
import {
  COURSE_CREATE_ERR,
  COURSE_CREATE_REQUEST,
  COURSE_CREATE_SUCCESS,
  COURSE_FIND_ERR,
  COURSE_FIND_REQUEST,
  COURSE_FIND_SUCCESS
} from "../Constants/courseConstants";

// courseCreate Action
export const courseCreateAction = (formData) => async (dispatch, getState) => {
  try {
    dispatch({ type: COURSE_CREATE_REQUEST });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    // Send formData as the body, and pass config (with headers) as the second argument
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

    // const config = {
    //   headers: {
       
    //   },
    // };

    let { data } = await axios.get("/course/findCourse",);

    dispatch({ type: COURSE_FIND_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.response, "error.response");
    dispatch({ type: COURSE_FIND_ERR, payload: error.response?.data });
  }
};
