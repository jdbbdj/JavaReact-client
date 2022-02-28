import {
  MODAL_OPEN,
  MODAL_CLOSE,
  MODAL_LOADING,
} from "../actionTypes/modalActionTypes";

import { TYPE_START, TYPE_FAIL, TYPE_SUCCESS } from "../../utils/api";

const initialState = {
  open: false,
  loading: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        ...state,
        open: true,
        loading: false,
      };
    case MODAL_LOADING:
      return {
        ...state,
        open: false,
        loading: true,
      };
    case MODAL_CLOSE:
      return {
        ...state,
        open: false,
        loading: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
