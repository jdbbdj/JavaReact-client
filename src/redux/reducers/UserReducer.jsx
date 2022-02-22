const initialState = {
  credible: false,
  name: "",
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case "USER_ACCESS":
      return { ...state, credible: true };
    case "USER_ACCESS_INVERSE":
      return { ...state, credible: false };
    case "USER_ACCESSNAME":
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

export default userReducers;
