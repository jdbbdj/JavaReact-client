import { USER_ACCESS } from "../actionTypes/UserActionTypes";

const initialState = {
  credible: false,
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case "USER_ACCESS":
      return { ...state, credible: true };
    case "USER_ACCESS_INVERSE":
      return { ...state, credible: false };
    default:
      return state;
  }
};

export default userReducers;
