import axios from "axios";
import { snackBarFailedMessage } from "./snackBarAction";
import { useDispatch } from "react-redux";
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
  try {
    const res = await axios.get(`http://localhost:8080/home/${userEndpoint}`);
    dispatch({
      type: "USER_ACCESSNAME",
      payload: res.data.message,
    });
  } catch (e) {
    handleErr(e, dispatch);
  }
};

const handleErr = (err, dispatch) => {
  dispatch(snackBarFailedMessage(err.response.data.message));
};
