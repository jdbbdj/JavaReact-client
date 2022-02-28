export const snackBarSuccessShowCall = (message) => (dispatch) => {
  try {
    dispatch({
      type: "SNACKBAR_SHOW_SUCCESS",
      payload: message,
    });
  } catch (e) {
    console.log("NONE");
  }
};

export const snackBarFailShowCall = (message) => (dispatch) => {
  try {
    dispatch({
      type: "SNACKBAR_SHOW_FAIL",
      payload: message,
    });
  } catch (e) {
    console.log("NONE");
  }
};

export const snackBarHideCall = (event) => (dispatch) => {
  try {
    dispatch({
      type: "SNACKBAR_CLEAR",
    });
  } catch (e) {
    console.log("NONE");
  }
};
