import {
  SNACKBAR_SHOW_SUCCESS,
  SNACKBAR_SHOW_FAIL,
  SNACKBAR_CLEAR,
} from "../actionTypes/snackBarActionTypes";

import { TYPE_START, TYPE_FAIL, TYPE_SUCCESS } from "../../utils/api";

const initialState = {
  show: false,
  error: false,
  message: "",
};

const snackBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SNACKBAR_SHOW_FAIL:
      return {
        ...state,
        show: true,
        error: true,
        message: action.payload,
      };
    case SNACKBAR_SHOW_SUCCESS:
      return {
        ...state,
        show: true,
        error: false,
        message: action.payload,
      };
    case SNACKBAR_CLEAR:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
};

export default snackBarReducer;
