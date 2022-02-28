import { combineReducers } from "redux";
import userReducers from "./UserReducer";
import snackBarReducer from "./snackBarReducer";
import modalReducer from "./modalReducer";
const rootReducer = combineReducers({
  userReducers,
  snackBarReducer,
  modalReducer,
});

export default rootReducer;
