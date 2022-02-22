import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export function credibilityUpdate() {
  return { type: "USER_ACCESS" };
}

export function inversecredibilityUpdate() {
  return { type: "USER_ACCESS_INVERSE" };
}

export const fetchUsername = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8080/home/james`);
    dispatch({
      type: "USER_ACCESSNAME",
      payload: res.data.message,
    });
  } catch (e) {
    dispatch({
      type: "USER_ACCESS_INVERSE",
      payload: console.log(e),
    });
  }
};
