export function snackBarSuccess() {
  return { type: "SNACKBAR_SUCCESS" };
}

export function snackBarFailed() {
  return { type: "SNACKBAR_FAILED" };
}

export const snackBarFailedMessage = (error) => (dispatch) => {
  try {
    dispatch({
      type: "SNACKBAR_FAILED_MESSAGE",
      payload: error,
    });
  } catch (e) {
    console.log("NONE");
  }
};
