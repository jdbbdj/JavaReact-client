import axios from "axios";
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
      payload: res.data,
    });
  } catch (e) {
    console.log(e.response.data.message);
  }
};

export function testAction() {
  return { type: "USER_LOGS_DELETE" };
}

const handleErr = (err, dispatch) => {};
