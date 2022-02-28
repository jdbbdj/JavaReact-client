export const modalOpen = () => (dispatch) => {
  dispatch({ type: "MODAL_LOADING" });
  try {
    dispatch({ type: "MODAL_OPEN" });
  } catch (e) {
    console.log("NONE");
  }
};

export const modalClose = () => (dispatch) => {
  dispatch({ type: "MODAL_LOADING" });
  try {
    dispatch({ type: "MODAL_CLOSE" });
  } catch (e) {
    console.log("NONE");
  }
};
