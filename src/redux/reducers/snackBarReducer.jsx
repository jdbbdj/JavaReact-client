import {
  SNACKBAR_SUCCESS,
  SNACKBAR_FAILED,
  SNACKBAR_FAILED_MESSAGE,
} from "../actionTypes/snackBarActionTypes";

const initialState = {
  success: false,
  hasLogin: false,
  message: "",
};

const snackBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SNACKBAR_SUCCESS:
      return { ...state, success: true, hasLogin: true };
    case SNACKBAR_FAILED:
      return { ...state, success: true, hasLogin: false };
    case SNACKBAR_FAILED_MESSAGE:
      return {
        ...state,
        success: true,
        hasLogin: false,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default snackBarReducer;
