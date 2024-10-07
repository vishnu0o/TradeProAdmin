// ReferralLevel create reducer

import {
  REFERRAL_LEVEL_CREATE_ERR,
  REFERRAL_LEVEL_CREATE_REQUEST,
  REFERRAL_LEVEL_CREATE_SUCCESS,
  REFERRAL_LEVEL_FIND_ERR,
  REFERRAL_LEVEL_FIND_REQUEST,
  REFERRAL_LEVEL_FIND_SUCCESS
} from "../Constants/referralConstants";

export const referralLeveCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case REFERRAL_LEVEL_CREATE_REQUEST:
      return {
        ...state,
        referralLevelCreateLoading: true
      };
    case REFERRAL_LEVEL_CREATE_SUCCESS:
      return {
        ...state,
        referralLevelCreateLoading: false,
        referralLevelCreateSuccess: action.payload
      };
    case REFERRAL_LEVEL_CREATE_ERR:
      return {
        ...state,
        referralLevelCreateLoading: false,
        referralLevelCreateErr: action.payload
      };
    default:
      return state;
  }
};


export const referralLevelFindReducer = (state = {}, action) => {
  switch (action.type) {
    case REFERRAL_LEVEL_FIND_REQUEST:
      return {
        ...state,
        referralLevelFindLoading: true
      };
    case REFERRAL_LEVEL_FIND_SUCCESS:
      return {
        ...state,
        referralLevelFindLoading: false,
        referralLevelFindSuccess: action.payload
      };
    case REFERRAL_LEVEL_FIND_ERR:
      return {
        ...state,
        referralLevelFindLoading: false,
        referralLevelFindErr: action.payload
      };
    default:
      return state;
  }
};