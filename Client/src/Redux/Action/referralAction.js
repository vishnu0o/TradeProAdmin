import axios from "../../Axios/config";
import {
  REFERRAL_LEVEL_CREATE_ERR,
  REFERRAL_LEVEL_CREATE_REQUEST,
  REFERRAL_LEVEL_CREATE_SUCCESS,
  REFERRAL_LEVEL_FIND_ERR,
  REFERRAL_LEVEL_FIND_REQUEST,
  REFERRAL_LEVEL_FIND_SUCCESS
} from "../Constants/referralConstants";

// referralLevel create Action

export const referralLevelCreateAction =
  (level, commision) => async (dispatch, getState) => {
    try {
      dispatch({ type: REFERRAL_LEVEL_CREATE_REQUEST });

      let isUserExist = localStorage.getItem("loginInfo")
        ? JSON.parse(localStorage.getItem("loginInfo"))
        : null;

      const config = {
        headers: {
          Authorization: `Bearer ${isUserExist?.token}`
        }
      };

      let { data } = await axios.post(
        "/referral/createReferralLevel",
        { level, commision },
        config
      );

      dispatch({ type: REFERRAL_LEVEL_CREATE_SUCCESS, payload: data });
    } catch (error) {
      console.log(error.response, "error.response");
      dispatch({
        type: REFERRAL_LEVEL_CREATE_ERR,
        payload: error.response?.data
      });
    }
  };


  
// referralLevel find Action

export const referralLevelFindAction =
() => async (dispatch, getState) => {
  try {
    dispatch({ type: REFERRAL_LEVEL_FIND_REQUEST });

    let isUserExist = localStorage.getItem("loginInfo")
      ? JSON.parse(localStorage.getItem("loginInfo"))
      : null;

    const config = {
      headers: {
        Authorization: `Bearer ${isUserExist?.token}`
      }
    };

    let { data } = await axios.get(
      "/referral/findReferralLevel",
      config
    );

    dispatch({ type: REFERRAL_LEVEL_FIND_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.response, "error.response");
    dispatch({
      type: REFERRAL_LEVEL_FIND_ERR,
      payload: error.response?.data
    });
  }
};