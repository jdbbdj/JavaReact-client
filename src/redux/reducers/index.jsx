import { combineReducers } from "redux";
import userReducers from "./UserReducer";
import snackBarReducer from "./snackBarReducer";

const rootReducer = combineReducers({
  userReducers,
  snackBarReducer,
});

export default rootReducer;
