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

export const logsView = (userEndpoint, logId) => async (dispatch) => {
  await APICall(
    dispatch,
    axios.get(`${BASE_URL}/home/${userEndpoint}/${logId}`),
    "LOGS_VIEW"
  );
};

export const logsAppend = (userEndpoint, logs) => async (dispatch) => {
  try {
    await APICall(
      dispatch,
      axios.post(`${BASE_URL}/home/${userEndpoint}/generate`, logs),
      "LOGS_APPEND"
    );
    dispatch(fetchUsername(userEndpoint));
    dispatch(snackBarSuccessShowCall("Add Successfully"));
  } catch (err) {
    dispatch(snackBarFailShowCall(err));
  }
};

export const logsUpdate = (userEndpoint, logs) => async (dispatch) => {
  try {
    await APICall(
      dispatch,
      axios.put(`${BASE_URL}/home/${userEndpoint}/${logs.id}`, logs),
      "LOGS_UPDATE"
    );
    dispatch(fetchUsername(userEndpoint));
    dispatch(snackBarSuccessShowCall("Update Successfully"));
  } catch (err) {
    dispatch(snackBarFailShowCall(err));
  }
};
