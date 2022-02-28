import axios from "axios";
import { useDispatch } from "react-redux";
import {
  snackBarFailShowCall,
  snackBarSuccessShowCall,
} from "./snackBarAction";
import {
  TYPE_SUCCESS,
  TYPE_LOADING,
  TYPE_FAIL,
  APICall,
} from "../../utils/api";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const credibilityUpdate = (username) => (dispatch) => {
  try {
    dispatch({
      type: "USER_ACCESS",
      payload: username,
    });
  } catch (e) {
    console.log("NONE");
  }
};

export function inversecredibilityUpdate() {
  return { type: "USER_ACCESS_INVERSE" };
}

export const fetchUsername = (userEndpoint) => async (dispatch) => {
  await APICall(
    dispatch,
    axios.get(`${BASE_URL}/home/${userEndpoint}`),
    "USER_ACCESSNAME"
  );
};

export const testAction = (newLogs) => async (dispatch) => {
  dispatch({
    type: "LOGS_APPEND",
    payload: newLogs,
  });
};

export const logDelete = (userEndpoint, logId) => async (dispatch) => {
  try {
    const res = await axios.delete(`${BASE_URL}/home/${userEndpoint}/${logId}`);
    dispatch({
      type: "LOGS_DELETE",
    });
    dispatch(fetchUsername(userEndpoint));
    dispatch(snackBarSuccessShowCall("Delete Successfully"));
  } catch (e) {
    dispatch(snackBarFailShowCall(e));
  }
};

const handleErr = (err, dispatch) => {};
