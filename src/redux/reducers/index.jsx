import { combineReducers } from "redux";
import userReducers from "./UserReducer";

const rootReducer = combineReducers({
  userReducers,
});

export default rootReducer;
